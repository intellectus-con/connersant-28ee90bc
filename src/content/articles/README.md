# How to Add a New Article

## Quick Start

1. **Create a folder** with the date: `YYYY-MM-DD/`
2. **Add two files:**
   - `content.html` — Your article body (just HTML paragraphs, headers, etc.)
   - `meta.json` — Title, date, category, and image info
3. **Register it** in `index.ts`

## Folder Structure

```
src/content/articles/
├── 2024-12-04/
│   ├── content.html    ← Your article text
│   ├── meta.json       ← Metadata & image config
│   └── hero.jpg        ← Optional local image
├── 2024-12-01/
│   └── ...
└── index.ts            ← Register articles here
```

## content.html Example

Just write normal HTML. No React, no imports, no complexity:

```html
<p>First paragraph of your article.</p>

<p>Second paragraph continues here.</p>

<h2>Section Heading</h2>

<p>Content under the heading.</p>

{{image:0}}

<p>More content after the image.</p>
```

### Available HTML Tags
- `<p>` — Paragraphs
- `<h2>`, `<h3>` — Section headings
- `<strong>`, `<em>` — Bold, italic
- `<blockquote>` — Quotes
- `<ul>`, `<ol>`, `<li>` — Lists
- `{{image:0}}`, `{{image:1}}` — Inline image placeholders (for "inline" layout)

## meta.json Example

```json
{
  "slug": "my-article-url-slug",
  "title": "Article Title Here",
  "subheader": "A brief description or subtitle",
  "date": "DEC 8",
  "dateISO": "2024-12-08",
  "category": "Technology",
  "imageLayout": "hero",
  "thumbnail": {
    "src": "./thumbnail.jpg",
    "alt": "Description for accessibility"
  },
  "heroImage": {
    "src": "./hero.jpg",
    "alt": "Description",
    "caption": "Optional caption text",
    "credit": "Photo by Someone"
  }
}
```

## Image Layouts

| Layout | Description | Required Fields |
|--------|-------------|-----------------|
| `"none"` | No images | Just `thumbnail` (optional) |
| `"hero"` | Full-width image at top | `heroImage` |
| `"hero-split"` | Hero with text overlay | `heroImage` |
| `"inline"` | Images within text | `inlineImages` array |
| `"sidebar"` | Image floated to side | `sidebarImage` |
| `"gallery"` | Grid of images | `galleryImages` array |

## Using Local Images

For local images, place them in the article folder and use relative paths:

```json
{
  "heroImage": {
    "src": "./my-photo.jpg",
    "alt": "Description"
  }
}
```

**Note:** Due to how Vite works, local images need to be imported in the index.ts loader. For simplest workflow, use URL images (Unsplash, etc.) or pre-upload images and use full URLs.

## Register Your Article

In `src/content/articles/index.ts`:

```typescript
import { article as myNewArticle } from './2024-12-08';

export const articles = [
  myNewArticle,  // ← Add new articles at the top
  futureTechnology,
  onSimplicity,
  // ...
];
```

## That's It!

The site automatically handles:
- Article list styling
- Featured article display  
- Image rendering by layout type
- Mobile responsiveness
- Navigation between articles
