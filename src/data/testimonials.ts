export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  product: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Aishwarya M.',
    location: 'South Mumbai',
    quote: 'Noir Absolu is completely intoxicating. I have worn high-end niche perfumes from Paris and London for fifteen years, yet nothing commands a room quite like this. People stop me in art galleries just to ask what I am wearing.',
    product: 'Noir Absolu (Eau de Parfum)',
    rating: 5,
  },
  {
    id: 't-2',
    name: 'Vikramaditya S.',
    location: 'Lutyens Delhi',
    quote: 'Le Dernier Mot represents the pinnacle of oud extraction. The balance between 25-year-aged Cambodian agarwood and saddle leather is flawless—monumental projection without ever turning harsh.',
    product: 'Le Dernier Mot (Parfum Extrait)',
    rating: 5,
  },
  {
    id: 't-3',
    name: 'Eleanor Vance',
    location: 'London & Dubai',
    quote: 'Velours de Nuit feels like putting on an bespoke black tuxedo. The Florentine orris root gives it a creamy, velvet texture that lingers on my lapel long after the evening has drawn to a close.',
    product: 'Velours de Nuit (Eau de Parfum)',
    rating: 5,
  },
  {
    id: 't-4',
    name: 'Tara K.',
    location: 'Bengaluru',
    quote: 'Fumée Sacrée transported me to a rain-soaked temple courtyard. The kyara incense notes are hauntingly beautiful and evoke a meditative calm I have never experienced in contemporary perfumery.',
    product: 'Fumée Sacrée (Eau de Parfum)',
    rating: 5,
  },
];
