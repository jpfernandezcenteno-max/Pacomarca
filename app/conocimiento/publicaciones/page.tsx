'use client'

import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: 'easeOut' }} className={className}>
      {children}
    </motion.div>
  )
}

type Pub = { title: string; authors: string; source: string; year: string; ref?: string; doi?: string }

// Publicación destacada
const featuredPublication = {
  title: 'Genetic parameters for different types of medullated fibre in Alpacas',
  authors: 'Cruz, A.; Murillo, Y.; Burgos, A.; Yucra, A.; Morante, R.; Quispe, M.; Quispe, C.; Quispe, E.; Gutiérrez, J.P.',
  journal: 'Journal of Animal Breeding and Genetics',
  year: '2024',
  image: '/conocimiento/publicaciones/portada.jpg',
}

// Revistas indexadas
const publicacionesIndexadas: Pub[] = [
  { title: 'Alpaca (Vicugna pacos) skin analyzed under architecture and structure', authors: 'Sasahara, T.H.C.; Durand Neira, L.M.; Gomes, S.P.; McManus, C.M.; Chiarello, G.; Miglino, M.A.', source: 'International Journal of Morphology', year: '2024', ref: '42(2), 256–260' },
  { title: 'Genetic parameters for different types of medullated fibre in Alpacas', authors: 'Cruz, A.; Murillo, Y.; Burgos, A.; Yucra, A.; Morante, R.; Quispe, M.; Quispe, C.; Quispe, E.; Gutiérrez, J.P.', source: 'Journal of Animal Breeding and Genetics', year: '2024', ref: 'Online ahead of print' },
  { title: 'Genome-Wide Association Study of Fiber Diameter in Alpacas', authors: 'More, M.; Veli, E.; Cruz, A.; Gutiérrez, J.P.; Gutiérrez, G.; Ponce de León Bravo, F.A.', source: 'Animals', year: '2023', ref: '13, 3316' },
  { title: 'Comparison of projection microscope with OFDA100 in alpaca fibers medullation', authors: 'Quispe, E.; Torres, R.; Pinares, R.; Cruz, A.; Quispe, M.D.', source: 'Archivos de Zootecnia', year: '2023', ref: '72, 226-234' },
  { title: 'Genetic parameters for fleece uniformity in Alpacas', authors: 'Gutiérrez, J.P.; Cruz, A.; Morante, R.; Burgos, A.; Formoso-Rafferty, N.; Cervantes, I.', source: 'Journal of Animal Science', year: '2023', ref: '101' },
  { title: 'Genomic selection improves genetic gain for fiber traits in a breeding program for alpacas', authors: 'Cruz, A.; Sedano, J.; Burgos, A.; Gutiérrez, J.P.; Wurzinger, M.; Gutiérrez-Reynoso, G.', source: 'Livestock Science', year: '2023', ref: '270', doi: 'https://doi.org/10.1016/j.livsci.2023.105195' },
  { title: 'Relationship between the incidence and degree of medullation with the diameter of alpaca fibers evaluated using a novel device based on artificial intelligence', authors: 'Quispe, E.; Quispe, M.D.; Quispe, C.; Poma, A.; Paucar-Chanca, R.; Cruz, A.; McGregor, B.', source: 'The Journal of the Textile Institute', year: '2022', ref: '1-16' },
  { title: 'Application of artificial intelligence and digital images analysis to automatically determine the percentage of fiber medullation in alpaca fleece samples', authors: 'Quispe, M.D.; Serrano-Arriezu, L.; Trigo, J.D.; Quispe, C.; Poma, A.; Quispe, E.', source: 'Small Ruminant Research', year: '2022', ref: '213, 106724' },
  { title: 'ssGBLUP method improve the accuracy of breeding value prediction in Huacaya alpaca', authors: 'Mancisidor, B.; Cruz, A.; Gutiérrez, G.; Burgos, A.; Moron, J.; Wurzinger, M.; Gutiérrez, J.P.', source: 'Animals', year: '2021', ref: '11(11), 3052', doi: 'https://doi.org/10.3390/ani11113052' },
  { title: 'Software de gestión para pedigrí y producción de camélidos de nuevo mundo: Pacokipu y Llamakipu', authors: 'Cruz, A.; Gutiérrez, G.A.; Burgos, A.; Morante, R.; Wurzinger, M.; Gutiérrez, J.P.', source: 'Revista de Investigación Veterinaria del Perú', year: '2021', ref: '32(4), e19355' },
  { title: 'Colorimetry analysis of coat color and its relationship with fiber traits in alpacas', authors: 'Cruz, A.; Yucra, A.; Gutiérrez, G.A.; Burgos, A.; Morante, R.; Gutiérrez, J.P.; Wurzinger, M.', source: 'Animal', year: '2021', ref: '15(5), 100219' },
  { title: 'Polimorfismos de nucleótido simple (PNSs) del gen MC1R en alpacas negras y marrones', authors: 'Pinares, R.; Cruz, A.; Daverio, M.S.; Gutiérrez, J.P.; Ponce de León, F.A.; Wurzinger, M.; Di Rocco, F.; Gutiérrez, G.A.', source: 'Revista Peruana de Biología', year: '2021', ref: '28(1), e19742', doi: 'https://doi.org/10.15381/rpb.v28i1.19742' },
  { title: 'Development of a 76k Alpaca (Vicugna pacos) Single Nucleotide Polymorphisms (SNPs) Microarray', authors: 'Calderón, M.; More, M.J.; Gutiérrez, G.A.; Ponce de León, F.A.', source: 'MDPI', year: '2021', ref: '' },
  { title: 'Calving date and its variability as a potential trait in the breeding objective to account for reproductive seasonality in alpacas', authors: 'Cruz, A.; Gutiérrez, J.P.; Torres, R.; Formoso-Rafferty, N.; Morante, R.; Burgos, A.; Cervantes, I.', source: 'Reproduction in Domestic Animals', year: '2020', ref: '00, 1–8' },
  { title: 'Genetic (co)variance across age of fiber diameter and standard deviation in Huacaya alpacas, estimated by repeatability, multi-trait and random regression models', authors: 'Cruz, A.; Menéndez-Buxadera, A.; Gutiérrez, G.; Morante, R.; Burgos, A.; Gutiérrez, J.P.', source: 'Livestock Science', year: '2020', ref: '231, 103863' },
  { title: 'Phenotypic variability of percentage of medullated fibers in Huacaya alpaca fleece', authors: 'Pinares, R.; Gutiérrez, G.A.; Cruz, A.; Burgos, A.; Gutiérrez, J.P.', source: 'Revista de Investigación Veterinaria del Perú', year: '2019', ref: '30, 699-708' },
  { title: 'Genetic parameters for medullated fiber and its relationship with other productive traits in alpacas', authors: 'Cruz, A.; Morante, R.; Gutiérrez, J.P.; Torres, R.; Burgos, A.; Cervantes, I.', source: 'Animal', year: '2019', ref: '13, 1358-1364' },
  { title: 'Heritability of individual fiber medullation in Peruvian alpacas', authors: 'Pinares, R.; Gutiérrez, G.; Cruz, A.; Morante, R.; Cervantes, I.; Burgos, A.; Gutiérrez, J.P.', source: 'Small Ruminant Research', year: '2018', ref: '165, 93-100' },
  { title: 'Genetic parameters estimation for preweaning traits and their relationship with reproductive, productive and morphological traits in alpaca', authors: 'Cruz, A.; Cervantes, I.; Burgos, A.; Morante, R.; Gutiérrez, J.P.', source: 'Animal', year: '2017', ref: '11, 746-754' },
  { title: 'Effect of the gestation and lactation on fiber diameter and its variability in Peruvian alpacas', authors: 'Cruz, A.; Morante, R.; Cervantes, I.; Burgos, A.; Gutiérrez, J.P.', source: 'Livestock Science', year: '2017', ref: '198, 31-36' },
  { title: 'Estimation of genetic parameters for reproductive traits in alpacas', authors: 'Cruz, A.; Cervantes, I.; Burgos, A.; Morante, R.; Gutiérrez, J.P.', source: 'Animal Reproduction Science', year: '2015', ref: '163, 48-55' },
  { title: 'Weighting fibre and morphological traits in a genetic index for an alpaca breeding program', authors: 'Gutiérrez, J.P.; Cervantes, I.; Pérez-Cabal, M.A.; Burgos, A.; Morante, R.', source: 'Animal', year: '2014', ref: '8, 360-369' },
  { title: 'Association of microsatellite markers with fiber diameter trait in Peruvian alpacas (Vicugna pacos)', authors: 'Paredes, M.M.; Membrillo, A.; Gutiérrez, J.P.; Cervantes, I.; Azor, P.J.; Morante, R.; Alonso-Moraga, A.; Molina, A.; Muñoz-Serrano, A.', source: 'Livestock Science', year: '2014', ref: '161, 6-16' },
  { title: 'Genetic parameters for growth of fiber diameter in alpacas', authors: 'Gutiérrez, J.P.; Varona, L.; Pun, A.; Morante, R.; Burgos, A.; Cervantes, I.; Pérez-Cabal, M.A.', source: 'Journal of Animal Science', year: '2011', ref: '89, 2310-2315' },
  { title: 'Genetic parameters and relationship between fibre and type traits in two breeds of Peruvian alpacas', authors: 'Cervantes, I.; Pérez-Cabal, M.A.; Morante, R.; Burgos, A.; Salgado, C.; Nieto, B.; Goyache, F.; Gutiérrez, J.P.', source: 'Small Ruminant Research', year: '2010', ref: '88, 6-11' },
  { title: 'Analysis of the existence of major genes affecting alpaca fiber traits', authors: 'Pérez-Cabal, M.A.; Cervantes, I.; Morante, R.; Burgos, A.; Goyache, F.; Gutiérrez, J.P.', source: 'Journal of Animal Science', year: '2010', ref: '88, 3783-3788' },
  { title: 'Genetic analysis of six production traits in Peruvian alpacas', authors: 'Gutiérrez, J.P.; Goyache, F.; Burgos, A.; Cervantes, I.', source: 'Livestock Science', year: '2009', ref: '123, 193-197' },
  { title: 'Genetic Improvement for alpaca fibre production in the Peruvian altiplano: The Pacomarca experience', authors: 'Morante, R.; Goyache, F.; Burgos, A.; Cervantes, I.; Pérez-Cabal, M.A.; Gutiérrez, J.P.', source: 'Animal Genetic Resources Information', year: '2009', ref: '45, 37-43' },
  { title: 'Heredabilidad estimada de fibras meduladas en alpaca huacaya', authors: 'Pinares, R.; Cruz, A.; Morante, R.; Cervantes, I.; Burgos, A.; Gutiérrez, G.; Gutiérrez, J.P.', source: 'Universitätsverlag Göttingen', year: '2019', ref: 'Advances in Fibre Production Science in South American Camelids and other Fibre Animals, pp. 77-82' },
  { title: 'Quantitative genetic analysis of micron blowout in alpacas', authors: 'Munyard, K.; Greeff, J.', source: 'Australian Government, Rural Industries Research and Development Corporation', year: '2013', ref: 'RIRDC PRJ-006076, 12/136' },
]

