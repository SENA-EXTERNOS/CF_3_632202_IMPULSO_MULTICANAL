export default {
  global: {
    componenteFormativo: 'Operación de inventarios para el impulso comercial',
    descripcionCurso:
      'En este componente formativo se desarrollarán los aspectos relacionados con los inventarios o niveles de existencias y manejo de materias primas, insumos, suministros, productos en proceso y terminados, así como aspectos propios para la gestión, instrumentos para analizar y realizar registros asociados al conteo y control de existencias, y la generación de informes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
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
        titulo: 'Inventarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Relevancia de los inventarios y sus objetivos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Clasificación de inventarios',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Almacenamiento de inventarios',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Clases de almacenamiento',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Nivel óptimo de inventario',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Codificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Sistemas de codificación de productos de inventario',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Orden y control a partir de la codificación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Conteo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Pasos para realizar los conteos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Frecuencia de conteo',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Herramientas Tecnológicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Herramientas de <em>Software</em>',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Recursos para la captura',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Reportes e informes de inventarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Tipos de informes de inventarios',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Reporte de informes',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
      tema: 'Inventario y almacenamiento sistema ABC',
      referencia:
        'Causado Rodríguez, E. (2015). Modelo de inventarios para control económico de pedidos en empresa comercializadora de alimentos. <em>Revista Ingenierías Universidad de Medellín,</em> 14 (27) p. 163-176.',
      tipo: 'Artículo',
      link:
        'https://revistas.udem.edu.co/index.php/ingenierias/article/view/1692/1637',
    },
    {
      tema: 'El uso de <em>software</em> libre en el control de inventarios:',
      referencia:
        'Delgado Soto, E., Cruz Rivero L., y Lince Olguín E. (2019).  El uso de <em>software</em> libre en el control de inventarios: caso de estudio. <em>Revista Ciencia Administrativa,1</em>',
      tipo: 'Artículo- caso de estudio',
      link: 'https://www.uv.mx/iiesca/files/2019/10/08CA201901.pdf',
    },
    {
      tema:
        'Gestión y Control de Aprovisionamiento de Materias Primas de alimentos',
      referencia:
        'Pérez N. y Civera J. J. (2014). Gestión y control del aprovisionamiento de materias primas de alimentos.',
      tipo: 'Libro',
      link: 'https://www.sintesis.com/data/indices/9788490770276.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Alimento',
      significado:
        'es producto de origen natural, o elaborado con fines de ser consumido para aportar al cuerpo humano nutrientes y/o energía. Puede encontrase en estados líquidos o sólidos.',
    },
    {
      termino: 'Conteo',
      significado:
        'es la actividad de identificar cantidades de recursos o productos con que cuenta la empresa, los cuales son inventarios productivos.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'es una característica natural de los alimentos que permite establecer que no causarán daño al consumidor cuando se comen o preparan, por mantener adecuadas condiciones naturales o de integridad de sus componentes, sin agentes tóxicos o de microorganismos.',
    },
    {
      termino: 'Insumo',
      significado:
        'Son el conjunto de recursos que contempla un proceso, son los ingredientes indirectos, envases y embalajes de alimentos.',
    },
    {
      termino: 'Existencia',
      significado:
        'es el elemento que soporta y está en contacto directo con el alimento, protegiéndolo desde su fabricación o elaboración hasta su entrega su consumo.',
    },
    {
      termino: 'Plan sanitario',
      significado:
        'es el conjunto de actividades y características que deben cumplir las empresas y sus recursos como bodegas, edificaciones, equipos, utensilios, para la fabricación, elaboración, procesamiento, obtención, almacenamiento y distribución de alimentos, de manera regular.',
    },
    {
      termino: 'Portafolio de productos',
      significado:
        'es el conjunto de productos que una empresa pone en oferta y comercialización a sus diferentes tipos de clientes, los cuales están ordenados por líneas o categorías, siendo la empresa la que las establece para su gestión.',
    },
    {
      termino: 'Norma sanitaria',
      significado:
        'son las disposiciones emitidas por el gobierno o las entidades sanitarias para cumplimiento de las personas o entidades que participan en las actividades de fabricación de productos alimentarios.',
    },
    {
      termino: 'Vida útil del producto',
      significado:
        'es el periodo de tiempo que tiene un producto para su consumo sin entrar en riesgos o degradación, el cual está comprendido entre la fecha de fabricación y la fecha de vencimiento, que es un estimado de cuando sus características organolépticas pueden cambiar.',
    },
    {
      termino: 'Inventario físico',
      significado:
        'son los niveles de existencias de una clase de productos. También se denomina a la acción de verificar las cantidades registradas en el sistema de gestión de inventarios, mediante la comparación física de su existencia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez Pareja, L. F., y Parada Fonseca, S. P. (2020). <em>Gestión de Inventarios- Cartilla para el aula.</em> Corporación Universitaria Minuto de Dios UNIMINUTO. ',
      link: '',
    },
    {
      referencia:
        'Causado Rodríguez, E. (2015). Modelo de inventarios para control económico de pedidos en empresa comercializadora de alimentos. <em>Revista Ingenierías Universidad de Medellín,</em> 14 (27) p. 163-176. ',
      link:
        'https://revistas.udem.edu.co/index.php/ingenierias/article/view/1692/1637',
    },
    {
      referencia:
        'Cruz Fernández, A. (2017). <em>Gestión de Inventarios.</em> Málaga: IC Editorial. ',
      link: '',
    },
    {
      referencia:
        'Hernández Zambrano, A. (2010). <em>Administración de compras e inventarios en almacenes de alimentos y bebidas.</em>',
      link:
        'https://www.gestiopolis.com/administracion-compras-almacenes-alimentos-bebidas/ ',
    },
    {
      referencia:
        'SENA (2012) <em>Almacenamiento e Inventarios: responsables del orden en las grandes empresas.</em> [Video] Youtube ',
      link: 'https://youtu.be/KLK_RR59Z_k',
    },
    {
      referencia:
        'Resolución 2674 de 2013. [Ministerio de salud y protección social] Por la cual se reglamenta el artículo 126 del Decreto 019 de 2012 y se dictan otras disposiciones.  22 de julio de 2013',
      link: '',
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
        cargo: 'Desarrollo front-end',
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
