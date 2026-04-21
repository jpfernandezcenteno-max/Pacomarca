import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones Específicos | Pacomarca',
  description: 'Términos y Condiciones de Uso Específicos para la adquisición de productos y servicios de INCA TOPS S.A. a través de Pacomarca.',
}

export default function TerminosEspecificosPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24">

        <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">Última actualización: julio 2025</p>
        <h1 className="font-serif text-4xl text-ink mb-16">Términos y Condiciones de Uso Específicos</h1>

        <div className="prose prose-sm max-w-none text-ink/70 leading-relaxed space-y-10">

          <section>
            <h2 className="font-serif text-xl text-ink mb-4">1. Disposiciones Generales</h2>
            <p>Bienvenido/a la página web de INCA TOPS S.A. (en adelante, "INCA TOPS"). Este documento regula los términos y condiciones contractuales para la adquisición de productos y/o servicios ofrecidos por INCA TOPS S.A. a través de esta página web.</p>
            <p className="mt-4">Al acceder y utilizar nuestro sitio, aceptas cumplir con los presentes Términos y Condiciones (en adelante "Términos y Condiciones y/o T&C"). Es obligación del usuario leerlos detenidamente, antes de realizar el pago, para finalizar cualquier compra.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink mb-4">2. Política de Promociones</h2>

            <h3 className="font-serif text-base text-ink mt-4 mb-3">2.1 Descuentos y Promociones</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-ink mb-2">Descuento Web Exclusivo del 3%</h4>
                <p>Todos los productos (excepto los de la categoría Ofertas) tienen un descuento automático del 3%, el cual se aplica y refleja directamente en el checkout al momento de pagar. Este descuento no es acumulable con otras promociones vigentes.</p>
              </div>
              <div>
                <h4 className="font-medium text-ink mb-2">Promociones "CONOFERTAS"</h4>
                <p>De forma periódica, activamos descuentos especiales en productos seleccionados, bajo la campaña denominada CONOFERTAS. Estas promociones aplican únicamente a colores específicos de calidades determinadas, y los descuentos pueden variar según el stock disponible.</p>
                <p className="mt-3">Los descuentos de CONOFERTAS no son acumulables con otras promociones ni aplican fuera del periodo publicado.</p>
                <p className="mt-3">Los colores de los productos pueden variar según la configuración de pantalla del dispositivo utilizado para la compra. Las imágenes mostradas en la web son referenciales y pueden no representar con exactitud el tono real del hilado. Los pedidos confirmados de nuestro almacén están sujetos a disponibilidad y condiciones logísticas.</p>
                <p className="mt-3">Nos reservamos el derecho de modificar precios, condiciones de venta y disponibilidad sin previo aviso. INCA TOPS no se hace responsable por retrasos en la entrega ocasionados por factores externos como condiciones climáticas, problemas de transporte o regulaciones aduaneras. Al realizar una compra, el cliente acepta estos Términos y Condiciones.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink mb-4">3. Política de Envíos y Pago</h2>

            <h3 className="font-serif text-base text-ink mt-4 mb-3">3.1 Envíos y Entregas</h3>
            <p>Todos nuestros hilados en presentación de Cono se venden con un peso de 1 kg con una desviación de +-3%.</p>
            <p className="mt-4">Para las presentaciones en Ovillos o Madejas, se requiere un pedido mínimo de 30 kg que puede incluir hasta 5 colores (6 kg por color).</p>
            <p className="mt-4">El despacho se realiza dependiendo del país en el que se realice la compra:</p>
            <ul className="mt-3 space-y-3 list-disc pl-6">
              <li><strong>Estados Unidos de Norteamérica:</strong> En el máximo plazo indicado al momento de confirmación del pedido.</li>
              <li><strong>Perú:</strong> En un máximo de 24 horas luego de la confirmación interna del pedido. En el caso de compra de productos en Ovillo o Madejas, el despacho se realizará a las 2 o 3 semanas de confirmado el pedido.</li>
            </ul>

            <p className="mt-6">Contamos con varias opciones de envío, incluyendo envío estándar, envío prioritario y envío gratuito en campañas específicas. El cliente podrá elegir su opción de envío en el proceso de compra, y el costo total se actualizará automáticamente según su elección.</p>

            <div className="mt-6">
              <h4 className="font-medium text-ink mb-2">Recojo en Tienda</h4>
              <p>Disponible únicamente para compras realizadas dentro de Perú, en nuestras tiendas físicas de Lima y Arequipa.</p>
            </div>

            <h3 className="font-serif text-base text-ink mt-8 mb-3">3.2 Medios de Pago y Seguridad</h3>
            <p>Los precios de los productos o servicios se muestran en dólares estadounidenses, incluyendo o excluyendo impuestos según se indique expresamente.</p>
            <p className="mt-4">INCA TOPS se reserva el derecho a modificar los precios en cualquier momento, lo cual no afectará, en modo alguno, los pedidos ya confirmados.</p>
            <p className="mt-4">La sección Stock Service de la página web opera con pasarelas de pago seguras y certificadas. Toda la información ingresada está protegida por altos estándares de encriptación. El usuario podrá realizar el pago mediante los métodos disponibles en la plataforma (tarjetas de crédito/débito, transferencias, plataformas de pago electrónico, etc.).</p>
            <p className="mt-4 font-medium text-ink">Atención importante: No solicitamos datos personales ni contraseñas por canales externos o informales. Te recomendamos verificar siempre que estés navegando en nuestra web oficial antes de realizar una transacción.</p>

            <h3 className="font-serif text-base text-ink mt-8 mb-3">3.3 Confirmación de Pedido</h3>
            <p>Una vez que el usuario complete el proceso de compra y realice el pago, recibirá una confirmación al correo electrónico registrado, indicando el estado del pedido y los tiempos estimados de entrega. La aceptación del pedido está condicionada a la disponibilidad del producto.</p>
            <p className="mt-4">Toda orden está sujeta a confirmación interna, verificación de stock disponible y validación del pago. INCA TOPS se reserva el derecho a rechazar o cancelar cualquier pedido en caso de incumplimiento de estos términos, sospecha de fraude o error en la información proporcionada por parte del usuario.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink mb-4">4. Política de Devoluciones</h2>

            <h3 className="font-serif text-base text-ink mt-4 mb-3">4.1 Cambios, Devoluciones y Cancelaciones</h3>
            <p>Por tratarse de productos industriales y al por mayor, solo se aceptarán cambios y/o devoluciones en el caso exista un error en el envío o un defecto de fábrica. INCA TOPS no será responsable por daños derivados de un uso inadecuado del producto.</p>
            <p className="mt-4">Si recibiste un producto que no corresponde a tu orden, contáctanos dentro de las <strong>24 horas posteriores a la entrega</strong> con fotos y detalles del caso.</p>

            <h3 className="font-serif text-base text-ink mt-6 mb-3">4.2 Disclaimer de Colores</h3>
            <p>Tenga en cuenta que los colores de los productos mostrados en nuestra web pueden variar ligeramente de los colores reales. Esto puede deberse a la calibración de los monitores o pantallas, las fuentes de iluminación, la fotografía digital, entre otros factores. Los colores son percibidos de manera diferente por cada persona.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink mb-4">5. Suscripción a Newsletters y Comunicaciones</h2>

            <h3 className="font-serif text-base text-ink mt-4 mb-3">5.1 Registro de Usuario</h3>
            <p>Para acceder a determinadas funcionalidades, contenidos o servicios ofrecidos por INCA TOPS, el usuario podrá registrarse creando una cuenta mediante un formulario disponible en la página web.</p>
            <p className="mt-4">El usuario se compromete a proporcionar información veraz, actualizada y completa y será responsable por todas las actividades que se realicen desde su cuenta. INCA TOPS se reserva el derecho de suspender o cancelar cuentas que incumplan estos Términos y Condiciones específicos, o cuando existan indicios de uso indebido o fraudulento.</p>

            <h3 className="font-serif text-base text-ink mt-6 mb-3">5.2 Newsletter y Comunicaciones Comerciales</h3>
            <p>El usuario podrá optar voluntariamente por suscribirse a la newsletter de INCA TOPS, a través de los formularios disponibles en la página web o durante el proceso de registro.</p>
            <p className="mt-4">Al registrarse en nuestra página web o suscribirse a nuestro newsletter, los usuarios podrán aceptar recibir comunicaciones sobre promociones, lanzamientos y noticias. INCA TOPS se compromete a proteger sus datos personales conforme a nuestra Política de Privacidad. El usuario podrá cancelar su suscripción en cualquier momento.</p>

            <h3 className="font-serif text-base text-ink mt-6 mb-3">5.3 Eliminación de Cuenta o Baja de Suscripción</h3>
            <p>El usuario podrá solicitar la eliminación de su cuenta o la baja de la newsletter en cualquier momento, sin necesidad de justificar su decisión. El usuario asume la responsabilidad por la eliminación de su cuenta luego de confirmar un pedido y antes de que éste sea entregado.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink mb-4">6. Propiedad Intelectual</h2>
            <p>Todos los contenidos, marcas, diseños, gráficos, logotipos, textos, imágenes, software y cualquier otro material presente en este sitio web son propiedad exclusiva de INCA TOPS o de sus licenciantes y están protegidos por las leyes de propiedad intelectual aplicables.</p>
            <p className="mt-4">Queda estrictamente prohibido reproducir, distribuir, modificar, exhibir públicamente, realizar trabajos derivados o utilizar de cualquier otra forma el contenido de este sitio web sin el consentimiento previo y por escrito de INCA TOPS.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink mb-4">7. Leyes Aplicables y Jurisdicción</h2>
            <p>Este sitio web opera bajo las leyes de la República del Perú. Cualquier controversia derivada del uso de este sitio o de sus condiciones será resuelta ante los tribunales competentes del país.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink mb-4">8. Aceptación de los Términos y Condiciones</h2>
            <p>Al realizar una compra en nuestra web, el cliente acepta estos Términos y Condiciones. INCA TOPS a través de su sección "Stock Service" se reserva el derecho de modificar o cancelar promociones, así como de actualizar, en cualquier momento, lo siguiente:</p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li><strong>Plazo de vigencia de promociones:</strong> Las promociones están sujetas a stock y pueden cambiar sin previo aviso.</li>
              <li><strong>No garantizamos disponibilidad total:</strong> Todos los productos están sujetos a disponibilidad en el momento de la confirmación del pedido.</li>
              <li><strong>Precios pueden variar:</strong> Los precios pueden ser modificados sin previo aviso, excepto en aquellos pedidos que ya han sido confirmados.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink mb-4">9. Modificaciones</h2>
            <p>INCA TOPS podrá modificar estas condiciones específicas en cualquier momento, informando a los usuarios antes del procesamiento de una nueva compra.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-ink mb-4">10. Contacto y Soporte al Usuario</h2>
            <p>Para consultas o solicitudes de soporte relacionados con compras, el usuario puede comunicarse con INCA TOPS S.A. a través de los canales de atención disponibles en la sección de Contacto de este sitio web.</p>
          </section>

        </div>
      </div>
    </div>
  )
}