// Otras publicaciones
const otrasPub: Pub[] = [
  { title: 'PACOMARCA, Alpacas: genética en blanco y negro', authors: 'Burgos, A.; Gutiérrez, J.P.; Cruz, A.; Gutiérrez, G.', source: 'Lima, Perú', year: '2023', ref: 'ISBN 978-612-49369-0-6' },
  { title: 'Genetic parameters of medullation types in alpaca fiber', authors: 'Cruz, A.; Murillo, Y.; Burgos, A.; Yucra, A.; Quispe, M.D.; Quispe, E.; Gutiérrez, J.P.', source: '74th Annual Meeting EAAP + WAAP + Interbull Congress', year: '2023', ref: 'Lyon, Francia. Abstract 41503' },
  { title: 'La genómica al rescate de la fibra de alpaca', authors: 'Gutiérrez R., G.; Cruz, A.; Wurzinger, M.; Gutiérrez, J.P.', source: 'Hominem Et Agrum', year: '2023', ref: '1(1), 25-26 — Universidad Nacional Agraria La Molina' },
  { title: 'Stress in alpacas: physiological and behavioral responses during the shearing procedure', authors: 'Nöllenburg, N.; Cruz, A.; Burgos, A.; Gutiérrez, G.; Wurzinger, M.; Winckler, C.', source: '8th European Symposium on South American Camelids & 4th European Meeting on Fibre Animals', year: '2022', ref: 'Bolzano, Italia' },
  { title: 'Improving a black alpaca breeding program using a colorimeter values for male selection', authors: 'Cruz, A.; Gutiérrez, G.; Yucra, A.; Burgos, A.; Wurzinger, M.; Gutiérrez, J.P.', source: '8th European Symposium on South American Camelids & 4th European Meeting on Fibre Animals', year: '2022', ref: 'Bolzano, Italia' },
  { title: 'Relationship between coat colour and temperature measurements along the alpaca fibre', authors: 'Yucra, A.; Burgos, A.; Gutiérrez, G.; Wurzinger, M.; Gutiérrez, J.P.; Cervantes, I.; Cruz, A.', source: '8th European Symposium on South American Camelids & 4th European Meeting on Fibre Animals', year: '2022', ref: 'Bolzano, Italia' },
  { title: 'Polymorphisms in MC1R and ASIP genes associated with color phenotypes in alpaca Huacaya', authors: 'Pinares, R.; Cruz, A.; Daverio, M.S.; Di Rocco, F.; Gutiérrez, G.', source: '8th European Symposium on South American Camelids & 4th European Meeting on Fibre Animals', year: '2022', ref: 'Bolzano, Italia' },
  { title: 'Genetic improvement of alpacas and llamas in Peru', authors: 'Gutiérrez, G.; Cruz, A.; Gutiérrez, J.P.; Wurzinger, M.', source: '72nd Annual Meeting of the European Federation of Animal Science', year: '2021', ref: 'Davos, Suiza. 292' },
  { title: 'Attitudes of Peruvian llama farmers towards genetic improvement', authors: 'Wurzinger, M.; Silva, C.; Candio, J.; Cruz, A.; Quina, E.; Gutiérrez, G.A.', source: '72nd Annual Meeting of the European Federation of Animal Science', year: '2021', ref: 'Davos, Suiza. 293' },
  { title: 'Efficiency of genomic selection for fiber traits in alpacas', authors: 'Mancisidor, B.; Cruz, A.; Gutiérrez, G.A.; Burgos, A.; Moron, J.; Wurzinger, M.; Gutiérrez, J.P.', source: '72nd Annual Meeting of the European Federation of Animal Science', year: '2021', ref: 'Davos, Suiza. 446' },
  { title: 'Comparison of breeding values accuracy using BLUP and ss-GBLUP methodology in Peruvian alpacas', authors: 'Mancisidor, B.; Cruz, A.; Gutiérrez, G.A.; Burgos, A.; Moron, J.; Wurzinger, M.; Gutiérrez, J.P.', source: 'International symposium on sustainable animal production and health', year: '2021', ref: 'Virtual. 428-431' },
  { title: 'Assessment of two shearing practices on animal welfare in alpaca using infrared thermography', authors: 'Cruz, A.; Quispe-Potosino, S.; Cervantes, I.; Burgos, A.; Gutiérrez, J.P.', source: '71st Annual Meeting of European Federation for Animal Science', year: '2020', ref: 'Virtual. Abstract 33770, 588' },
  { title: 'Calving date as a potential breeding objective to manage the reproductive seasonality in alpacas', authors: 'Cruz, A.; Cervantes, I.; Torres, R.; Formoso-Rafferty, N.; Morante, R.; Burgos, A.; Gutiérrez, J.P.', source: '70th Annual Meeting of the European Federation of Animal Science', year: '2019', ref: 'Ghent, Bélgica' },
  { title: 'Analysis of the body weight and prediction of the growth curve using non-linears models in Peruvian alpacas', authors: 'Cruz, A.; Burgos, A.; Torres, R.; Gutiérrez, J.P.', source: 'VIII Congreso Mundial de Camélidos', year: '2018', ref: 'Oruro, Bolivia. 56-57' },
  { title: 'La médula como criterio de selección', authors: 'Gutiérrez, J.P.', source: 'VIII Congreso Mundial de Camélidos', year: '2018', ref: 'Oruro, Bolivia. 28' },
  { title: 'Challenges and opportunities of genetic improvement in alpacas and llamas in Peru', authors: 'Gutiérrez, G.; Gutiérrez, J.P.; Huanca, T.; Wurzinger, M.', source: '11th World Congress of Genetics Applied to Livestock Production', year: '2018', ref: 'Auckland, Nueva Zelanda' },
  { title: 'Desarrollo de un programa de mejora de alpacas en Perú', authors: 'Gutiérrez, J.P.', source: '46° Congreso Argentino de Genética y IV Foro Regional del NOA', year: '2017', ref: 'SFV Catamarca, Argentina' },
  { title: 'Genetic parameters of medullation percentage in alpacas', authors: 'Cruz, A.; Morante, R.; Cervantes, I.; Burgos, A.; Gutiérrez, J.P.', source: '68th European Association for Animal Production (EAAP)', year: '2017', ref: 'Tallin, Estonia. 369' },
  { title: 'Dehairing of alpaca fibres top with AM2 dehairing technology', authors: 'Frank, E.N.; Frondizi Seghetti, D.G.; Hick, M.V.H.; Castillo, M.F.; Burgos, A.; Cruz, A.', source: '7th European Symposium on South American Camelids and 3rd European Meeting on Fibre Animals', year: '2017', ref: 'Assisi, Italia. 71' },
  { title: 'Heritability estimate of medullated fibre in Alpaca Huacaya', authors: 'Pinares, R.; Cruz, A.; Morante, R.; Cervantes, I.; Burgos, A.; Gutiérrez, G.; Gutiérrez, J.P.', source: '7th European Symposium on South American Camelids and 3rd European Meeting on Fibre Animals', year: '2017', ref: 'Assisi, Italia. 27' },
  { title: 'Parámetros genéticos de caracteres funcionales y secundarios en alpacas', authors: 'Cruz, A.', source: 'Tesis doctoral — Universidad Complutense de Madrid', year: '2017', ref: 'España' },
  { title: 'Heritabilities for preweaning and its genetic correlations with other traits in Peruvian alpacas', authors: 'Cruz, A.; Cervantes, I.; Burgos, A.; Morante, R.; Gutiérrez, J.P.', source: '67th European Association for Animal Production (EAAP)', year: '2016', ref: 'Belfast, Reino Unido. 520' },
  { title: 'Construcción de índices de selección para programas de mejora genética en alpacas', authors: 'Gutiérrez, J.P.', source: 'VII World Congress on South American Camelids', year: '2015', ref: 'Puno, Perú. 248-253' },
  { title: 'Importancia de la estima de parámetros genéticos de caracteres productivos y funcionales en alpacas', authors: 'Cruz, A.; Burgos, A.; Morante, R.; Cervantes, I.; Gutiérrez, J.P.', source: 'VII World Congress on South American Camelids', year: '2015', ref: 'Puno, Perú. 276-280' },
  { title: 'La "Inca Esquila": Esquila tecnificada para la industria textil', authors: 'Burgos, A.; Apaza, N.; Torres, R.; Cruz, A.', source: 'VII World Congress on South American Camelids', year: '2015', ref: 'Puno, Perú. 718-719' },
  { title: 'Estimation of genetic parameters for reproductive traits in alpacas', authors: 'Cruz, A.; Cervantes, I.; Burgos, A.; Morante, R.; Gutiérrez, J.P.', source: '66th European Association for Animal Production (EAAP)', year: '2015', ref: 'Varsovia, Polonia' },
  { title: 'Resultados de la selección, en busca de la alpaca textil en Pacomarca', authors: 'Cruz, A.', source: 'Foro Internacional sobre avances en la producción, mejoramiento y transformación de fibras de llamas, alpacas y vicuñas', year: '2015', ref: 'Abancay, Perú. 67-71' },
  { title: 'Fibre genetics on Alpaca', authors: 'Gutiérrez, J.P.', source: '6th Symposium on South American Camelids and 2nd European Meeting on Fiber Animals', year: '2013', ref: 'Nantes, Francia (64th EAAP Annual Meeting)' },
  { title: 'Economically weighting fibre and morphological traits in an alpaca breeding program', authors: 'Gutiérrez, J.P.; Cervantes, I.; Pérez-Cabal, M.A.; Pun, A.; Burgos, A.; Morante, R.', source: '63rd European Association for Animal Production (EAAP)', year: '2012', ref: 'Bratislava, Eslovaquia' },
  { title: 'Genetic parameters for fiber diameter at different shearings', authors: 'Pun, A.; Morante, R.; Burgos, A.; Cervantes, I.; Pérez-Cabal, M.A.; Gutiérrez, J.P.', source: '62nd European Association for Animal Production (EAAP)', year: '2011', ref: 'Stavanger, Noruega' },
  { title: 'Animal Breeding in Alpaca Suri', authors: 'Gutiérrez, J.P.', source: '2011 Suri Network Summer Symposium', year: '2011', ref: 'Chicago, EE.UU.' },
  { title: 'Producing alpaca fibre for the textile industry', authors: 'Morante, R.; Burgos, A.; Gutiérrez, J.P.', source: '5th European Symposium on South American Camelids and First European Meeting on Fibre Animals', year: '2010', ref: 'Sevilla, España' },
  { title: 'Genetic parameters for growth of fibre diameter in alpacas', authors: 'Varona, L.; Cervantes, I.; Pérez-Cabal, M.A.; Morante, R.; Burgos, A.; Gutiérrez, J.P.', source: '5th European Symposium on South American Camelids and First European Meeting on Fibre Animals', year: '2010', ref: 'Sevilla, España' },
  { title: 'Mejoramiento Genético de fibra de alpaca para la industria textil', authors: 'Morante, R.; Burgos, A.; Gutiérrez, J.P.', source: 'III Simposium Internacional de Investigaciones sobre Camélidos Sudamericanos', year: '2010', ref: 'Arequipa, Perú' },
  { title: 'Resultados de experiencias de investigación sobre fibra de alpaca', authors: 'Gutiérrez, J.P.; Cervantes, I.; Pérez-Cabal, M.A.; Morante, R.; Burgos, A.; Salgado, C.; Nieto, B.; Varona, L.; Goyache, F.', source: 'III Simposium Internacional de Investigaciones sobre Camélidos Sudamericanos', year: '2010', ref: 'Arequipa, Perú' },
  { title: 'Genes mayores afectando al diámetro de fibra en alpacas', authors: 'Pérez-Cabal, M.A.; Cervantes, I.; Morante, R.; Burgos, A.; Goyache, F.; Gutiérrez, J.P.', source: 'XV Reunión Nacional de Mejora Genética Animal', year: '2010', ref: 'Vigo, Pontevedra, España' },
  { title: 'Parámetros genéticos y tendencias genéticas asociados a caracteres productivos y de apariencia del vellón en alpacas', authors: 'Cervantes, I.; Goyache, F.; Pérez-Cabal, M.A.; Nieto, B.; Salgado, C.; Burgos, A.; Gutiérrez, J.P.', source: 'Zaragoza, España', year: '2009', ref: '' },
  { title: 'Influence of effect of pregnancy and lactation on alpaca fiber diameter in estimated breeding values', authors: 'Cruz, A.; Torres, R.; Burgos, A.; Gutiérrez, J.P.', source: 'VI Congreso Peruano de Reproducción Animal (ASPRA) — Spermova', year: '2016', ref: 'Arequipa, Perú. 6(1), 62, p. 108' },
  { title: 'Resultados de experiencias de investigación sobre fibra de alpaca', authors: 'Gutiérrez, J.P.', source: 'Arequipa, Perú', year: '2010', ref: '' },
]

