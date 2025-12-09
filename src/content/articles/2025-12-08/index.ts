import type { Article } from '../types';
import meta from './meta.json';
import contentHtml from './content.html?raw';
import heroImage from './celtsangus.jpeg';

export const article: Article = {
  ...meta,
  thumbnail: {
    src: heroImage,
    alt: meta.thumbnail?.alt || "Celts by Angus McBride",
  },
  heroImage: {
    src: heroImage,
    alt: meta.heroImage?.alt || "Celts by Angus McBride",
    caption: meta.heroImage?.caption,
    credit: meta.heroImage?.credit,
  },
  body: contentHtml,
} as Article;
