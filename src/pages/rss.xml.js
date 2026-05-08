import rss from '@astrojs/rss';

import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: "Martin DAVILA's blog",
    description: 'BioCode',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      content: sanitizeHtml(parser.render(post.body)),
      link: `/${post.data.category}/${post.id}/`
    }))
  });
}