// PDFs de descarga (mismo orden que los arrays de arriba), alojados en pacomarca.com
const PDF_BASE = 'https://pacomarca.com'
const indexadasFiles = [
  '/media/Alpaca_skin_analyzed_under_architecture_and_structure.pdf',
  '/media/Genetic_parameters_for_different_types_of_medullated_fibre_in_alpacas.pdf',
  '/media/Genome-Wide_Association_Study_of_Fiber_Diameter_in_Alpacas.pdf',
  '/media/Comparison_of_projection_microscope_with_OFDA100_in_alpaca_fibers_medullation_xrdinmx.pdf',
  '/media/Genetic_parameters_for_fleece_uniformity_in_alpacas.pdf',
  '/media/Genomic_selection_improves_genetic_gain_for_fiber_traits_in_a_breeding_program_for_alpacas.pdf',
  '/media/Relationships_between_the_incidence_and_degree_of_medullation_with_the_diamter_of_alpaca_fibers_evaluated_using_a_novel_device_based_on_artificial_intelligence.pdf',
  '/media/Application_of_artificial_intelligence_and_digital_analysis_to_automatically_determine_the_percentage_of_fiber_medullation_in_alpaca_fleece_samples.pdf',
  '/media/ssGBLUP_method_improves_the_accuracy_of_breeding_value_prediction_in_Huacaya_alpaca.pdf',
  '/media/Software_de_gestion_para_pedigri_y_produccion_de_camelidos_del_nuevo_mundo_Pacokipu_y_Llamakipu.pdf',
  '/media/Colorimetry_analysis_of_coat_color_and_its_relationship_with_fiber_traits_in_alpacas.pdf',
  '/media/Polimorfismos_de_nucleotido_simple_PNSs_del_gen_MC1R_en_alpacas_negras_y_marrones.pdf',
  '/media/development-of-a-76k-alpaca-single-nucleotide-polymorphisms-microarray.pdf',
  '/media/Calving_date_and_its_variability_as_a_potential_trait_in_the_breeding_objective_to_account_for_reproductive_seasonality_in_alpacas.pdf',
  '/media/Genetic_parameters_for_medullated_fiber_and_its_relationship_with_other_productive_traits_in_alpacas_c0t6Pic_m7mLGk2.pdf',
  '/media/Phenotypic_variability_of_percentage_of_medullated_fibers_in_Huacaya_alpaca_fleece.pdf',
  '/media/Genetic_parameters_for_medullated_fiber_and_its_relationship_with_other_productive_traits_in_alpacas_c0t6Pic.pdf',
  '/media/Heritability_of_individual_fiber_medullation_in_Peruvian_alpacas_76iNKqt.pdf',
  '/media/Genetic_parameters_estimation_for_preweaning_traits_and_their_relationship_with_reproductive_productive_and_morphological_traits_in_alpaca_yE2NxnU.pdf',
  '/media/Effect_of_the_gestation_and_lactation_on_fiber_diameter_and_its_variability_in_Peruvian_alpacas_QUGtDsH.pdf',
  '/media/Estimation_of_genetic_parameters_for_reproductive_traits_in_alpacas_mLEpgaO.pdf',
  '/media/weighting_fibre_and_morphological_traits_in_a_genetic_index_for_an_alpaca_breeding_programme_IIH2yir.pdf',
  '/media/Association_of_microsatellite_markers_with_fiber_diameter_trait_in_Peruvian_alpacas_Vicugna_pacos_BSYsku0.pdf',
  '/media/Genetic_parameters_for_growth_of_fiber_diameter_in_alpacas_ZDbs0Zk.pdf',
  '/media/Genetic_parameters_and_relationships_between_fibre_and_type_traits_in_two_breeds_of_peruvian_alpacas_GrOuFBy.pdf',
  '/media/Analysis_of_the_existence_of_major_genes_affecting_alpaca_fiber_traits_SEa19GP.pdf',
  '/media/Genetic_analyss_of_six_production_traits_in_Peruvian_alpacas_YgPZWIo.pdf',
  '/media/Genetic_improvement_for_alpaca_fibre_production_in_the_peruvian_altiplano_-_The_Pacomarca_experience_JNbQqCX.pdf',
  '/media/Heredabilidad_estimada_de_fibras_meduladas_en_alpaca_huacaya.pdf',
  '/media/Quantitative_genetic_Analysis_of_micron_Blowout_in_alpacas.pdf',
]
const otrasFiles = [
  '/media/Alpacas_-_genetica_en_blanco_y_negro_Cubierta.pdf',
  '/media/EAAP_2023_Gj5LzYT.pdf',
  '/media/La_genomica_al_rescate_de_la_fibra_de_alpaca.pdf',
  '/media/Stress_in_alpacas_physiological_and_behavioral_responses_during_the_shearing_procedure.pdf',
  '/media/Improving_a_black_alpaca_breeding_program_using_colourimeter_values_for_male_selection.pdf',
  '/media/Relationship_between_coat_colour_and_temperature_measurements_along_the_alpaca_fibre.pdf',
  '/media/Polymorphisms_in_MC1R_and_ASIP_genes_associated_with_color_phenotypes_in_alpaca_huacaya.pdf',
  '/media/Genetic_improvement_of_alpacas_and_llamas_in_Peru.pdf',
  '/media/Attitudes_of_Peruvian_llama_farmers_towards_genetic_improvement.pdf',
  '/media/Efficiency_of_genomic_selection_for_fiber_traits_in_alpacas.pdf',
  '/media/Comparison_of_breeding_values_accuracy_using_BLUP_and_ss-GBLUP_methodology_in_Peruvian_alpacas_1.pdf',
  '/media/Assessment_of_two_shearing_practices_on_animal_welfare_in_alpaca_using_infrared_thermography_1.pdf',
  '/media/Calving_date_as_a_potential_breeding_objective_to_manage_the_reproductive_seasonality_in_alpacas_1.pdf',
  '/media/Analysis_of_the_body_weight_and_prediction_of_the_growth_curve_using_non-linears_models_in_Peruvian_alpacas.pdf',
  '/media/La_medula_como_criterio_de_selecci%C3%B3n.pdf',
  '/media/Challenges_and_opportunities_of_genetic_improvement_in_alpacas_and_llamas_in_Peru.pdf',
  '/media/Desarrollo_de_un_programa_de_mejora_de_alpacas_en_Per%C3%BA.pdf',
  '/media/Genetic_parameters_of_medullation_percentage_in_alpacas_-_Tallin_-_Estonia_2017.pdf',
  '/media/Dehairing_of_alpaca_fibre_top_with_AM2_dehairing_technology_-_Assisi_2017.pdf',
  '/media/Heritability_estimate_of_medullated_fibre_in_alpaca_huacaya_-_Assisi_Italia_2017.pdf',
  '/media/Tesis_doctoral_2017_-_Parametros_geneticos_de_caracteres_funcionales_y_secundarios_en_alpacas.pdf',
  '/media/Heritabilities_for_preweaning_and_its_genetic_correlations_with_other_traits_in_Peruvian_alpacas_-_United_kingdon_EAAP_2016.pdf',
  '/media/Construcci%C3%B3n_de_%C3%ADndices_de_selecci%C3%B3n_para_programas_de_mejora_gen%C3%A9tica_en_alpacas_-_Puno_2015.pdf',
  '/media/Importancia_de_la_estima_de_par%C3%A1metros_gen%C3%A9ticos_de_caracteres_productivos_y_funcionales_en_alpacas_-_Puno_2015.pdf',
  '/media/La_Inca_esquila_-_Esquila_tecnificada_para_la_industria_textil_-_Puno_2015.pdf',
  '/media/Estimation_of_genetic_parameters_for_reproductive_traits_in_alpaca_-_Polonia_2015.pdf',
  '/media/Resultados_de_la_selecci%C3%B3n_en_busca_de_la_alpaca_textil_en_Pacomarca_-_Abancay_2015.pdf',
  '/media/Fibre_genetics_on_alpaca_-_Francia_EAAP_2013.pdf',
  '/media/Economically_weighting_fibre_and_morphological_traits_in_an_alpaca_breeding_program_-_Slovakia_2012.pdf',
  '/media/Genetic_parameters_for_fiber_diameter_at_different_shearings_-_Noruega_2011.pdf',
  '/media/Animal_breeding_in_Alpaca_Suri_-_Chicago_2011.pdf',
  '/media/Producing_alpaca_fibre_for_the_textile_industry_-_Sevilla_2010.pdf',
  '/media/Genetic_parameters_for_growth_of_fibre_diameter_in_alpacas_-_Sevilla_2010.pdf',
  '/media/Mejoramiento_gen%C3%A9tico_de_fibra_de_alpaca_para_la_industria_textil_-_Arequipa_2010.pdf',
  '/media/Resultados_de_experiencias_de_investigacion_sobre_fibra_de_alpaca_-_Huancavelica_2010.pdf',
  '/media/Genes_mayores_afectando_al_di%C3%A1metro_de_fibra_en_alpacas_-_Vigo_2010.pdf',
  '/media/Par%C3%A1metros_gen%C3%A9ticos_y_tendencias_gen%C3%A9ticas_asociados_a_caracteres_productivos_y_de_apariencia_del_vell%C3%B3n_en_alpacas_-_Zaragoza_2009.pdf',
  '/media/Influence_of_effect_of_pregnancy_and_lactation_on_alpaca_fiber_diameter_in_estimated_breeding_values_-_Spermova_2016.pdf',
  '/media/Resultados_de_experiencias_de_investigacion_sobre_fibra_de_alpaca_-_Arequipa_2010.pdf',
]

