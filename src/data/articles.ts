export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Ritual' | 'Craftsmanship' | 'The Senses';
  readTime: string;
  date: string;
  image: string;
  excerpt: string;
  content: {
    sectionHeading: string;
    paragraphs: string[];
    quote?: string;
  }[];
}

export const ARTICLES: Article[] = [
  {
    id: 'art-of-layering',
    slug: 'the-art-of-layering',
    title: 'The Alchemy of Layering: How to Wear Two Fragrances as One',
    subtitle: 'Moving beyond singular scents into a private bespoke olfactory identity.',
    category: 'Ritual',
    readTime: '4 min read',
    date: 'October 24, 2026',
    image: '/images/editorial/editorial-layering.jpg',
    excerpt: 'True luxury lies in individuality. Discover how marrying resinous ambers with crystalline florals creates a scent silhouette entirely your own.',
    content: [
      {
        sectionHeading: 'The Architecture of Olfaction',
        paragraphs: [
          'Fragrance layering is not merely spraying two bottles in succession; it is architectural balance. The human sense of smell detects weight and evaporation rate before it discerns isolated notes.',
          'Always anchor your foundation with heavy molecular weights: resins, smoky ouds, or dense cedarwoods like Velours de Nuit. Allow this base to settle into the pulse points for three minutes before misting your lighter, volatile crown.',
        ],
        quote: 'Fragrance is the most intimate garment you wear—invisible, yet the first thing remembered and the last forgotten.',
      },
      {
        sectionHeading: 'Harmonies vs. Contrasts',
        paragraphs: [
          'The most compelling pairings operate on tension. Consider layering our smoky incense in Fumée Sacrée beneath the sparkling white petals of Éclat Doré. The result is golden sunshine piercing through monastery incense—an unforgettable paradox.',
          'Apply the heavier perfume to warm, vascular regions—the nape of the neck and chest. Mist the lighter formulation across fabrics, hair, and wrists to create a dimensional sillage trail.',
        ],
      },
    ],
  },
  {
    id: 'midnight-in-grasse',
    slug: 'midnight-in-grasse',
    title: 'A Midnight Walk Through Grasse: Where Fragrance Begins',
    subtitle: 'Behind the locked iron gates of southern France’s most revered jasmine harvests.',
    category: 'Craftsmanship',
    readTime: '6 min read',
    date: 'November 2, 2026',
    image: '/images/editorial/editorial-grasse.jpg',
    excerpt: 'At 3:00 AM in the foothills of Provence, before the sun burns away the essential oils, silent hands harvest the delicate blossoms of Jasminum grandiflorum.',
    content: [
      {
        sectionHeading: 'The Sacred 3 AM Window',
        paragraphs: [
          'Jasmine blossoms are jealous of the sun. The moment daylight touches their star-shaped petals, nearly forty percent of their precious indole and volatile compounds dissipate into the morning breeze.',
          'At Maison Noir, our master extractors work strictly under the cover of night. By dawn, hundreds of thousands of hand-picked blossoms arrive at our cold maceration vats.',
        ],
        quote: 'In Grasse, time is not measured in seconds, but in the fleeting respiration of a bloom.',
      },
      {
        sectionHeading: 'Purity Without Modern Compromise',
        paragraphs: [
          'While commercial perfumery shifted to synthetic reproductions decades ago, our extractors preserve ancestral methods of supercritical CO2 distillation, preserving the living soul of the botanical specimen.',
        ],
      },
    ],
  },
  {
    id: 'winter-rituals',
    slug: 'winter-rituals',
    title: 'Winter Rituals: Scents That Embrace the Cold',
    subtitle: 'Why low temperatures alter molecular projection and how to command cold air.',
    category: 'The Senses',
    readTime: '5 min read',
    date: 'November 10, 2026',
    image: '/images/editorial/editorial-winter.jpg',
    excerpt: 'Cold winter air contracts fragrance molecules, dulling light citrus notes. Explore our curation of high-concentration extraits designed to bloom in crisp weather.',
    content: [
      {
        sectionHeading: 'Thermodynamics of Scent',
        paragraphs: [
          'In sub-zero temperatures, standard Eau de Toilettes can collapse, losing their sillage within minutes. Winter demands high-viscosity resins, aged ambers, and parfum extraits possessing over 30% fragrance concentration.',
          'A drop of Le Dernier Mot on a cashmere scarf will endure for weeks, unfurling in warming waves every time you enter a firelit hearth.',
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
