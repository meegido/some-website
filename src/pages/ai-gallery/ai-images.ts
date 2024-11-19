export type ImagesInfo = {
  id: string;
  url: string;
  tags: string[];
};

const AI_IMAGES: ImagesInfo[] = [
  {
    id: 'image-1',
    url: new URL('../../assets/images/ai-images/estatues-2.png', import.meta.url).href,
    tags: ['statue', 'buildings', 'clouds'],
  },
  {
    id: 'image-2',
    url: new URL('../../assets/images/ai-images/elephant-2.png', import.meta.url).href,
    tags: ['elephant'],
  },
  {
    id: 'image-3',
    url: new URL('../../assets/images/ai-images/girl-2.png', import.meta.url).href,
    tags: ['girl', 'clouds'],
  },
  {
    id: 'image-4',
    url: new URL('../../assets/images/ai-images/utopia-4.png', import.meta.url).href,
    tags: ['circuits', 'girl', 'road'],
  },
  {
    id: 'image-5',
    url: new URL('../../assets/images/ai-images/estatues.png', import.meta.url).href,
    tags: ['statue', 'buildings', 'clouds'],
  },
  {
    id: 'image-6',
    url: new URL('../../assets/images/ai-images/girl-3.png', import.meta.url).href,
    tags: ['people', 'girl', 'clouds'],
  },
  {
    id: 'image-7',
    url: new URL('../../assets/images/ai-images/elephant.png', import.meta.url).href,
    tags: ['elephant', 'cicuits'],
  },
  {
    id: 'image-8',
    url: new URL('../../assets/images/ai-images/no-girl-2.png', import.meta.url).href,
    tags: ['clouds', 'buildings', 'nature'],
  },
  {
    id: 'image-9',
    url: new URL('../../assets/images/ai-images/cat-4-1.png', import.meta.url).href,
    tags: ['cat'],
  },
  {
    id: 'image-10',
    url: new URL('../../assets/images/ai-images/utopia-1.png', import.meta.url).href,
    tags: ['statue', 'buildings', 'clouds', 'road'],
  },
  {
    id: 'image-11',
    url: new URL('../../assets/images/ai-images/cat-3.png', import.meta.url).href,
    tags: ['cat'],
  },
  {
    id: 'image-12',
    url: new URL('../../assets/images/ai-images/utopia-3.png', import.meta.url).href,
    tags: ['people', 'buildings', 'clouds', 'road'],
  },
  {
    id: 'image-13',
    url: new URL('../../assets/images/ai-images/utopia.png', import.meta.url).href,
    tags: ['people', 'buildings', 'clouds', 'nature'],
  },
];

export default AI_IMAGES;
