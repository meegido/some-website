type ImageData = {
  id: string;
  url: string;
  tags: string[];
};

const AI_IMAGES: ImageData[] = [
  {
    id: 'image-1',
    url: new URL('../../assets/images/ai-images/estatues-2.png', import.meta.url).href,
    tags: ['statue 🗿', 'buildings 🏰'],
  },
  {
    id: 'image-2',
    url: new URL('../../assets/images/ai-images/elephant-2.png', import.meta.url).href,
    tags: ['elephant 🐘'],
  },
  {
    id: 'image-3',
    url: new URL('../../assets/images/ai-images/girl-2.png', import.meta.url).href,
    tags: ['girl 🐘'],
  },
  {
    id: 'image-4',
    url: new URL('../../assets/images/ai-images/utopia-4.png', import.meta.url).href,
    tags: ['utopia 🐘'],
  },
  {
    id: 'image-5',
    url: new URL('../../assets/images/ai-images/estatues.png', import.meta.url).href,
    tags: ['statues 🐘'],
  },
  {
    id: 'image-6',
    url: new URL('../../assets/images/ai-images/girl-3.png', import.meta.url).href,
    tags: ['statues 🐘'],
  },
  {
    id: 'image-7',
    url: new URL('../../assets/images/ai-images/elephant.png', import.meta.url).href,
    tags: ['statues 🐘'],
  },
  {
    id: 'image-8',
    url: new URL('../../assets/images/ai-images/no-girl-2.png', import.meta.url).href,
    tags: ['girl 🐘'],
  },
  {
    id: 'image-9',
    url: new URL('../../assets/images/ai-images/cat-4-1.png', import.meta.url).href,
    tags: ['girl 🐘'],
  },
  {
    id: 'image-10',
    url: new URL('../../assets/images/ai-images/utopia-1.png', import.meta.url).href,
    tags: ['girl 🐘'],
  },
  {
    id: 'image-11',
    url: new URL('../../assets/images/ai-images/cat-3.png', import.meta.url).href,
    tags: ['girl 🐘'],
  },
  {
    id: 'image-12',
    url: new URL('../../assets/images/ai-images/utopia-3.png', import.meta.url).href,
    tags: ['girl 🐘'],
  },
  {
    id: 'image-13',
    url: new URL('../../assets/images/ai-images/utopia.png', import.meta.url).href,
    tags: ['girl 🐘'],
  },
];

export default AI_IMAGES;
