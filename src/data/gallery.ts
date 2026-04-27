export interface GalleryItem {
  src: string
  description: string
}

const gallery: GalleryItem[] = [
  {
    src: '/static/images/chefchaouen.jpg',
    description: 'Amid the echo of chants, one house wears a different blue (Chefchaouen).',
  },
  {
    src: '/static/images/fisherman-trail.jpg',
    description: "Carved by wind and memory (Fisherman's Trail).",
  },
  {
    src: '/static/images/prague-playground.jpg',
    description: 'People enjoy an ordinary day at a playground (Prague).',
  },
  {
    src: '/static/images/vienna-metro.jpg',
    description: 'I may be waiting for something that will never come (Vienna).',
  },
]

export default gallery
