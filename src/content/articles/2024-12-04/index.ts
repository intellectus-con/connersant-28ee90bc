import type { Article } from '../types';

// Hero layout example - 16:9 wide image at top
// To add your own image: import heroImg from './your-image.jpg';

export const article: Article = {
  slug: 'the-future-of-technology',
  title: 'The Future of Technology Is Quieter Than You Think',
  subheader: 'Why the next decade will be defined by invisible innovation',
  date: 'DEC 4',
  dateISO: '2024-12-04',
  category: 'Technology',
  
  thumbnail: {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    alt: 'Abstract technology circuits'
  },
  
  imageLayout: 'hero',
  heroImage: {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=675&fit=crop',
    alt: 'Abstract technology circuits representing invisible innovation',
    caption: 'The most profound technologies disappear into everyday life',
    credit: 'Photo by Alexandre Debiève'
  },
  
  body: `
    <p>The most profound technologies are those that disappear. They weave themselves into the fabric of everyday life until they are indistinguishable from it.</p>
    
    <p>Consider how electricity transformed society not through its novelty, but through its ubiquity. We don't think about electricity; we think about what it enables. The same transformation is happening now with computation.</p>
    
    <h2>The Invisible Revolution</h2>
    
    <p>For decades, technology announced itself loudly. New devices demanded our attention, new interfaces required our learning. But the next wave of innovation will be different. It will be ambient, contextual, and largely invisible.</p>
    
    <p>Sensors embedded in our environments will anticipate our needs. Algorithms will handle complexity we never knew existed. The interface will become conversation, gesture, and eventually thought.</p>
    
    <h2>What This Means</h2>
    
    <p>The companies that will define the next era won't be those building the loudest products. They'll be the ones solving problems so elegantly that users forget they ever had them.</p>
    
    <p>This shift has profound implications for design, for business models, and for how we measure success. Engagement metrics become meaningless when the goal is to require no engagement at all.</p>
  `,
};
