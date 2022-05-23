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
      texto:
        'Sternberg, R., J. Handbook of Creativity. Cambridge University Press.',
      tipo: 'Web',
      link: 'https://education.stateuniversity.com/pages/1892/Creativity.html',
    },
  ],
  glosario: [
    {
      termino: 'Aplicación',
      significado:
        'aplicación (también llamada app) es un programa informático creado para llevar a cabo o facilitar una tarea en un dispositivo informático (Sistemas.com, 2021).',
    },
    {
      termino: 'Compresión',
      significado:
        'la compresión de una fotografía es la reducción de los datos digitales que no resultan necesarios e importantes. Esta compresión permite almacenar mayor número de imágenes al conseguir que los archivos resultantes no ocupen mucho espacio.',
    },
    {
      termino: 'CMYK',
      significado:
        'el modelo CMYK (siglas de Cyan, Magenta, Yellow y Key) es un modelo de color sustractivo que se utiliza en la impresión en colores. Es la versión moderna y más precisa del antiguo modelo tradicional de coloración (RGB).',
    },
    {
      termino: 'Creatividad',
      significado:
        'capacidad de crear pensamientos nuevos a partir de ideas o conceptos ya conocidos.',
    },
    {
      termino: 'Escenografía',
      significado:
        'grupo de elementos que son utilizados para ambientar y contextualizar un entorno determinado en una escena audiovisual. Estos elementos pueden ser de iluminación, de decoración o utilería.',
    },
    {
      termino: '<em>Hashtag</em>',
      significado:
        'palabra o frase precedida por un símbolo de numeral (#), utilizado en las redes sociales y en las aplicaciones, especialmente en Twitter, para identificar mensajes sobre un tema específico.',
    },
    {
      termino: 'Lightroom',
      significado:
        'programa que hace parte de la suite de Adobe Company, creado para el tratamiento de imágenes digitales, con este programa se logra realizar los procesos de revelado, tratamiento y flujo de trabajo de imágenes (Adobe Company, 2021).',
    },
    {
      termino: 'Redes sociales',
      significado:
        'en el mundo virtual son sitios y aplicaciones que operan en niveles diversos –como el profesional, de relación, entre otros– pero siempre permitiendo el intercambio de información entre personas y/o empresas.',
    },
    {
      termino: 'Mapa de bits',
      significado:
        'imagen que justamente se presenta en mapa de bits, consiste en una estructura de forma rectangular formada por píxeles o puntos de color, y que puede visualizarse en un monitor, en un papel, o en cualquier otro dispositivo que permita la representación de imágenes.',
    },
    {
      termino: 'Paleta de color',
      significado:
        'grupo de colores, que el ojo humano puede captar. Se ubican específicamente dentro de un círculo el cual permite ver y entender los diferentes tonos que componen la paleta de color. Es indispensable para la realización de piezas visuales y gráficas.',
    },
    {
      termino: 'Pixel',
      significado:
        'el pixel -o px, para abreviar- es el elemento más pequeño de una imagen reproducida digitalmente. En un monitor o en la pantalla de un teléfono móvil se suelen alinear varios píxeles en una trama. La combinación de varios píxeles constituye una imagen rasterizada (Ionos, 2021).',
    },
    {
      termino: '<em>Styling</em>',
      significado:
        'conocimientos de diseño para hacer un producto más atractivo y llamativo en una fotografía, video o puesta en escena.',
    },
    {
      termino: 'Escenografía',
      significado:
        'grupo de elementos que son utilizados para ambientar y contextualizar un entorno determinado en una escena audiovisual. Estos elementos pueden ser de iluminación, de decoración o utilería.',
    },
    {
      termino: 'Creatividad',
      significado:
        'capacidad de crear pensamientos nuevos a partir de ideas o conceptos ya conocidos.',
    },
    {
      termino: 'Paleta de color',
      significado:
        'grupo de colores, que el ojo humano puede captar. Se ubican específicamente dentro de un círculo que permite ver y entender los diferentes tonos que componen la paleta de color. Es indispensable para la realización de piezas visuales y gráficas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Adobe. (2020). <em>Acerca de las dimensiones en píxeles y la resolución de la imagen impresa</em>.',
      link:
        'https://helpx.adobe.com/es/photoshop/using/image-size-resolution.html',
    },
    {
      referencia:
        'Amador, P. (s.f.). <em>La imagen fotográfica y su lectura</em>.',
      link: 'https://core.ac.uk/download/pdf/30042969.pdf',
    },
    {
      referencia:
        'Cerebrote. (2019). <em>Cómo pasar una fotografía de color a un blanco y negro perfecto sin perder detalles ni volumen.</em>. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=5Cmn3O7kEgQ',
    },
    {
      referencia:
        'Deusto. (2019). <em>Guía de formatos y tamaños para diseños en redes sociales</em>.',
      link:
        'https://www.deustoformacion.com/blog/redes-sociales/guia-formatos-tamanos-para-disenos-redes-sociales',
    },
    {
      referencia: 'Crehana. (2019). <em>Qué formatos de archivo existen.</em>.',
      link:
        'http://fotografiaparaprincipianntes.blogspot.com/2016/06/las-mascaras-en-photoshop.html',
    },
    {
      referencia: 'Domestika. (2020). <em>Qué es la corrección de color.</em>.',
      link:
        'https://www.domestika.org/es/blog/3272-que-es-la-correccion-de-color',
    },
    {
      referencia: 'Fotonostra. (s. f.). <em>El proceso fotográfico.</em>.',
      link: 'https://www.fotonostra.com/fotografia/procesofoto.htm',
    },
    {
      referencia:
        'Ordoñez, C. A. (2015). Formatos de imagen digital. <em>Revista Digital Universitaria, (5)7, 2-10.</em>.',
      link: 'http://www.revista.unam.mx/vol.6/num5/art50/may_art50.pdf',
    },
    {
      referencia:
        'Rodríguez, H. (2021). <em>Retoque fotográfico: tips para mejorar una foto en Photoshop.</em>.',
      link:
        'https://www.crehana.com/co/blog/fotografia/retoque-fotografico-en-photoshop/?utm_source=google&utm_medium=cpc&utm_campaign=search-blog&utm_content=blog-fotografia&utm_term=upper-funnel&gclid=CjwKCAjwrfCRBhAXEiwAnkmKmXcb9nVcFj6aRgi7uOM0-GpS80clNaUzysnMyIn3tmgWROEu3A7PaBoCjnoQAvD_BwE',
    },
    {
      referencia:
        'TooMany Flash. (2021). <em>Conoce todo sobre la edición de fotos: conceptos, proceso, tips y más.</em>.',
      link: 'https://toomanyflash.com/edicion-de-fotos/',
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
        nombre: 'José Gabriel Ortiz Abella',
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
        nombre: 'María Natalia Maldonado Delgado ',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
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
        nombre: 'Erika Viviana Sandoval Roja',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
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
