import type { Locale, PageKey } from '../lib/i18n';

type NavItem = { label: string; page: PageKey };
type LinkItem = { label: string; detail: string; page: PageKey };

export type PageCopy = {
  title: string;
  description: string;
  heading: string;
  intro: string;
  imageAlt: string;
  imageCaption: string;
};

export type SiteCopy = {
  localeLabel: string;
  otherLocaleLabel: string;
  nav: NavItem[];
  home: {
    title: string;
    description: string;
    heading: string;
    intro: string;
    primaryAction: string;
    secondaryAction: string;
    imageAlt: string;
    imageCaption: string;
    servicesTitle: string;
    servicesIntro: string;
    services: Array<{ title: string; body: string }>;
    exploreTitle: string;
    exploreLinks: LinkItem[];
    galleryTitle: string;
    galleryNote: string;
    gallery: Array<{ src: string; alt: string }>;
    contactTitle: string;
    contactBody: string;
    contactAction: string;
  };
  about: PageCopy & {
    valuesTitle: string;
    values: Array<{ title: string; body: string }>;
  };
  brands: PageCopy & {
    note: string;
  };
  contact: PageCopy & {
    formTitle: string;
    formNote: string;
    fields: { name: string; email: string; message: string; submit: string };
    detailsTitle: string;
    details: Array<{ label: string; value: string }>;
  };
  footer: { statement: string; legal: string };
};

const sharedNavCa: NavItem[] = [
  { label: 'Inici', page: 'home' },
  { label: 'Nosaltres', page: 'about' },
  { label: 'Les nostres marques', page: 'brands' },
  { label: 'Contacte', page: 'contact' },
];

const sharedNavEs: NavItem[] = [
  { label: 'Inicio', page: 'home' },
  { label: 'Nosotros', page: 'about' },
  { label: 'Nuestras marcas', page: 'brands' },
  { label: 'Contacto', page: 'contact' },
];

