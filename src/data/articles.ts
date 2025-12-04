// Article data structure - add new articles here in reverse chronological order
// Simply copy an article object, update the fields, and add it to the top of the array

export interface Article {
  slug: string;
  title: string;
  subheader: string;
  date: string;
  category: string;
  body: string;
}

export const articles: Article[] = [
  {
    slug: "the-future-of-technology",
    title: "The Future of Technology Is Quieter Than You Think",
    subheader: "Why the next decade will be defined by invisible innovation",
    date: "DEC 4",
    category: "Technology",
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
  },
  {
    slug: "on-simplicity",
    title: "On Simplicity",
    subheader: "The hardest thing to achieve in design and in life",
    date: "DEC 1",
    category: "Design",
    body: `
      <p>Simplicity is not the absence of complexity. It is complexity resolved, distilled to its essence. The simple solution is almost always the one that required the most thought.</p>
      
      <p>We confuse simplicity with ease. But ease is what we give to others; simplicity is what we achieve through rigor. The blank page is easy. The right words are simple.</p>
      
      <h2>The Discipline of Subtraction</h2>
      
      <p>Every element you add to a design, a system, or a life demands attention. It creates relationships, dependencies, maintenance. The discipline of simplicity is the discipline of subtraction.</p>
      
      <p>Ask not "what can I add?" but "what can I remove?" The answer will improve almost anything.</p>
      
      <h2>Why It Matters Now</h2>
      
      <p>In an age of abundance—of information, of options, of noise—simplicity becomes precious. The companies, products, and ideas that will endure are those that respect our finite attention.</p>
      
      <p>Simplicity is not a style. It is a strategy for survival.</p>
    `,
  },
  {
    slug: "markets-and-meaning",
    title: "Markets and Meaning",
    subheader: "The economy cannot tell us what matters",
    date: "NOV 28",
    category: "Economics",
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
  },
  {
    slug: "the-architecture-of-attention",
    title: "The Architecture of Attention",
    subheader: "How our environments shape what we notice",
    date: "NOV 24",
    category: "Culture",
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
  },
];
