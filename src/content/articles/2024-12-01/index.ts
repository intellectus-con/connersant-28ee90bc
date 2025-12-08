import type { Article } from '../types';

// Inline images example - images placed within the body text
// Use {{image:0}}, {{image:1}}, etc. in body to place images

export const article: Article = {
  slug: 'on-simplicity',
  title: 'On Simplicity',
  subheader: 'The hardest thing to achieve in design and in life',
  date: 'DEC 1',
  dateISO: '2024-12-01',
  category: 'Design',
  
  thumbnail: {
    src: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=400&h=300&fit=crop',
    alt: 'Minimal zen garden representing simplicity in design'
  },
  
  imageLayout: 'inline',
  inlineImages: [
    {
      src: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&h=600&fit=crop',
      alt: 'Minimal zen garden representing simplicity in design',
      caption: 'True simplicity emerges from resolved complexity'
    },
    {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=533&fit=crop',
      alt: 'Clean architectural lines showing design discipline',
      caption: 'The discipline of subtraction'
    }
  ],
  
  body: `
    <p>Simplicity is not the absence of complexity. It is complexity resolved, distilled to its essence. The simple solution is almost always the one that required the most thought.</p>
    
    <p>We confuse simplicity with ease. But ease is what we give to others; simplicity is what we achieve through rigor. The blank page is easy. The right words are simple.</p>
    
    {{image:0}}
    
    <h2>The Discipline of Subtraction</h2>
    
    <p>Every element you add to a design, a system, or a life demands attention. It creates relationships, dependencies, maintenance. The discipline of simplicity is the discipline of subtraction.</p>
    
    <p>Ask not "what can I add?" but "what can I remove?" The answer will improve almost anything.</p>
    
    {{image:1}}
    
    <h2>Why It Matters Now</h2>
    
    <p>In an age of abundance—of information, of options, of noise—simplicity becomes precious. The companies, products, and ideas that will endure are those that respect our finite attention.</p>
    
    <p>Simplicity is not a style. It is a strategy for survival.</p>
  `,
};
