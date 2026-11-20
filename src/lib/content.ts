import { getCollection } from 'astro:content';

/** Notes visible in this build: drafts appear in `astro dev` only. */
export async function getNotes() {
  const all = await getCollection('notes', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getWork() {
  return (await getCollection('work')).sort((a, b) => a.data.order - b.data.order);
}

/** Real sessions first (newest first), placeholders last. Placeholders appear in `astro dev` only. */
export async function getSessions() {
  const all = await getCollection('sessions', ({ data }) => import.meta.env.DEV || !data.placeholder);
  return all.sort((a, b) => {
    if (a.data.placeholder !== b.data.placeholder) return a.data.placeholder ? 1 : -1;
    return (b.data.date?.valueOf() ?? 0) - (a.data.date?.valueOf() ?? 0);
  });
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
