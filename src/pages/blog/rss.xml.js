import rss from '@astrojs/rss';
import { getPosts } from '../../lib/content';
import { categories, blogMeta } from '../../data/blog';
import { site } from '../../data/profile';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: `${site.shortName} — Blog`,
    description: blogMeta.description,
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/blog/${p.id}/`,
      categories: [categories[p.data.category].label, ...p.data.tags],
    })),
  });
}
