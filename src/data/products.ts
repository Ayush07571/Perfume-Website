export type VolumeOption = '30ml' | '50ml' | '100ml';

export interface ScentNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: 'Eau de Parfum' | 'Eau de Toilette' | 'Parfum Extrait';
  family: 'Oriental' | 'Woody' | 'Floral' | 'Smoky-Oriental' | 'Fresh-Floral' | 'Spicy-Woody' | 'Green-Floral' | 'Leather-Oud';
  prices: Record<VolumeOption, number>;
  defaultVolume: VolumeOption;
  rating: number;
  reviewCount: number;
  featured: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  description: string;
  story: string;
  intensity: 'Subtle' | 'Moderate' | 'Intense' | 'Very Intense';
  longevity: string;
  sillage: string;
  notes: ScentNotes;
  ingredients: { name: string; origin: string; note: string }[];
  images: {
    main: string;
    detail: string;
    lifestyle: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: 'noir-absolu',
    slug: 'noir-absolu',
    name: 'Noir Absolu',
    tagline: 'The darkness between stars',
    category: 'Eau de Parfum',
    family: 'Oriental',
    prices: {
      '30ml': 5900,
      '50ml': 8500,
      '100ml': 12800,
    },
    defaultVolume: '50ml',
    rating: 4.9,
    reviewCount: 128,
    featured: true,
    isBestSeller: true,
    intensity: 'Very Intense',
    longevity: '12+ Hours',
    sillage: 'Heavy & Enveloping',
    description: 'An intoxicating descent into deep obsidian night. Rare black amber fuses with crushed Madagascar vanilla orchid and midnight oud to craft an aura of profound mystery and magnetic allure.',
    story: 'Forged in the quiet twilight of our Grasse laboratory, Noir Absolu was born of an obsession with the invisible presence one leaves behind in an empty velvet room.',
    notes: {
      top: ['Black Pepper of Tellicherry', 'Calabrian Bergamot', 'Spiced Plum'],
      heart: ['Midnight Damascus Rose', 'Wild Saffron', 'Indonesian Oud'],
      base: ['Black Amber Resin', 'Bourbon Vanilla Bean', 'Smoked Sandalwood'],
    },
    ingredients: [
      { name: 'Tellicherry Black Pepper', origin: 'Malabar Coast, India', note: 'Top' },
      { name: 'Damascus Rose Absolute', origin: 'Kazanlak Valley, Bulgaria', note: 'Heart' },
      { name: 'Black Amber Resin', origin: 'Baltic Coast', note: 'Base' },
      { name: 'Indonesian Wild Oud', origin: 'Kalimantan', note: 'Heart' },
    ],
    images: {
      main: '/images/products/noir-absolu-main.jpg',
      detail: '/images/products/noir-absolu-detail.jpg',
      lifestyle: '/images/hero/hero-bottle.jpg',
    },
  },
  {
    id: 'velours-de-nuit',
    slug: 'velours-de-nuit',
    name: 'Velours de Nuit',
    tagline: 'Midnight wrapped in velvet',
    category: 'Eau de Parfum',
    family: 'Woody',
    prices: {
      '30ml': 6400,
      '50ml': 9200,
      '100ml': 13900,
    },
    defaultVolume: '50ml',
    rating: 4.8,
    reviewCount: 94,
    featured: true,
    intensity: 'Intense',
    longevity: '10–12 Hours',
    sillage: 'Pronounced & Silky',
    description: 'Sensual warmth that caresses the skin like tailored black velvet. Rich Atlas cedar and velvety orris root harmonize with aged patchouli and golden frankincense.',
    story: 'Conceived during an autumn midnight walk through the ancient pine forests of Fontainebleau, captured just as the first cold dew settled upon resinous cedar bark.',
    notes: {
      top: ['Cardamom Pods', 'Bitter Orange Peel', 'Nutmeg Flower'],
      heart: ['Florentine Orris Root', 'Atlas Cedarwood', 'French Clary Sage'],
      base: ['Java Patchouli', 'Dark Frankincense', 'Smoked Oakmoss'],
    },
    ingredients: [
      { name: 'Florentine Orris Root', origin: 'Tuscany, Italy', note: 'Heart' },
      { name: 'Atlas Cedarwood', origin: 'Morocco', note: 'Heart' },
      { name: 'Dark Frankincense', origin: 'Dhofar, Oman', note: 'Base' },
    ],
    images: {
      main: '/images/products/velours-de-nuit-main.jpg',
      detail: '/images/products/velours-de-nuit-detail.jpg',
      lifestyle: '/images/about/atelier-craft.jpg',
    },
  },
  {
    id: 'eclat-dore',
    slug: 'eclat-dore',
    name: 'Éclat Doré',
    tagline: 'Golden light on bare skin',
    category: 'Eau de Parfum',
    family: 'Floral',
    prices: {
      '30ml': 5400,
      '50ml': 7800,
      '100ml': 11800,
    },
    defaultVolume: '50ml',
    rating: 4.9,
    reviewCount: 112,
    featured: true,
    intensity: 'Moderate',
    longevity: '8–10 Hours',
    sillage: 'Luminous & Elegant',
    description: 'A luminous, sun-drenched ode to radiant florals. White jasmine grandiflorum bathed in honeyed neroli, sparkling Sicilian mandarin, and sensual cashmeran.',
    story: 'Inspired by the late afternoon sun spilling across limestone balustrades in Cannes, illuminating the golden dust motes in suspension.',
    notes: {
      top: ['Sicilian Mandarin', 'Solar Aldehydes', 'Petitgrain Citronnier'],
      heart: ['Grasse Jasmine Grandiflorum', 'Tunisian Neroli', 'Ylang-Ylang Extra'],
      base: ['White Amber', 'Cashmeran Wood', 'Solar Musk'],
    },
    ingredients: [
      { name: 'Jasmine Grandiflorum', origin: 'Grasse, France', note: 'Heart' },
      { name: 'Tunisian Neroli', origin: 'Nabeul, Tunisia', note: 'Heart' },
      { name: 'Sicilian Mandarin', origin: 'Palermo, Italy', note: 'Top' },
    ],
    images: {
      main: '/images/products/eclat-dore-main.jpg',
      detail: '/images/products/eclat-dore-detail.jpg',
      lifestyle: '/images/ingredients/amber-resin.jpg',
    },
  },
  {
    id: 'fumee-sacree',
    slug: 'fumee-sacree',
    name: 'Fumée Sacrée',
    tagline: 'Sacred smoke, ancient temples',
    category: 'Eau de Parfum',
    family: 'Smoky-Oriental',
    prices: {
      '30ml': 7200,
      '50ml': 10500,
      '100ml': 15800,
    },
    defaultVolume: '50ml',
    rating: 5.0,
    reviewCount: 86,
    featured: true,
    isNew: true,
    intensity: 'Very Intense',
    longevity: '14+ Hours',
    sillage: 'Monolithic & Hypnotic',
    description: 'Wisps of ceremonial kyara incense winding through charred birchwood and sacred labdanum. A transcendent meditative experience in a single drop.',
    story: 'Crafted as a tribute to ancient Kyoto temple rituals, where fragrant woods have burned unbroken for over eight centuries.',
    notes: {
      top: ['Coriander Seed', 'Elemi Gum', 'Smoked Birch Bark'],
      heart: ['Kyara Incense', 'Somalian Myrrh', 'Cistus Labdanum'],
      base: ['Charred Guaiacwood', 'Castoreum Accord', 'Black Leather Resin'],
    },
    ingredients: [
      { name: 'Somalian Myrrh', origin: 'Puntland, Somalia', note: 'Heart' },
      { name: 'Cistus Labdanum', origin: 'Andalusia, Spain', note: 'Heart' },
      { name: 'Guaiacwood', origin: 'Gran Chaco, Paraguay', note: 'Base' },
    ],
    images: {
      main: '/images/products/fumee-sacree-main.jpg',
      detail: '/images/products/fumee-sacree-detail.jpg',
      lifestyle: '/images/ingredients/agarwood.jpg',
    },
  },
  {
    id: 'peau-de-soie',
    slug: 'peau-de-soie',
    name: 'Peau de Soie',
    tagline: 'The scent of silk at dawn',
    category: 'Eau de Toilette',
    family: 'Fresh-Floral',
    prices: {
      '30ml': 4300,
      '50ml': 6200,
      '100ml': 9400,
    },
    defaultVolume: '50ml',
    rating: 4.7,
    reviewCount: 79,
    featured: false,
    intensity: 'Subtle',
    longevity: '6–8 Hours',
    sillage: 'Intimate & Whisper-Soft',
    description: 'The clean, delicate whisper of pristine white silk sliding across freshly cleansed skin. White tea leaves, dewy peony petals, and skin musks.',
    story: 'Formulated to be the ultimate quiet luxury perfume—noticed not across the banquet, but when leaned in close for a secret.',
    notes: {
      top: ['Silver Needle White Tea', 'Morning Dew Accord', 'Pink Grapefruit'],
      heart: ['White Peony', 'Water Lily', 'Frosted Freesia'],
      base: ['Clean Linen Musk', 'Ambrette Seed', 'White Cedar'],
    },
    ingredients: [
      { name: 'Silver Needle Tea', origin: 'Fujian, China', note: 'Top' },
      { name: 'Ambrette Seed', origin: 'Martinique', note: 'Base' },
      { name: 'White Peony', origin: 'Loire Valley, France', note: 'Heart' },
    ],
    images: {
      main: '/images/products/peau-de-soie-main.jpg',
      detail: '/images/products/peau-de-soie-detail.jpg',
      lifestyle: '/images/editorial/editorial-layering.jpg',
    },
  },
  {
    id: 'ombre-rouge',
    slug: 'ombre-rouge',
    name: 'Ombre Rouge',
    tagline: 'A shadow dipped in crimson',
    category: 'Eau de Parfum',
    family: 'Spicy-Woody',
    prices: {
      '30ml': 6100,
      '50ml': 8900,
      '100ml': 13400,
    },
    defaultVolume: '50ml',
    rating: 4.8,
    reviewCount: 91,
    featured: false,
    intensity: 'Intense',
    longevity: '10–12 Hours',
    sillage: 'Magnetic & Provocative',
    description: 'Crimson pomegranate and ruby saffron ignite against a smoldering backdrop of dark Virginia cedar and clove-infused leather.',
    story: 'Inspired by the dim-lit red velvet interiors of opera boxes in Vienna and the electric tension before the curtain rises.',
    notes: {
      top: ['Blood Orange', 'Ruby Pomegranate', 'Persian Saffron'],
      heart: ['Clove Bud', 'Black Cherry Absolute', 'Centifolia Rose'],
      base: ['Virginia Cedar', 'Dark Leather Accord', 'Benzoin Siam'],
    },
    ingredients: [
      { name: 'Persian Saffron', origin: 'Khorasan, Iran', note: 'Top' },
      { name: 'Benzoin Siam', origin: 'Luang Prabang, Laos', note: 'Base' },
      { name: 'Virginia Cedar', origin: 'Virginia, USA', note: 'Base' },
    ],
    images: {
      main: '/images/products/ombre-rouge-main.jpg',
      detail: '/images/products/ombre-rouge-detail.jpg',
      lifestyle: '/images/hero/hero-bottle.jpg',
    },
  },
  {
    id: 'jardin-interdit',
    slug: 'jardin-interdit',
    name: 'Jardin Interdit',
    tagline: 'The garden no one speaks of',
    category: 'Eau de Toilette',
    family: 'Green-Floral',
    prices: {
      '30ml': 4700,
      '50ml': 6800,
      '100ml': 10200,
    },
    defaultVolume: '50ml',
    rating: 4.9,
    reviewCount: 63,
    featured: false,
    intensity: 'Moderate',
    longevity: '7–9 Hours',
    sillage: 'Crisp & Intriguing',
    description: 'Crushed fig leaves, damp ivy, and blooming night angelica. A green, slightly forbidden oasis hidden behind centuries of mossy iron gates.',
    story: 'Discovered in a forgotten walled garden behind a private monastery in Provence, overrun with wild herbs and night-blooming botanicals.',
    notes: {
      top: ['Crushed Fig Leaves', 'Green Galbanum', 'Bitter Angelica Root'],
      heart: ['Night Angelica', 'Wild Violet Leaf', 'Ivy Vine Accord'],
      base: ['Vetiver of Haiti', 'Damp Moss', 'Clean Earth Accord'],
    },
    ingredients: [
      { name: 'Green Galbanum', origin: 'Zagros Mountains, Iran', note: 'Top' },
      { name: 'Haitian Vetiver', origin: 'Les Cayes, Haiti', note: 'Base' },
      { name: 'Night Angelica', origin: 'Normandy, France', note: 'Heart' },
    ],
    images: {
      main: '/images/products/jardin-interdit-main.jpg',
      detail: '/images/products/jardin-interdit-detail.jpg',
      lifestyle: '/images/ingredients/jasmine-harvest.jpg',
    },
  },
  {
    id: 'le-dernier-mot',
    slug: 'le-dernier-mot',
    name: 'Le Dernier Mot',
    tagline: 'The final word. Unforgettable.',
    category: 'Parfum Extrait',
    family: 'Leather-Oud',
    prices: {
      '30ml': 9800,
      '50ml': 14500,
      '100ml': 21500,
    },
    defaultVolume: '50ml',
    rating: 5.0,
    reviewCount: 147,
    featured: true,
    isBestSeller: true,
    intensity: 'Very Intense',
    longevity: '18+ Hours',
    sillage: 'Monumental',
    description: 'The pinnacle of our craft. 35% pure fragrance oil concentration. Rare aged Cambodian agarwood married with saddle leather, vintage cognac, and dark ambergris.',
    story: 'Formulated with no compromise on raw materials, bottled in heavy Italian hand-polished smoked glass with an engraved gold metal cap.',
    notes: {
      top: ['Vintage Cognac', 'Davana Blossom', 'Black Truffle Accord'],
      heart: ['Cambodian Wild Agarwood (Aged 25 Yrs)', 'Saddle Leather', 'Castoreum'],
      base: ['Natural Grey Ambergris', 'Smoked Birch Tar', 'Precious Musk'],
    },
    ingredients: [
      { name: 'Aged Cambodian Agarwood', origin: 'Koh Kong, Cambodia', note: 'Heart' },
      { name: 'Grey Ambergris', origin: 'New Zealand Flotsam', note: 'Base' },
      { name: 'Fine Fine Cognac Distillate', origin: 'Charente, France', note: 'Top' },
    ],
    images: {
      main: '/images/products/le-dernier-mot-main.jpg',
      detail: '/images/products/le-dernier-mot-detail.jpg',
      lifestyle: '/images/hero/hero-bottle.jpg',
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}
