// Renders public/og.png (1200×630) — the link-preview image for LinkedIn, Slack, etc.
// Run: node scripts/og.mjs
import sharp from 'sharp';

const rows = [
  ['agent.plan', 0, 9, '#b8bfcc'],
  ['tool.graphrag.search', 9, 22, '#4f8cff'],
  ['guardrail.pii_mask', 31, 6, '#f2b84b'],
  ['llm.synthesize', 37, 33, '#a78bfa'],
  ['eval.groundedness', 70, 9, '#3dd6a8'],
  ['human.approve', 79, 15, '#f472b6'],
  ['audit.log', 94, 6, '#3dd6a8'],
];
const tx = 830, tw = 298, ty = 175;
const trace = rows.map(([n, s, w, c], i) => {
  const y = ty + i * 40;
  return `<text x="${tx - 20}" y="${y + 5}" text-anchor="end" font-family="Menlo, monospace" font-size="15" fill="#8b93a5">${n}</text>
  <rect x="${tx + (s / 100) * tw}" y="${y - 6}" width="${Math.max(6, (w / 100) * tw)}" height="12" rx="3" fill="${c}"/>`;
}).join('');

const dots = Array.from({ length: 28 }, (_, r) => Array.from({ length: 55 }, (_, c) =>
  `<circle cx="${c * 22 + 11}" cy="${r * 22 + 11}" r="1" fill="#ffffff" fill-opacity="0.05"/>`).join('')).join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs><radialGradient id="g" cx="0.75" cy="0" r="0.7"><stop offset="0" stop-color="#4f8cff" stop-opacity="0.28"/><stop offset="1" stop-color="#4f8cff" stop-opacity="0"/></radialGradient></defs>
  <rect width="1200" height="630" fill="#0a0c10"/>${dots}<rect width="1200" height="630" fill="url(#g)"/>
  <rect x="72" y="72" width="44" height="44" rx="11" fill="#4f8cff"/>
  <text x="94" y="101" text-anchor="middle" font-family="Menlo, monospace" font-size="17" font-weight="700" fill="#0a0c10">YB</text>
  <text x="134" y="92" font-family="Helvetica, Arial, sans-serif" font-size="20" font-weight="700" fill="#e7e9ee">Yogendra K. Bhardwaj</text>
  <text x="134" y="114" font-family="Menlo, monospace" font-size="14" fill="#8b93a5">AI &amp; Data Solutions Architect</text>
  <text x="72" y="250" font-family="Georgia, 'Times New Roman', serif" font-size="66" fill="#e7e9ee">Agentic AI</text>
  <text x="72" y="326" font-family="Georgia, 'Times New Roman', serif" font-size="66" fill="#e7e9ee">that passes</text>
  <text x="72" y="402" font-family="Georgia, 'Times New Roman', serif" font-size="66" fill="#e7e9ee">the audit.</text>
  <text x="72" y="470" font-family="Helvetica, Arial, sans-serif" font-size="21" fill="#b8bfcc">Governed GenAI &amp; multi-agent systems for life sciences</text>
  <text x="72" y="500" font-family="Helvetica, Arial, sans-serif" font-size="21" fill="#b8bfcc">and financial services · 18 years at Accenture</text>
  ${trace}
  <text x="${tx}" y="${ty + 7 * 40 + 14}" font-family="Menlo, monospace" font-size="15" fill="#3dd6a8">✓ grounded  ✓ approved  ✓ audited</text>
  <line x1="72" y1="558" x2="1128" y2="558" stroke="#1f2430"/>
  <text x="72" y="590" font-family="Menlo, monospace" font-size="16" fill="#8b93a5">yogendrabhardwaj.runs-on.dev</text>
  <text x="1128" y="590" text-anchor="end" font-family="Menlo, monospace" font-size="16" fill="#8b93a5">GxP · HIPAA · 21 CFR Part 11 · PCI</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(new URL('../public/og.png', import.meta.url).pathname);
console.log('wrote public/og.png');
