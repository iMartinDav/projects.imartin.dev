// Outputs: /api/v1/fetchProjectsFeed.json
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const allPosts = await getCollection('posts');
const nowPosts = allPosts
  ?.filter((post) => post.data.category === 'projects')
  .sort(
    (blogEntryA, blogEntryB) =>
      (blogEntryB.data.pubDate || new Date()).getTime() -
      (blogEntryA.data.pubDate || new Date()).getTime()
  );

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(nowPosts));
};
