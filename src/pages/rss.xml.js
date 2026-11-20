import rss from '@astrojs/rss';
import { getNotes } from '../lib/content';
import { site } from '../data/profile';

export async function GET(context) {
  const notes = await getNotes();
  return rss({
    title: `${site.shortName} — Notes`,
    description: 'Architecture notes on agentic AI, grounded RAG, evaluation and AI governance.',
    site: context.site,
    items: notes.map((n) => ({
      title: n.data.title,
      description: n.data.description,
      pubDate: n.data.date,
      link: `/notes/${n.id}/`,
    })),
  });
}
