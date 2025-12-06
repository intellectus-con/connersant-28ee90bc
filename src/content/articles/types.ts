// Article type definitions with image support
// Each article can have different image configurations

export type ImageLayout = 
  | 'hero'           // Full-width hero image at top
  | 'hero-split'     // Hero with text overlay
  | 'inline'         // Images within body text
  | 'gallery'        // Grid of images
  | 'sidebar'        // Image floated to side
  | 'none';          // No images

export interface ArticleImage {
  src: string;       // Import the image: import heroImg from './hero.jpg'
  alt: string;
  caption?: string;
  credit?: string;
}

export interface Article {
  slug: string;
  title: string;
  subheader: string;
  date: string;           // Display date (e.g., "DEC 4")
  dateISO: string;        // ISO date for sorting (e.g., "2024-12-04")
  category: string;
  
  // Image configuration
  imageLayout: ImageLayout;
  heroImage?: ArticleImage;           // For 'hero' and 'hero-split' layouts
  inlineImages?: ArticleImage[];      // For 'inline' layout - referenced in body as {{image:0}}, {{image:1}}
  galleryImages?: ArticleImage[];     // For 'gallery' layout
  sidebarImage?: ArticleImage;        // For 'sidebar' layout
  
  body: string;  // HTML content, use {{image:N}} for inline image placeholders
}

/*
=============================================================================
HOW TO ADD A NEW ARTICLE WITH IMAGES
=============================================================================

1. Create a folder for your article date:
   src/content/articles/YYYY-MM-DD/

2. Add your images to the folder:
   src/content/articles/YYYY-MM-DD/hero.jpg
   src/content/articles/YYYY-MM-DD/inline-1.jpg
   etc.

3. Create index.ts in the folder:

   import type { Article } from '../types';
   import heroImage from './hero.jpg';
   import inlineImage1 from './diagram.png';

   export const article: Article = {
     slug: 'my-article-slug',
     title: 'My Article Title',
     subheader: 'A compelling subheader',
     date: 'DEC 6',
     dateISO: '2024-12-06',
     category: 'Technology',
     
     // Choose ONE image layout:
     imageLayout: 'hero',  // Options: 'hero', 'hero-split', 'inline', 'gallery', 'sidebar', 'none'
     
     // For 'hero' or 'hero-split':
     heroImage: {
       src: heroImage,
       alt: 'Description of image',
       caption: 'Optional caption',
       credit: 'Photo by Someone'
     },
     
     // For 'inline' - use {{image:0}}, {{image:1}} in body:
     inlineImages: [
       { src: inlineImage1, alt: 'First inline image' },
     ],
     
     body: `
       <p>Your article content here...</p>
       {{image:0}}
       <p>More content after the image...</p>
     `
   };

4. Register in src/content/articles/index.ts:
   
   import { article as myNewArticle } from './2024-12-06';
   export const articles = [myNewArticle, ...otherArticles];

=============================================================================
IMAGE ASPECT RATIO GUIDELINES
=============================================================================

- Hero images: 16:9 or 21:9 (wide cinematic)
- Inline images: 4:3 or 16:9 (standard)
- Gallery images: 1:1 or 4:3 (square or slightly wide)
- Sidebar images: 3:4 or 1:1 (portrait or square)

=============================================================================
*/
