// Central registry of all articles
// Import each article from its date folder and export in reverse chronological order

import { article as TheFianna } from './2025-12-08';
import { article as futureTechnology } from './2024-12-04';
import { article as onSimplicity } from './2024-12-01';
import { article as marketsAndMeaning } from './2024-11-28';
import { article as architectureOfAttention } from './2024-11-24';

export type { Article, ArticleImage, ImageLayout } from './types';

// Articles in reverse chronological order (newest first)
export const articles = [
  TheFianna
  futureTechnology,
  onSimplicity,
  marketsAndMeaning,
  architectureOfAttention,
];

/*
=============================================================================
TO ADD A NEW ARTICLE:
=============================================================================

1. Create folder: src/content/articles/YYYY-MM-DD/
2. Add images to the folder
3. Create index.ts with your article data (see types.ts for full documentation)
4. Import here and add to the articles array (at the top for newest)

Example:
  import { article as myNewArticle } from './2024-12-06';
  
  export const articles = [
    myNewArticle,  // <-- Add new articles at the top
    futureTechnology,
    ...
  ];
=============================================================================
*/
