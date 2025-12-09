import type { Article } from '../types';
import meta from './meta.json';
import contentHtml from './content.html?raw';
import heroImage from './celtsangus.jpeg';
import leftImage from './fianngoil.jpg';
import rightImage from './pillarstone.jpg';
import celtsMap from './celtsBC.jpeg';
import finalImage from './gaelicwig.jpeg';

// Replace image placeholders with actual imported paths
const processedContent = contentHtml
  .replace('{{leftImage}}', leftImage)
  .replace('{{rightImage}}', rightImage)
  .replace('{{celtsMap}}', celtsMap)
  .replace('{{finalImage}}', finalImage);

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
  body: processedContent,
} as Article;
