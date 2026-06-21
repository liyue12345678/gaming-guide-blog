import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: 'GameGuide Pro',
    description: 'In-depth game guides, boss strategies, build recommendations, and walkthroughs.',
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/posts/${post.slug}`,
        categories: [post.data.game, post.data.category, ...post.data.tags],
        customData: post.data.image
          ? `<enclosure url="${new URL(post.data.image, context.site).href}" type="image/webp" />`
          : undefined,
      })),
    customData: `<language>en-us</language>`,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
  });
}
