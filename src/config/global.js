export default {
  global: {
    componenteFormativo: 'Edición fotográfica',
    descripcionCurso:
      'Las nuevas tecnologías han proporcionado nuevos lenguajes y estos a su vez, una representación del mundo que rodea a las personas. La imagen digital es una de esas herramientas que cambia y elabora un lenguaje propio. Conocer los campos que intervienen en la imagen permitirá interpretar cómo se están llevando los nuevos lenguajes comunicativos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        titulo: 'Edición fotográfica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Técnicas de edición',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Editores gratuitos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Editores con pago',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Corrección de colores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Formatos de archivos fotográficos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Exportación de fotografías',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Procesos creativos audiovisuales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Uso de los procesos creativos',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Conceptos de creatividad fotográfica',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Características de los procesos creativos',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Arte y finalización fotográfica',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Redes sociales para publicar fotografías',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Formatos de archivo para redes sociales',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Tipos de archivos para publicar en redes sociales',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Publicación de fotografías',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
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
  complementario: [
    {
      texto: 'Amador, P. (s.f.). La imagen fotográfica y su lectura.',
      tipo: 'Artículo PDF',
      link: 'https://core.ac.uk/download/pdf/30042969.pdf',
    },
    {
      texto:
        'Arnais, K. (2018). <em>Tipos de plano y ángulos de cámara</em> | <em>Curso de video 7/8</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=S5MH3srlu28',
    },
    {
      texto:
        'Colorado, O. (2020). <em>Fotografía: ángulos y altura de cámara</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-oJGq42S6sw',
    },
    {
      texto: 'Gonzaga, L. (2013). Aprende a iluminar en fotografía.',
      tipo: 'Libro PDF',
      link: 'Páginas: 4 a la 9, 12, 13, 14 ,15.',
    },
    {
      texto:
        'Freeman, M. (2005). <em>Fotografía digital de personas</em>. TASCHEN.',
      tipo: 'Libro',
      link: 'Páginas: 46, 47, 48, 49.',
    },
    {
      texto: 'Zerbst, C. (2008). Introducción a la fotografía digital.',
      tipo: 'Libro',
      link:
        'https://www.uv.mx/personal/lenunez/files/2013/06/INICIACION-A-LA-FOTOGRAFIA-DIGITAL-DeCamaras.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Brillo ',
      significado:
        'Luminosidad relevante del color, que se mide como un porcentaje comprendido entre 0% (negro) y 100% (blanco).',
    },
    {
      termino: 'Contraste',
      significado:
        'Escala de tonalidad de una imagen fotográfica, desde claros muy brillantes hasta sombras muy oscuras.',
    },
    {
      termino: 'Difusión',
      significado:
        'Dispersión de la luz mediante el traspaso de un material translúcido para suavizar la luz y sus sombras. Las nubes son difusores naturales.',
    },
    {
      termino: 'Difusor',
      significado:
        'Accesorio portátil de iluminación, puede ser de tela o material translúcido que suaviza la intensidad de la luz.',
    },
    {
      termino: 'El guion fotográfico',
      significado:
        'Es la construcción y diseño planificado de los objetivos de la fotografía por realizar.',
    },
    {
      termino: 'Luz',
      significado:
        'Es la parte de la radiación electromagnética que puede ser percibida por el ojo humano.​ En física, el término luz se considera como parte del campo de las radiaciones conocido como espectro electromagnético, mientras que la expresión luz visible señala específicamente la radiación en el espectro visible.',
    },
    {
      termino: 'Luz artificial',
      significado:
        'Toda fuente de luz producida por medios técnicos, como bombillas o focos.',
    },
    {
      termino: 'Luz de detalle',
      significado:
        'Es una fuente de luz con una intensidad menor a la luz principal y a la luz secundaria. Su característica principal es que es una luz puntual.',
    },
    {
      termino: 'Luz dura',
      significado:
        'Este tipo de luz se caracteriza por ser una luz que genera una sombra muy contrastada (negra).',
    },
    {
      termino: 'Luz natural',
      significado:
        'Toda fuente de luz que proviene directamente del sol y se ve afectada por factores atmosféricos como las nubes.',
    },
    {
      termino: 'Luz principal',
      significado:
        'Es la más importante, ya que es la luz con más intensidad y por ende, la que predomina en la fotografía. Es la que manda, marca el diafragma a usar.',
    },
    {
      termino: 'Luz secundaria',
      significado:
        'Debe ser una fuente con menor intensidad que la luz principal. Su función es la de rellenar, suavizar o quitar las sombras que se producen por la posición de la luz principal.',
    },
    {
      termino: 'Luz suave',
      significado:
        'Este tipo de luz se caracteriza por ser una luz que genera una sombra muy poco contrastada (grisácea).',
    },
    {
      termino: 'Ruido',
      significado:
        'Pequeños puntos que se presentan en la fotografía digital. Se producen en situaciones de poca luz donde se utilizan ISO de alto valor.',
    },
    {
      termino: 'Trípode de luz',
      significado:
        'Accesorio que se utiliza como soporte para las cabezas de <em>flash</em>.',
    },
    {
      termino: 'Velocidad de obturación',
      significado:
        'Es una variable que controla el tiempo de exposición de la luz en la imagen final.',
    },
  ],
  referencias: [
    {
      referencia:
        'Gonzaga, L. (2013). <em>Aprender a iluminar en fotografía.</em>',
      link:
        'https://www.aprenderailuminar.com/2011/09/libro-ebook-pdf-aprender-iluminar.html',
    },
    {
      referencia: 'Hofmann. (2021). <em>Tipos de planos en fotografía</em>.',
      link:
        'https://www.hofmann.es/blog/fotografia/tipos-de-planos-fotograficos-y-cuando-utilizarlos/',
    },
    {
      referencia:
        'Muchos Leds. (2019). <em>Temperatura de color (cálido, neutro, frío)</em>.',
      link:
        'https://muchosleds.com/en/content/6-temperatura-de-color-calido-neutro-frio',
    },
    {
      referencia:
        'Nikon. (s.f.). 5 sencillas reglas de la composición fotográfica.',
      link:
        'https://www.nikon.es/es_ES/learn-and-explore/photography-articles.tag/learn_and_explore/photography_articles/5-easy-composition-guidelines.dcr',
    },
    {
      referencia:
        'Too Many Flash. (2021). <em>Iluminación en fotografía: tipos y teoría de la luz</em>.',
      link: 'https://toomanyflash.com/iluminacion-en-fotografia/',
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
        nombre: 'Stephanie Ascanio',
        cargo: 'Experto Temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica – Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Andrés Suescún Lesmes',
        cargo: 'Experto Temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica – Regional Distrito Capital',
      },
      {
        nombre: 'Luis Fernando Botero Mendoza',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo de desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura – Regional Santander',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
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
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
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
