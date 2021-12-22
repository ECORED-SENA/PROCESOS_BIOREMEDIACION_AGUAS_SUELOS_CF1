export default {
  global: {
    componenteFormativo:
      'Principios generales de la biorremediación y microbiología',
    descripcionCurso:
      'El conocimiento de los fundamentos de las principales disciplinas de base y de apoyo, involucradas en los procesos de biorremediación y de las propiedades básicas de los componentes sobre los cuales actúan, permite que se tenga un panorama mucho más claro sobre cómo abordar problemas de contaminación de diferentes tipos y poder proponer una alternativa de solución más eficiente.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Contaminación de suelos y aguas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Caracterización de suelos y aguas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de contaminantes del suelo y agua',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Toma de muestras',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Fundamentos de biorremediación de suelos y aguas',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Cálculos de masa, volumen, caudales y concentraciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Magnitudes fundamentales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Conversión de unidades',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Soluciones y concentraciones',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Principios de microbiología en suelos y aguas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de microorganismos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos de metabolismo microbiano y rutas degradativas',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Ciclos biogeoquímicos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Conceptos de seguridad y salud en el trabajo  ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tipos de riesgos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Medidas de manejo y control de riesgos',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Barois, I., Contreras, B. Hernández, M., De los Santos, F. (2018). El suelo y el petróleo. Estudio de caso de Biorremediación en pasivo ambiental de Papantla. Instituto de Ecología.',
      link: '',
    },
    {
      referencia:
        'Decreto 1072 de 2015. [Ministerio del Trabajo]. Por la cual se reglamenta el decreto único reglamentario del sector trabajo. Mayo 26 de 2015.',
      link: '',
    },
    {
      referencia:
        'Decreto 4741 de 2005. [Ministerio del Ambiente, Vivienda y Desarrollo Territorial]. Por el cual se reglamenta parcialmente la prevención y manejó de los residuos o desechos peligrosos generados en el marco de la gestión integral. Diciembre 30 de 2005.',
      link: '',
    },
    {
      referencia:
        'Del Puerto Rodríguez, A., Suárez, S. & Palacio, D. (2014). Efectos de los plaguicidas sobre el ambiente y la salud. Revista Cubana de Higiene y Epidemiología, 52(3), p. 372-387.',
      link: '',
    },
    {
      referencia:
        'Reyes, Y., Vergara, I., Torres, O., Díaz, M. & González, E. (2016). Contaminación por metales pesados: implicaciones en salud, ambiente y seguridad alimentaria. Revista Ingeniería, Investigación y Desarrollo, 16 (2), p. 66-77.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, H. (2005). Contaminación de sedimentos del Río Anoia por metales pesados (Barcelona - España). Investigación & desarrollo. 5, p. 103-116.',
      link: '',
    },
    {
      referencia:
        'Zamora, A., Ramos, J. & Arias, M. (2012). Efecto de la contaminación por hidrocarburos sobre algunas propiedades químicas y microbiológicas de un suelo de sabana. Bioagro, 24(1), p. 5-12.',
      link: 'https://www.redalyc.org/articulo.oa?id=85723518002',
    },
  ],
  glosario: [
    {
      termino: 'Bioacumulación',
      significado:
        'Para GreenFacts es la acumulación total de sustancias contaminantes en un organismo a través del tiempo, partiendo de fuentes tanto bióticas (otros organismos) como abióticas (suelo, aire y agua).',
    },
    {
      termino: 'Biodegradabilidad',
      significado:
        'Ecozema la define como la capacidad de descomposición debido a la actividad enzimática que presentan las sustancias o materiales orgánicos, convirtiéndose en sustancias más sencillas e incluso llegar a moléculas inorgánicas simples como agua, dióxido de carbono y metano.',
    },
    {
      termino: 'Biodisponibilidad',
      significado:
        'Es la característica de las sustancias tóxicas que les permite incorporarse a los seres vivos mediante procesos como la inhalación, ingesta o absorción (Ministerio de Ambiente de Perú, s.f.).',
    },
    {
      termino: 'Bioestructura',
      significado:
        'La Agroforesttery science web information la define como la forma grumosa del suelo, que es estable al agua y que depende de coloides generados a partir de bacterias, algas e hifas de hongos. Estos grumos se llaman agregados y son aglomerados de partículas de suelo menores a 5 mm de diámetro, que pueden ser de origen químico (agregados primarios) o generados por los microorganismos del suelo (agregados secundarios).',
    },
    {
      termino: 'Biomagnificación',
      significado:
        'Según GreenFacts es la capacidad de algunas sustancias químicas para acumularse en los organismos a lo largo de la cadena trófica, en la cual a medida que sube el nivel trófico, aumenta la concentración. ',
    },
    {
      termino: 'Biorremediación',
      significado:
        'Aplicación de microorganismos, plantas o las enzimas derivadas de ellos para la restauración del ambiente; es considerada como un tratamiento efectivo, económico y amigable con el ambiente (Unilibre, s.f.).',
    },
    {
      termino: 'Capacidad de intercambio catiónico',
      significado:
        'Propiedad que expresa la medida de la cantidad de cationes (cargas negativas) presentes en las superficies de sustancias como los minerales y componentes orgánicos del suelo (arcilla, materia orgánica o sustancias húmicas) que pueden ser intercambiados por otros cationes o por iones de hidrógeno presentes en la solución del suelo y generalmente liberados por las raíces de las plantas.',
    },
    {
      termino: 'Compuestos orgánicos persistentes',
      significado:
        'Sustancias químicas que persisten en el medio ambiente, se bioacumulan en la cadena alimentaria y suponen un riesgo de causar efectos adversos a la salud humana y al medio ambiente. En este grupo se encuentran los plaguicidas, bifenilos policlorados (PCB), las dioxinas y los furanos. La particularidad de este tipo de contaminantes es que pueden ser transportados hasta regiones donde nunca se han utilizado o producido (Dirección General de Medioambiente de la Comisión Europea, traducido por GreenFacts, s.f.).',
    },
    {
      termino: 'Dioxinas',
      significado:
        'Es un grupo de sustancias químicas cloradas, de carácter orgánico, que presentan propiedades tóxicas, dependiendo del número y la posición de los átomos de cloro presentes en su estructura. Una de las dioxinas más dañinas es la conocida como TCDD (GreenFacts, s.f.).',
    },
    {
      termino: 'Dosis letal media',
      significado:
        'Denotada cómo DL50 es la dosis de una sustancia que resulta mortal para la mitad de un conjunto de animales de prueba. Este valor se utiliza para expresar la toxicidad aguda de una sustancia, se suele expresar como los miligramos (mg) de sustancia tóxica por kilogramo (kg) de peso del organismo (Química.es,s.f.).',
    },
    {
      termino: 'Furanos',
      significado:
        'Son compuestos orgánicos formados en los tratamientos térmicos. Son estables y muy resistentes a procesos de degradación química y biológica, lo que los hace muy persistentes, manteniéndose presentes en la naturaleza durante décadas. Se acumulan con facilidad en los componentes ambientales y de ahí pasan a la cadena trófica. ',
    },
    {
      termino: 'Metales pesados',
      significado:
        'El Viceministerio para la Transición Ecológica de España los define como todo elemento químico metálico de densidad entre 4 y 7 g/cm³. En ocasiones se incluyen otros elementos tóxicos ligeros como el berilio (Be) o el aluminio (Al), o algún semimetal como el arsénico (As). La peligrosidad de los metales pesados reside en que no pueden ser degradados (ni química, ni biológicamente) y además, tienden a bioacumularse y a biomagnificarse, provocando efectos tóxicos de muy diverso carácter.',
    },
    {
      termino: 'Potencial redox',
      significado:
        'Medida que expresa la actividad de los electrones en una reacción química. En estas, se dan fenómenos de transferencia de electrones, lo que significa que hay unas sustancias químicas que actúan como donadores de electrones (agentes reductores) y otras que los atrapan (agentes oxidantes), tiene mucha relación con la energía eléctrica, pues son estos electrones y el modo en el que fluyen por una disolución lo que determina en qué estado se encuentra la electricidad, y se expresa en milivoltios (Acqua tecnología, s.f.).',
    },
    {
      termino: 'Red trófica',
      significado:
        'GreenFacts las define como el conjunto interconectado de cadenas alimenticias de un ecosistema. Todos los organismos forman parte de la red trófica.',
    },
    {
      termino: 'Xenobiótico',
      significado:
        'Sustancia extraña al individuo, la cual lleva procesos de absorción, distribución metabolismo y excreción; en cada uno de estos pasos experimenta numerosas transformaciones bioquímicas (CONACYT, s.f.).',
    },
  ],
  complementario: [
    {
      texto:
        'Vargas, F. (2005). La contaminación ambiental como factor determinante de la salud. Revista Española de Salud Pública, 79(2), p. 117-127.',
      tipo: 'Artículo PDF',
      link: 'https://www.redalyc.org/articulo.oa?id=17079201',
    },
    {
      texto:
        'Universidad Abierta y a Distancia de México. (2014). Introducción a la biorremediación [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FHKDr57rT2s',
    },
    {
      texto:
        'Instituto de Ingeniería de la Universidad Nacional Autónoma de México. (2018). Remediación de suelos [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uRzS_12EMKI',
    },
    {
      texto:
        'Universidad Abierta y a Distancia de México. (2014). Biorremediación y las bacterias [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uduG86qIhvk',
    },
    {
      texto:
        'Arias, J., Villasís, M., & Miranda, M. (2016). El protocolo de investigación III: la población de estudio. Revista Alergia México, 63(2), p. 201-206.',
      tipo: 'Artículo PDF',
      link: 'https://www.redalyc.org/articulo.oa?id=486755023011',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Giovanny Adolfo Lugo Barrera',
        cargo: 'Experto temático',
        centro: 'Centro de Diseño Tecnológico Industrial - Regional Valle',
      },
      {
        nombre: 'Luz Aída Quintero Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Marcela González Gómez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
