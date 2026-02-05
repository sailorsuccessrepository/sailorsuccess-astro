import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const q = (url.searchParams.get('q') || '').trim().toLowerCase();

  const collections = ['learn','careers','money','rights','tools'];
  let allPosts: any[] = [];
  for (const c of collections) {
    const cposts = await getCollection(c);
    allPosts = allPosts.concat(cposts.map(p => ({ ...p, collection: c })));
  }

  if (!q) {
    return new Response(JSON.stringify([]), { status: 200, headers: { 'Content-Type': 'application/json' } });
  }

  const term = q;
  const results = allPosts.filter(p => {
    const title = (p.data.title || '').toString().toLowerCase();
    const desc = (p.data.description || '').toString().toLowerCase();
    const tags = (p.data.tags || []).map((t: string) => t.toString().toLowerCase()).join(' ');
    return title.includes(term) || desc.includes(term) || tags.includes(term);
  }).map(p => ({
    title: p.data.title,
    slug: p.slug,
    collection: p.collection,
    category: p.data.category,
    excerpt: (p.data.description || '').toString().slice(0, 160),
    tags: p.data.tags || []
  }));

  return new Response(JSON.stringify(results), { status: 200, headers: { 'Content-Type': 'application/json' } });
};
