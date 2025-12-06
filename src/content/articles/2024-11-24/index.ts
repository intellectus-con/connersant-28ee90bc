import type { Article } from '../types';

// Sidebar layout example - image floated to the side of text
// Good for portraits, diagrams, or supplementary visuals

export const article: Article = {
  slug: 'the-architecture-of-attention',
  title: 'The Architecture of Attention',
  subheader: 'How our environments shape what we notice',
  date: 'NOV 24',
  dateISO: '2024-11-24',
  category: 'Culture',
  
  imageLayout: 'sidebar',
  sidebarImage: {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=533&fit=crop',
    alt: 'Person in contemplative focus representing attention',
    caption: 'Attention constructs our reality',
    credit: 'Photo by Ayo Ogunseinde'
  },
  
  body: `
    <p>Attention is not merely a resource to be spent. It is a lens through which we construct reality. What we attend to becomes our world.</p>
    
    <p>The architects of our digital environments understand this. Every notification, every infinite scroll, every variable reward is designed to capture and hold attention. The question is: toward what end?</p>
    
    <h2>Designed Distraction</h2>
    
    <p>We now live in environments optimized for engagement rather than wellbeing. The result is a kind of attentional poverty amid informational abundance.</p>
    
    <p>We have access to more knowledge than any generation in history, yet find ourselves unable to think deeply about any of it.</p>
    
    <h2>Reclaiming Focus</h2>
    
    <p>The ability to direct our own attention may be the most important skill of the coming decades. It will require intentional design—of our tools, our spaces, and our habits.</p>
    
    <p>The first step is recognizing that our attention is being architected. The second is deciding to become the architects ourselves.</p>
  `,
};
