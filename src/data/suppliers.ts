export type Supplier = {
  name: string;
  category: string;
  categoryEs: string;
  website?: string;
  principal?: boolean;
};

// Supplier names and groupings supplied by Poblaliment. Sites are official where
// identified; entries without a URL need confirmation before publishing a link.
export const suppliers: Supplier[] = [
  {
    name: 'TGT',
    category: 'Formatges',
    categoryEs: 'Quesos',
    website: 'https://www.grupotgt.com/',
    principal: true,
  },
  {
    name: 'Friolisa',
    category: 'Producte congelat',
    categoryEs: 'Producto congelado',
    website: 'https://friolisa.es/',
    principal: true,
  },
  {
    name: 'Moritz',
    category: 'Cerveses',
    categoryEs: 'Cervezas',
    website: 'https://www.moritz.com/',
    principal: true,
  },
  {
    name: 'Tros de Sort',
    category: 'Formatges',
    categoryEs: 'Quesos',
    website: 'https://trosdesort.cat/',
  },
  {
    name: 'Formatge Ecològic de Puigcerver',
    category: 'Formatges',
    categoryEs: 'Quesos',
    website: 'https://www.ecologicdepuigcerver.com/',
  },
  {
    name: 'Ojos del Guadiana',
    category: 'Formatges',
    categoryEs: 'Quesos',
    website: 'https://www.ojosdelguadiana.com/',
  },
  {
    name: 'Mariscadora',
    category: 'Conserves · Del mar',
    categoryEs: 'Conservas · Del mar',
    website: 'https://mariscadora.es/',
  },
  {
    name: 'Hoya',
    category: 'Conserves · Del mar',
    categoryEs: 'Conservas · Del mar',
    website: 'https://conservashoya.com/',
  },
  {
    name: 'Lolín',
    category: 'Conserves · Del mar',
    categoryEs: 'Conservas · Del mar',
    website: 'https://www.conservaslolin.es/',
  },
  {
    name: 'Pescamar',
    category: 'Conserves · Del mar',
    categoryEs: 'Conservas · Del mar',
    website: 'https://pescamar.es/',
  },
  {
    name: 'Pujadó Solano',
    category: 'Conserves · Del mar',
    categoryEs: 'Conservas · Del mar',
    website: 'https://pujadosolano.com/',
  },
  {
    name: 'Conservas de Cambados',
    category: 'Conserves · Del mar',
    categoryEs: 'Conservas · Del mar',
    website: 'https://www.conservasdecambados.com/',
  },
  {
    name: 'Carretilla',
    category: 'Conserves · Vegetals',
    categoryEs: 'Conservas · Vegetales',
    website: 'https://www.carretilla.info/',
  },
  {
    name: 'Penelas',
    category: 'Conserves · Vegetals',
    categoryEs: 'Conservas · Vegetales',
    website: 'https://aceyvi.es/penelas/',
  },
  {
    name: 'Helios',
    category: 'Conserves · Vegetals',
    categoryEs: 'Conservas · Vegetales',
    website: 'https://www.helios.es/',
  },
  {
    name: 'Faroliva',
    category: 'Conserves · Vegetals',
    categoryEs: 'Conservas · Vegetales',
    website: 'https://faroliva.com/',
  },
  {
    name: 'Sarasa',
    category: 'Conserves · Vegetals',
    categoryEs: 'Conservas · Vegetales',
    website: 'https://www.aceitunassarasa.es/',
  },
  {
    name: 'Discarlux',
    category: 'Carns i embotits',
    categoryEs: 'Carnes y embutidos',
    website: 'https://discarlux.es/',
  },
  {
    name: 'Torrecaza',
    category: 'Carns i embotits',
    categoryEs: 'Carnes y embutidos',
    website: 'https://www.torrecaza.es/',
  },
  {
    name: 'Tamaric · Dispocat',
    category: 'Carns i embotits',
    categoryEs: 'Carnes y embutidos',
    website: 'https://www.dispocat.com/',
  },
  {
    name: 'Ecològica dels Pirineus',
    category: 'Carns i embotits',
    categoryEs: 'Carnes y embutidos',
    website: 'https://www.ecologicadelospirineos.com/',
  },
  {
    name: 'Carns Bastús',
    category: 'Carns i embotits',
    categoryEs: 'Carnes y embutidos',
    website: 'https://carnsbastus.com/',
  },
  {
    name: "Ca d'Antema",
    category: 'Carns i embotits',
    categoryEs: 'Carnes y embutidos',
    website: 'https://www.cadantema.com/',
  },
  {
    name: 'Cal Tomàs',
    category: 'Carns i embotits',
    categoryEs: 'Carnes y embutidos',
    website: 'https://caltomas.cat/',
  },
  { name: 'Frime', category: 'Peix', categoryEs: 'Pescado', website: 'https://www.frime.com/' },
  {
    name: 'Wonder Fish',
    category: 'Peix',
    categoryEs: 'Pescado',
    website: 'https://winnerfish.eu/',
  },
  { name: 'Benfumat', category: 'Peix', categoryEs: 'Pescado', website: 'https://benfumat.com/' },
  {
    name: 'Celler de Capçanes',
    category: 'Celler',
    categoryEs: 'Bodega',
    website: 'https://www.cellercapcanes.com/',
  },
  {
    name: 'Raventós-Basagoiti',
    category: 'Celler',
    categoryEs: 'Bodega',
    website: 'https://raventos-basagoiti.wine/',
  },
  {
    name: 'Celler Batea',
    category: 'Celler',
    categoryEs: 'Bodega',
    website: 'https://www.cellerbatea.com/',
  },
  { name: 'Sumarroca', category: 'Celler', categoryEs: 'Bodega', website: 'https://sumarroca.es/' },
  {
    name: 'Oro de Castilla',
    category: 'Celler',
    categoryEs: 'Bodega',
    website: 'https://www.orodecastilla.com/',
  },
  {
    name: 'Bodegas Valdemar',
    category: 'Celler',
    categoryEs: 'Bodega',
    website: 'https://valdemarfamily.com/',
  },
  {
    name: 'Bodegas Copaboca',
    category: 'Celler',
    categoryEs: 'Bodega',
    website: 'https://copaboca.com/',
  },
  {
    name: 'Bodegas Briego',
    category: 'Celler',
    categoryEs: 'Bodega',
    website: 'https://bodegasbriego.com/',
  },
  {
    name: "Finca Ca N'Estella",
    category: 'Celler',
    categoryEs: 'Bodega',
    website: 'https://www.fincacanestella.com/',
  },
  {
    name: 'Vall de Baldomar',
    category: 'Celler',
    categoryEs: 'Bodega',
    website: 'https://www.valldebaldomar.com/',
  },
  { name: 'Crusat', category: 'Celler', categoryEs: 'Bodega', website: 'https://www.crusat.com/' },
  { name: 'BROT', category: 'Celler', categoryEs: 'Bodega', website: 'https://brot.wine/' },
  {
    name: 'Solana Roivert',
    category: 'Celler',
    categoryEs: 'Bodega',
    website: 'https://sroivert.com/',
  },
  { name: 'Baladin', category: 'Celler', categoryEs: 'Bodega', website: 'https://www.baladin.it/' },
  {
    name: 'Urpina',
    category: 'Celler',
    categoryEs: 'Bodega',
    website: 'https://www.vinsurpina.cat/',
  },
  {
    name: 'Trabanco',
    category: 'Celler',
    categoryEs: 'Bodega',
    website: 'https://www.sidratrabanco.com/',
  },
  {
    name: 'Sarrate',
    category: 'Producte congelat',
    categoryEs: 'Producto congelado',
    website: 'https://chelatssarrate.com/',
  },
  {
    name: 'La Casa de la Pizza',
    category: 'Producte congelat',
    categoryEs: 'Producto congelado',
    website: 'https://lacasadelapizzaartesana.com/',
  },
  {
    name: 'Berlys',
    category: 'Producte congelat',
    categoryEs: 'Producto congelado',
    website: 'https://www.berlys.es/',
  },
  {
    name: 'Cafès Batalla',
    category: 'Cafès, xocolata i dolços',
    categoryEs: 'Cafés, chocolate y dulces',
    website: 'https://cafesbatalla.com/',
  },
  {
    name: "Crit d'Or",
    category: 'Cafès, xocolata i dolços',
    categoryEs: 'Cafés, chocolate y dulces',
    website: 'https://www.critdor.com/',
  },
  {
    name: 'Incapto',
    category: 'Cafès, xocolata i dolços',
    categoryEs: 'Cafés, chocolate y dulces',
    website: 'https://incapto.com/',
  },
  {
    name: 'Pastisseria Cobo',
    category: 'Cafès, xocolata i dolços',
    categoryEs: 'Cafés, chocolate y dulces',
    website: 'https://especialitatscobo.cat/',
  },
  {
    name: 'La Granja',
    category: 'Cafès, xocolata i dolços',
    categoryEs: 'Cafés, chocolate y dulces',
    website: 'https://lagranjafoods.com/',
  },
  {
    name: 'Chocovic',
    category: 'Cafès, xocolata i dolços',
    categoryEs: 'Cafés, chocolate y dulces',
    website: 'https://www.chocovic.com/',
  },
  {
    name: 'Olis Pons',
    category: 'Olis i condiments',
    categoryEs: 'Aceites y condimentos',
    website: 'https://pons.shop/es/',
  },
  {
    name: 'Salsafran',
    category: 'Olis i condiments',
    categoryEs: 'Aceites y condimentos',
    website: 'https://salsafran.es/',
  },
  {
    name: 'Millàs',
    category: 'Olis i condiments',
    categoryEs: 'Aceites y condimentos',
    website: 'https://millas.es/',
  },
  {
    name: 'Choví',
    category: 'Olis i condiments',
    categoryEs: 'Aceites y condimentos',
    website: 'https://www.chovi.com/',
  },
];

export const supplierCategories = [...new Set(suppliers.map((supplier) => supplier.category))];
