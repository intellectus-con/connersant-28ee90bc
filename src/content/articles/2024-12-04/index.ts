import type { Article } from '../types';
import meta from './meta.json';
import contentHtml from './content.html?raw';

export const article: Article = {
  ...meta,
  body: contentHtml,
} as Article;
