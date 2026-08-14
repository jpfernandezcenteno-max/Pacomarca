<?php
/**
 * Handler del formulario de contacto de Pacomarca.
 * Recibe el POST (JSON o form-data) del formulario, valida y envía el correo.
 * Colocar en la raíz del hosting (public_html/contacto.php).
 *
 * El formulario hace fetch a "/contacto.php" y espera JSON: { ok: true } | { ok: false, error }.
 */

// ─────────────────────────────────────────────────────────────
//  CONFIGURACIÓN  (ajustar estos 3 valores en el hosting)
// ─────────────────────────────────────────────────────────────
$DESTINATARIO = 'contacto@pacomarca.com';          // Correo donde llegan los mensajes
$REMITENTE    = 'no-reply@pacomarca.com';           // Debe ser un correo del propio dominio (cPanel) para buena entregabilidad
$ASUNTO_BASE  = 'Nuevo mensaje de contacto — Pacomarca';
// ─────────────────────────────────────────────────────────────

// Producción: no mostrar errores de PHP al cliente
error_reporting(E_ALL);
ini_set('display_errors', '0');

header('Content-Type: application/json; charset=utf-8');

// Responder JSON y terminar
function responder($ok, $error = '')
{
    http_response_code($ok ? 200 : 400);
    echo json_encode($ok ? ['ok' => true] : ['ok' => false, 'error' => $error], JSON_UNESCAPED_UNICODE);
    exit;
}

// Solo POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    responder(false, 'Método no permitido.');
}

// ── Leer datos: acepta JSON o application/x-www-form-urlencoded / multipart ──
$raw  = file_get_contents('php://input');
$data = [];
if ($raw && stripos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== false) {
    $data = json_decode($raw, true) ?: [];
} else {
    $data = $_POST;
}

function campo($data, $clave)
{
    return isset($data[$clave]) ? trim((string) $data[$clave]) : '';
}

// ── Honeypot anti-spam: campo oculto que un humano deja vacío ──
if (campo($data, 'website') !== '') {
    // Es un bot: fingimos éxito para no darle pistas.
    responder(true);
}

// ── Recoger y validar ──
$rol     = campo($data, 'rol');
$nombre  = campo($data, 'nombre');
$email   = campo($data, 'email');
$mensaje = campo($data, 'mensaje');

if ($nombre === '' || $email === '' || $mensaje === '') {
    responder(false, 'Faltan campos obligatorios.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    responder(false, 'El correo electrónico no es válido.');
}

// Evitar inyección de cabeceras en nombre/email (sin saltos de línea)
$nombre = str_replace(["\r", "\n"], ' ', $nombre);
$email  = str_replace(["\r", "\n"], '', $email);

// Etiquetas legibles para el rol
$rolesLegibles = [
    'alpaquero'  => 'Alpaquero',
    'cientifico' => 'Científico',
    'marca'      => 'Empresa o Marca',
    'programa'   => 'Apoyo a programas',
    'otro'       => 'Otro',
];
$rolLabel = $rolesLegibles[$rol] ?? 'No especificado';

// ── Construir el correo ──
$asunto = $ASUNTO_BASE . ' (' . $rolLabel . ')';

$cuerpo  = "Nuevo mensaje desde el formulario de contacto de Pacomarca:\n\n";
$cuerpo .= "Soy:      {$rolLabel}\n";
$cuerpo .= "Nombre:   {$nombre}\n";
$cuerpo .= "Correo:   {$email}\n";
$cuerpo .= "----------------------------------------\n";
$cuerpo .= "Mensaje:\n{$mensaje}\n";
$cuerpo .= "----------------------------------------\n";
$cuerpo .= 'Enviado el ' . date('d/m/Y H:i') . "\n";

// Cabeceras: From del dominio, Reply-To del visitante (para responderle directo)
$headers  = 'From: Pacomarca Web <' . $REMITENTE . ">\r\n";
$headers .= 'Reply-To: ' . $nombre . ' <' . $email . ">\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion() . "\r\n";

// Envío. El 5º parámetro fija el sender (mejora la entregabilidad en cPanel).
$enviado = @mail(
    $DESTINATARIO,
    '=?UTF-8?B?' . base64_encode($asunto) . '?=',
    $cuerpo,
    $headers,
    '-f' . $REMITENTE
);

if ($enviado) {
    responder(true);
} else {
    responder(false, 'No se pudo enviar el mensaje. Intenta más tarde.');
}