// Revistas indexadas donde Pacomarca ha publicado
const journals = [
  { name: 'Small Ruminant Research' },
  { name: 'Livestock Science' },
  { name: 'Animal' },
  { name: 'Journal of Animal Science' },
  { name: 'Journal of Animal Breeding and Genetics' },
  { name: 'Animals' },
  { name: 'Animal Reproduction Science' },
  { name: 'Reproduction in Domestic Animals' },
]

function PublicationAccordion({ title, publications, files }: { title: string; publications: Pub[]; files: string[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-sand/50">
      <button
        className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-cream/50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-serif text-xl text-ink">{title}</span>
        <span className="text-xs tracking-[0.15em] uppercase text-gold">{open ? '— Cerrar' : '+ Ver'}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 space-y-3">
              {publications.map((pub, i) => (
                <div key={i} className="bg-white flex flex-col sm:flex-row sm:items-start justify-between gap-4 px-6 py-5 border-l-4 border-gold/40 hover:border-gold transition-colors">
                  <div className="flex-1">
                    <p className="font-serif text-base text-ink mb-1">{pub.title}</p>
                    <p className="text-xs text-ink/45">{pub.authors}</p>
                    <p className="text-xs text-ink/55 mt-1"><span className="italic">{pub.source}</span>, {pub.year}{pub.ref ? ` — ${pub.ref}` : ''}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {files[i] && (
                      <a
                        href={`${PDF_BASE}${files[i]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-gold border border-gold/50 px-5 py-3 hover:bg-ink hover:text-white hover:border-ink transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Descargar
                      </a>
                    )}
                    {pub.doi && (
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs tracking-[0.15em] uppercase text-ink/50 hover:text-gold transition-colors px-2"
                      >
                        DOI ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function PublicacionesPage() {
  return (
    <>
      <PageHeader
        section="CONOCIMIENTO"
        title="Publicaciones"
        subtitle="El conocimiento Pacomarca, validado y disponible para la comunidad científica global"
        imageUrl="/conocimiento/publicaciones/portada.jpg"
        imagePosition="object-[center_35%]"
      />

      {/* Intro */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Producción científica</p>
            <h2 className="font-serif text-4xl text-ink mb-8 leading-snug">
              Producción científica de referencia internacional
            </h2>
            <div className="space-y-5 text-base text-ink/65 leading-relaxed">
              <p>
                Gracias a la base de datos que maneja Pacomarca, la más grande y completa en el mundo, y a la colaboración con la <strong className="text-ink font-medium">Universidad Complutense de Madrid</strong>, se ha logrado producir una serie de papers científicos que han sido publicados en algunas de las revistas indexadas más importantes a nivel internacional.
              </p>
              <p>
                Asímismo, Pacomarca realiza continuamente presentaciones no científicas de su programa de mejora genética en diversas publicaciones, nacionales e internacionales, así como en congresos veterinarios, encuentros de agrupaciones ligadas por la alpaca, eventos especializados, charlas a nivel universitario, etc.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '32+', label: 'Artículos científicos publicados' },
                { num: '13M+', label: 'Datos de base' },
                { num: '23+', label: 'Universidades colaboradoras' },
                { num: '5', label: 'Continentes de investigadores' },
              ].map((s) => (
                <div key={s.label} className="bg-beige p-8 text-center">
                  <p className="font-serif text-4xl text-gold mb-2">{s.num}</p>
                  <p className="text-xs text-ink/55 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Líneas temáticas</p>
              <h2 className="font-serif text-3xl text-ink">Áreas de investigación</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '◎', title: 'Genética cuantitativa', desc: 'Parámetros genéticos, heredabilidades, valores de cría y respuesta a la selección en alpacas.' },
              { icon: '◎', title: 'Calidad de fibra', desc: 'Finura, uniformidad, medulación, brillo y otras características físicas de la fibra de alpaca.' },
              { icon: '◎', title: 'Bienestar animal', desc: 'Indicadores de bienestar, prácticas de manejo, impacto de la esquila en la salud y productividad.' },
              { icon: '◎', title: 'Sostenibilidad', desc: 'Impacto social y ambiental de la producción alpaquera, modelos de negocio sostenibles.' },
            ].map((t) => (
              <FadeUp key={t.title}>
                <div className="bg-white p-8">
                  <span className="text-gold text-2xl block mb-4">{t.icon}</span>
                  <h3 className="font-serif text-lg text-ink mb-3">{t.title}</h3>
                  <p className="text-sm text-ink/55 leading-relaxed">{t.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Featured publication */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="mb-12">
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Investigación</p>
            <h2 className="font-serif text-3xl text-ink">Publicación destacada</h2>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 border border-sand/50 overflow-hidden">
            <div className="relative h-64 lg:h-auto min-h-[260px]">
              <Image
                src={featuredPublication.image}
                alt={featuredPublication.title}
                fill
                className="object-cover grayscale"
              />
            </div>
            <div className="p-10 flex flex-col justify-between bg-cream">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">{featuredPublication.journal} · {featuredPublication.year}</p>
                <h3 className="font-serif text-2xl text-ink mb-4 leading-snug">{featuredPublication.title}</h3>
                <p className="text-sm text-ink/55">{featuredPublication.authors}</p>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-gold mt-8">Journal of Animal Breeding and Genetics</p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Publications list */}
      <section className="bg-cream py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="mb-12 text-center">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Bibliografía</p>
              <h2 className="font-serif text-3xl text-ink">Listado de publicaciones</h2>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="space-y-4">
              <PublicationAccordion title="Revistas indexadas (ISI / Scopus)" publications={publicacionesIndexadas} files={indexadasFiles} />
              <PublicationAccordion title="Otras publicaciones y materiales técnicos" publications={otrasPub} files={otrasFiles} />
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mt-10 p-8 bg-beige text-center">
              <p className="text-sm text-ink/65 mb-4">
                Para más información sobre las publicaciones científicas de Pacomarca, contacta directamente al equipo científico.
              </p>
              <a
                href="/contacto?rol=cientifico"
                className="inline-block text-xs tracking-[0.2em] uppercase text-gold border-b border-gold pb-1 hover:text-ink hover:border-ink transition-colors"
              >
                Contactar al equipo científico
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Journal logos banner */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold text-center">Revistas indexadas del sector</p>
          </FadeUp>
        </div>
        <div className="relative">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...journals, ...journals].map((j, i) => (
              <div
                key={i}
                className="shrink-0 w-48 h-20 bg-beige border border-sand/50 flex items-center justify-center px-4"
              >
                {/* Reemplazar con <Image> cuando estén los logos */}
                <p className="text-xs text-ink/40 text-center leading-snug">{j.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
