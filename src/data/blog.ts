// Blog categories. To add one: add it here AND to the `category` enum in src/content.config.ts.
export const categories = {
  learn: {
    label: 'Learn',
    blurb: 'What I’m learning, explained the way I wish someone had explained it to me.',
    icon: 'M12 3L1 9l11 6 9-4.9V17h2V9L12 3zm-6 9.2v4L12 20l6-3.8v-4L12 16l-6-3.8z',
  },
  utility: {
    label: 'Utility',
    blurb: 'Practical tips, tools, checklists and fixes. Short and useful.',
    icon: 'M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.8-.7-.7-2.8 2.5-2.5z',
  },
  'how-to-become': {
    label: 'How to become',
    blurb: 'Step-by-step roadmaps into roles in tech and AI, from someone who hires and mentors.',
    icon: 'M4 20h4v-6H4v6zm6 0h4V9h-4v11zm6 0h4V4h-4v16z',
  },
} as const;

export type CategoryKey = keyof typeof categories;
export const blogMeta = {
  title: 'Blog',
  description:
    'Notes on what I’m learning, practical utility guides, and roadmaps on how to become an AI engineer, architect and more.',
};
