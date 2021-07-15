export default {
  global: {
    componenteFormativo: 'Sistemas operativos de red',
    descripcionCurso:
      'El despliegue e implantación de sistemas requiere de una serie de componentes de infraestructura y plataforma tecnológica dentro de los cuales se encuentran los sistemas operativos, quienes en un entorno cliente-servidor tienen la responsabilidad de alojar las aplicaciones y servicios que estarán dispuestas para el acceso desde los clientes.',
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
        titulo: 'Definición y generalidades de sistemas cliente/servidor',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Componentes de una arquitectura cliente/servidor',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Sistemas operativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Características de un sistema Operativo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: ' Tipos de sistemas operativos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Sistemas operativos tipo cliente',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Sistemas operativos de red',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Licenciamiento de Software a nivel de sistemas operativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Licencias de Windows',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Licenciamiento en Linux ',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Licenciamiento MacOS',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Aplicaciones y Servicios',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
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
        'Adeva, R. (2021, 4 febrero). Todo sobre Linux, el sistema operativo de código abierto. ADSLZone. ',
      link: 'https://www.adslzone.net/reportajes/software/que-es-linux/',
    },
    {
      referencia: 'Apple, (s.f). Disponible en:',
      link: 'https://www.apple.com/mx/legal/sla/',
    },
    {
      referencia:
        'Carretero Pérez, J., De Miguel Anasagasti, P., García Carballeira, F., & Pérez Costoya, F. (2001). Sistemas Operativos. Una Visión Aplicada. Mac Graw Hill.',
      link: '',
    },
    {
      referencia:
        'Debian. (s. f.). Debian -- Contrato social de Debian. https://www.debian.org. Recuperado 31 de mayo de 2021, de',
      link: 'https://www.debian.org/social_contract.es.html',
    },
    {
      referencia:
        'Fm, Y. (2021, 30 marzo). 31 distribuciones Linux para elegir bien la que más necesitas. Genbeta.',
      link:
        'https://www.genbeta.com/linux/31-distribuciones-linux-para-elegir-bien-que-necesitas-1',
    },
    {
      referencia:
        'Free Software Foundation. (s. f.). Licencias - Proyecto GNU - Free Software Foundation. El sistema operativo GNU. Recuperado 31 de mayo de 2021, de',
      link: 'https://www.gnu.org/licenses/licenses.es.html',
    },
    {
      referencia:
        'Naty, L. (2004). Sistemas operativos. Instituto Tecnológico Superior de Acayucan.',
      link: '',
    },
    {
      referencia:
        'Open source initiative. (s. f.). The 3-Clause BSD License | Open Source Initiative. Opensource.Org. Recuperado 31 de mayo de 2021, de',
      link: 'https://opensource.org/licenses/BSD-3-Clause',
    },
    {
      referencia:
        'Rafino, M. S. (2000, 23 septiembre). Sistemas Operativos. https://concepto.de.',
      link: 'https://concepto.de/sistema-operativo/',
    },
    {
      referencia:
        'Rodríguez Ramírez, A. M., & Obando Ortiz, F. R. (2005). Análisis comparativo de sistemas operativos de red (Bachelor"s thesis, QUITO/PUCE/2005)',
      link: '',
    },
    {
      referencia:
        'Sistemas, S. (2016, 24 octubre). Tipos de licencia en Windows. Solvetic.',
      link:
        'https://www.solvetic.com/page/recopilaciones/s/profesionales/tipos-de-licencias-windows-oem-retail-volumen',
    },
    {
      referencia: 'Sotés, J. D. OTROS SISTEMAS OPERATIVOS EN RED.',
      link: '',
    },
    {
      referencia:
        'Stallings, W., Aguilar, L. J., Dodero, J. M., Torres, E., & Mora, M. K. (1997). Sistemas operativos (Vol. 732). Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Zuta, J. A. (2011). Tipos de licencias para software - Monografias.com. Monografias.com.',
      link:
        'https://www.monografias.com/trabajos88/tipos-licencias-software/tipos-licencias-software.shtml',
    },
  ],
  glosario: [
    {
      termino: 'NOS',
      significado: ' Network Operating Systems (sistemas operativos de red).',
    },
    {
      termino: 'GPL',
      significado:
        ' Licencia Pública General de GNU o más conocida por su nombre en inglés GNU General Public License',
    },
    {
      termino: 'Cliente',
      significado:
        ' Son las computadoras quienes acceden a los servidores haciendo peticiones y solicitudes de acceso a recursos y servicios alojados o dispuestos en los servidores.',
    },
    {
      termino: 'Servidor',
      significado:
        ' Es una computadora con bastante potente con hardware y software especializado y dispuesto para atender y dar respuesta a las peticiones o solicitudes que hacen las otras computadoras quienes acceden a los recursos o servicios ofrecidos por el servidor.',
    },
    {
      termino: 'DNS',
      significado: ' Servidor de Nombres de Dominio',
    },
    {
      termino: 'DHCP',
      significado: ' Protocolo de configuración dinámica de host',
    },
  ],
  complementario: [
    {
      texto: 'Lagunas, B. J. M. (2019, 2 marzo). Sistemas operativos de red.',
      tipo: 'Video de Youtube',
      link: 'https://youtu.be/js6LhkIx2oo',
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
        nombre: 'Jonathan Guerrero Astaiza',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de diseño y metrología - Regional distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Carlos Julián Ramírez Benítez',
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
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
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
