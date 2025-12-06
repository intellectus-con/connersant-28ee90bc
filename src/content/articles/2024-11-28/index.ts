import type { Article } from '../types';

// Gallery layout example - grid of images displayed together
// Good for photo essays or visual comparisons

export const article: Article = {
  slug: 'markets-and-meaning',
  title: 'Markets and Meaning',
  subheader: 'The economy cannot tell us what matters',
  date: 'NOV 28',
  dateISO: '2024-11-28',
  category: 'Economics',
  
  imageLayout: 'gallery',
  galleryImages: [
    {
      src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=600&fit=crop',
      alt: 'Stock market trading floor',
      caption: 'Markets aggregate information'
    },
    {
      src: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=600&fit=crop',
      alt: 'Human connection and handshake',
      caption: 'Connection resists quantification'
    },
    {
      src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop',
      alt: 'Data analytics dashboard',
      caption: 'Optimization has limits'
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      alt: 'Mountain landscape representing meaning',
      caption: 'Beyond economics'
    }
  ],
  
  body: `
    <p>Markets are extraordinary mechanisms for aggregating information and allocating resources. They are not, however, mechanisms for determining value in any deeper sense.</p>
    
    <p>The price of a thing tells us about scarcity and demand. It tells us nothing about importance, beauty, or worth. This confusion—between price and value—underlies much of our collective unease.</p>
    
    <h2>The Limits of Optimization</h2>
    
    <p>When we optimize for metrics, we often optimize for the wrong things. Engagement is not happiness. Growth is not progress. Efficiency is not purpose.</p>
    
    <p>The market will reward whatever it is calibrated to measure. The question is what we choose to measure.</p>
    
    <h2>Beyond Economics</h2>
    
    <p>The most important things in life—connection, meaning, beauty, love—resist quantification. They exist in a realm that economics cannot reach.</p>
    
    <p>This is not an argument against markets. It is an argument for recognizing their boundaries. We need markets. We also need the wisdom to know where they end.</p>
  `,
};