export const content: Record<Locale, SiteCopy> = {
  ca: {
    localeLabel: 'CA',
    otherLocaleLabel: 'ES',
    nav: sharedNavCa,
    home: {
      title: 'Poblaliment | Distribució alimentària a Catalunya',
      description:
        'Poblaliment posa en moviment productes, marques i relacions amb distribució local i nacional a Catalunya.',
      heading: 'Producte, territori i servei.',
      intro:
        'Aquest és el nostre espai per explicar qui som, què posem en moviment i amb quines marques caminem.',
      primaryAction: 'Coneix-nos',
      secondaryAction: 'Parlem',
      imageAlt: 'Camió de Poblaliment repartint producte al capvespre',
      imageCaption: 'La distribució també forma part del producte.',
      servicesTitle: 'Els nostres serveis',
      servicesIntro:
        'Els nostres serveis garanteixen qualitat, confiança i una distribució eficient per als nostres clients.',
      services: [
        {
          title: 'Distribució local i nacional',
          body: 'Oferim servei de distribució per tot el territori pirinenc i català, garantint puntualitat, cura i proximitat.',
        },
        {
          title: 'Logística i emmagatzematge',
          body: 'Disposem d’un servei logístic propi i col·laboracions amb operadors especialitzats per assegurar un transport eficient i en les millors condicions de conservació.',
        },
        {
          title: 'Atenció personalitzada',
          body: 'Creiem en el tracte directe i la confiança. Ens adaptem a les necessitats de cada client per oferir un servei àgil, transparent i de qualitat.',
        },
      ],
      exploreTitle: 'Explora Poblaliment',
      exploreLinks: [
        { label: 'Nosaltres', detail: 'La base del projecte', page: 'about' },
        { label: 'Proveïdors', detail: 'Les marques que ens acompanyen', page: 'brands' },
        { label: 'Contacte', detail: 'Obrim una conversa', page: 'contact' },
      ],
      galleryTitle: 'Una mirada al nostre dia a dia',
      galleryNote: 'Imatges de suport · galeria preparada per ampliar',
      gallery: [
        { src: '/images/truck-sunset.jpg', alt: 'Camió de Poblaliment en ruta al capvespre' },
        { src: '/images/truck-snow.jpg', alt: 'Camió de Poblaliment en una carretera de muntanya' },
        { src: '/images/warehouse.jpg', alt: 'Espai de distribució de Poblaliment' },
      ],
      contactTitle: 'Tens una pregunta o una proposta?',
      contactBody: 'Escriu-nos i prepararem el següent pas.',
      contactAction: 'Anar a contacte',
    },
    about: {
      title: 'Nosaltres | Poblaliment',
      description:
        'Coneix Poblaliment, la seva manera de treballar i la relació entre producte, territori i persones.',
      heading: 'Una estructura per explicar-nos bé.',
      intro:
        'Poblaliment és una història que es construeix entre producte, territori i persones. Aquesta pàgina serà el lloc on donar-li context.',
      imageAlt: 'Exterior d’un espai de distribució',
      imageCaption: 'Un lloc físic, una xarxa que es va fent visible.',
      valuesTitle: 'El que volem que es noti',
      values: [
        {
          title: 'Claredat',
          body: 'Cada producte, cada relació i cada pas ha de poder entendre’s.',
        },
        {
          title: 'Proximitat',
          body: 'El territori no és decoració: és part de la manera de treballar.',
        },
        {
          title: 'Criteri',
          body: 'Aquesta secció recollirà les decisions que defineixen el projecte.',
        },
      ],
    },
    brands: {
      title: 'Marques i proveïdors d’alimentació | Poblaliment',
      description:
        'Explora els proveïdors de Poblaliment per categoria: formatges, conserves, carns, peix, vins, producte congelat, cafè i condiments.',
      heading: 'Marques i proveïdors.',
      intro:
        'Una guia de les marques que formen part del nostre assortiment, ordenades per famílies de producte.',
      imageAlt: 'Selecció de productes alimentaris',
      imageCaption: 'Una mostra del llenguatge visual que ja tenim a mà.',
      note: 'Proveïdors agrupats per família de producte',
    },
    contact: {
      title: 'Contacte | Poblaliment',
      description:
        'Contacta amb Poblaliment per parlar de distribució alimentària, productes, marques i col·laboracions.',
      heading: 'Obrim una conversa.',
      intro:
        'Aquest formulari és el punt de partida per a una futura connexió. Quan tinguem les dades definitives, aquest espai ja estarà preparat per rebre-les.',
      imageAlt: 'Vehicle de distribució davant de les muntanyes',
      imageCaption: 'Quan hi ha camí, també hi ha una manera de començar.',
      formTitle: 'Escriu-nos',
      formNote: 'Formulari de scaffolding · connexió pendent de configurar',
      fields: {
        name: 'Nom',
        email: 'Correu electrònic',
        message: 'Missatge',
        submit: 'Enviar missatge',
      },
      detailsTitle: 'Dades a completar',
      details: [
        { label: 'Correu', value: 'pendent de confirmar' },
        { label: 'Telèfon', value: 'pendent de confirmar' },
        { label: 'Ubicació', value: 'Poblaliment · Catalunya' },
      ],
    },
    footer: {
      statement: 'Producte, origen i criteri.',
      legal: '© Poblaliment · web en construcció',
    },
  },
  es: {
    localeLabel: 'ES',
    otherLocaleLabel: 'CA',
    nav: sharedNavEs,
    home: {
      title: 'Poblaliment | Distribución alimentaria en Cataluña',
      description:
        'Poblaliment pone en movimiento productos, marcas y relaciones con distribución local y nacional en Cataluña.',
      heading: 'Producto, territorio y servicio.',
      intro:
        'Este es nuestro espacio para explicar quiénes somos, qué ponemos en movimiento y con qué marcas caminamos.',
      primaryAction: 'Conócenos',
      secondaryAction: 'Hablemos',
      imageAlt: 'Camión de Poblaliment repartiendo producto al atardecer',
      imageCaption: 'La distribución también forma parte del producto.',
      servicesTitle: 'Nuestros servicios',
      servicesIntro:
        'Nuestros servicios garantizan calidad, confianza y una distribución eficiente para nuestros clientes.',
      services: [
        {
          title: 'Distribución local y nacional',
          body: 'Ofrecemos servicio de distribución por todo el territorio pirenaico y catalán, garantizando puntualidad, cuidado y proximidad.',
        },
        {
          title: 'Logística y almacenamiento',
          body: 'Disponemos de un servicio logístico propio y colaboraciones con operadores especializados para asegurar un transporte eficiente y en las mejores condiciones de conservación.',
        },
        {
          title: 'Atención personalizada',
          body: 'Creemos en el trato directo y la confianza. Nos adaptamos a las necesidades de cada cliente para ofrecer un servicio ágil, transparente y de calidad.',
        },
      ],
      exploreTitle: 'Explora Poblaliment',
      exploreLinks: [
        { label: 'Nosotros', detail: 'La base del proyecto', page: 'about' },
        { label: 'Proveedores', detail: 'Las marcas que nos acompañan', page: 'brands' },
        { label: 'Contacto', detail: 'Abrimos una conversación', page: 'contact' },
      ],
      galleryTitle: 'Una mirada a nuestro día a día',
      galleryNote: 'Imágenes de apoyo · galería preparada para ampliar',
      gallery: [
        { src: '/images/truck-sunset.jpg', alt: 'Camión de Poblaliment en ruta al atardecer' },
        { src: '/images/truck-snow.jpg', alt: 'Camión de Poblaliment en una carretera de montaña' },
        { src: '/images/warehouse.jpg', alt: 'Espacio de distribución de Poblaliment' },
      ],
      contactTitle: '¿Tienes una pregunta o una propuesta?',
      contactBody: 'Escríbenos y prepararemos el siguiente paso.',
      contactAction: 'Ir a contacto',
    },
    about: {
      title: 'Nosotros | Poblaliment',
      description:
        'Conoce Poblaliment, su manera de trabajar y la relación entre producto, territorio y personas.',
      heading: 'Una estructura para explicarnos bien.',
      intro:
        'Poblaliment es una historia que se construye entre producto, territorio y personas. Esta página será el lugar donde darle contexto.',
      imageAlt: 'Exterior de un espacio de distribución',
      imageCaption: 'Un lugar físico, una red que se va haciendo visible.',
      valuesTitle: 'Lo que queremos que se note',
      values: [
        {
          title: 'Claridad',
          body: 'Cada producto, cada relación y cada paso debe poder entenderse.',
        },
        {
          title: 'Proximidad',
          body: 'El territorio no es decoración: es parte de la forma de trabajar.',
        },
        {
          title: 'Criterio',
          body: 'Esta sección recogerá las decisiones que definen el proyecto.',
        },
      ],
    },
    brands: {
      title: 'Marcas y proveedores de alimentación | Poblaliment',
      description:
        'Explora los proveedores de Poblaliment por categoría: quesos, conservas, carnes, pescado, vinos, congelados, café y condimentos.',
      heading: 'Marcas y proveedores.',
      intro:
        'Una guía de las marcas que forman parte de nuestro surtido, ordenadas por familias de producto.',
      imageAlt: 'Selección de productos alimentarios',
      imageCaption: 'Una muestra del lenguaje visual que ya tenemos a mano.',
      note: 'Proveedores agrupados por familia de producto',
    },
    contact: {
      title: 'Contacto | Poblaliment',
      description:
        'Contacta con Poblaliment para hablar de distribución alimentaria, productos, marcas y colaboraciones.',
      heading: 'Abrimos una conversación.',
      intro:
        'Este formulario es el punto de partida para una futura conexión. Cuando tengamos los datos definitivos, este espacio ya estará preparado para recibirlos.',
      imageAlt: 'Vehículo de distribución frente a las montañas',
      imageCaption: 'Cuando hay camino, también hay una forma de empezar.',
      formTitle: 'Escríbenos',
      formNote: 'Formulario de scaffolding · conexión pendiente de configurar',
      fields: {
        name: 'Nombre',
        email: 'Correo electrónico',
        message: 'Mensaje',
        submit: 'Enviar mensaje',
      },
      detailsTitle: 'Datos por completar',
      details: [
        { label: 'Correo', value: 'pendiente de confirmar' },
        { label: 'Teléfono', value: 'pendiente de confirmar' },
        { label: 'Ubicación', value: 'Poblaliment · Cataluña' },
      ],
    },
    footer: {
      statement: 'Producto, origen y criterio.',
      legal: '© Poblaliment · web en construcción',
    },
  },
};
