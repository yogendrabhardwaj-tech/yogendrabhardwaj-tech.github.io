// Single source of truth for profile content shown across the site.
// Edit text here; pages and components read from this file.

export const site = {
  url: 'https://yogendrabhardwaj.runs-on.dev',
  name: 'Yogendra K. Bhardwaj',
  shortName: 'Yogendra Bhardwaj',
  role: 'AI & Data Solutions Architect',
  headline: 'Enterprise AI Across Industries',
  tagline: 'Enterprise AI you can trust.',
  description:
    'Yogendra K. Bhardwaj architects production AI agents, assistants and data platforms for enterprises in banking, insurance, life sciences, public transportation and manufacturing — built on 18 years of enterprise delivery.',
  location: 'Wilmington, DE, United States',
  email: 'yogendrabhardwaj@outlook.com',
  linkedin: 'https://www.linkedin.com/in/yogendrabhardwaj/',
  github: 'https://github.com/yogendrabhardwaj-tech',
};

export const metrics = [
  { value: '18', unit: 'yrs', label: 'Years of enterprise delivery' },
  { value: '200+', unit: '', label: 'Service reps on a grounded RAG assistant' },
  { value: '15→5', unit: 'days', label: 'Sprint planning with an MCP-driven agent' },
  { value: '5,000+', unit: '', label: 'Users on a core banking platform I led' },
  { value: '8', unit: '', label: 'Industries delivered in' },
  { value: '3×', unit: '', label: 'Microsoft Certified Trainer (2021–2024)' },
];

// Industries delivered in — shown on the home page and résumé.
export const industries = [
  {
    icon: 'bank', name: 'Banking & lending',
    text: 'Credit unions and banks: certificates of deposit, loan and home-loan processing, member service.',
    proof: '5,000+ users · loan cycle −30–40%', href: '/work/core-banking-loan-processing/',
  },
  {
    icon: 'umbrella', name: 'Insurance',
    text: 'Enterprise applications, data integration and process automation for insurance operations.',
    proof: '', href: '',
  },
  {
    icon: 'flask', name: 'Pharma & life sciences',
    text: 'Clinical trials, eDocs and regulatory submissions — and today, agentic AI for drug discovery.',
    proof: 'Agentic R&D platform · indexing −35%', href: '/work/agentic-drug-discovery/',
  },
  {
    icon: 'train', name: 'Public transportation',
    text: 'Data and analytics for a 2,000+ asset fleet: asset health, maintenance KPIs and cost tracking.',
    proof: '2,000+ assets · 2,000+ staff', href: '/work/transit-predictive-maintenance/',
  },
  {
    icon: 'gear', name: 'Enterprise asset management',
    text: 'IoT sensor ingestion and predictive maintenance, so assets are serviced before they fail.',
    proof: 'IoT → Databricks → Power BI', href: '/work/transit-predictive-maintenance/',
  },
  {
    icon: 'factory', name: 'Manufacturing',
    text: 'Plant inspection and service workflows — digital checklists, inspection records and follow-up actions.',
    proof: '', href: '',
  },
  {
    icon: 'wrench', name: 'Service & field support',
    text: 'Automated work orders, technician dispatch and pre-visit checklists with ServiceNow and Workday.',
    proof: 'Better first-time fix rates', href: '/work/transit-predictive-maintenance/',
  },
  {
    icon: 'chart', name: 'Sales & customer engagement',
    text: 'CRM and customer-engagement platforms on Dynamics 365 and the Power Platform.',
    proof: '', href: '',
  },
];

export const platforms = [
  'Azure AI Foundry',
  'Anthropic Claude',
  'Microsoft Discovery Studio',
  'Azure OpenAI',
  'Databricks',
  'Model Context Protocol',
  'GitHub Copilot',
  'Copilot Studio',
];

export const pillars = [
  {
    id: 'agentic',
    label: 'Agentic AI',
    title: 'Multi-agent systems with humans in the loop',
    body: 'Specialized agents that plan, call tools and hand off to one another — with a person approving every decision that matters, and every tool call written to an immutable audit log.',
    points: [
      'Azure AI Foundry Hosted Agents and Claude via the Anthropic API',
      'Action-based tool calling and custom tool-integration frameworks',
      'Model Context Protocol (MCP) servers for enterprise systems',
      'Execution guardrails, strict RBAC, and approval gates',
    ],
    flow: ['Planner agent', 'Tools · MCP', 'Guardrails', 'Human approval', 'Audit log'],
    lang: 'yaml',
    code: `# agent policy — illustrative
agent: target-validation
model: claude            # via Azure AI Foundry
tools:
  - graphrag.search      # literature + pathways
  - assay.query          # read-only, RBAC-scoped
guardrails:
  prompt_filter: on
  tool_allowlist: strict
human_in_the_loop:
  required_for: [hypothesis.promote, dataset.write]
audit:
  every_tool_call: immutable`,
    caseStudy: '/work/agentic-drug-discovery',
  },
  {
    id: 'rag',
    label: 'Grounded RAG',
    title: 'Answers that cite their source — or decline',
    body: 'Hybrid retrieval over documents and structured data, evaluated against a golden test set before every release. When retrieval is weak, the assistant says so and routes to a person instead of guessing.',
    points: [
      'Hybrid vector + structured retrieval; GraphRAG knowledge stores',
      'Groundedness, relevance and coherence evals as a release gate',
      'Citations on every answer; refusal routing on low confidence',
      'PII masking and content-safety filters before the model sees data',
    ],
    flow: ['Query', 'PII mask', 'Hybrid retrieve', 'Grounded answer', 'Eval gate'],
    lang: 'python',
    code: `# release gate — illustrative
scores = evaluate(golden_set, metrics=[
    "groundedness", "relevance", "coherence",
])
if scores.groundedness < THRESHOLD:
    block_release("groundedness regression")

# at runtime: decline, don't guess
if retrieval.confidence < MIN_CONFIDENCE:
    return route_to_senior_staff(query)
return answer_with_citations(query, docs)`,
    caseStudy: '/work/grounded-rag-assistant',
  },
  {
    id: 'data',
    label: 'Data & Modernization',
    title: 'The data foundations AI actually runs on',
    body: 'Fifteen years of pipelines, platforms and migrations before GenAI — and now GenAI pointed back at legacy estates to reverse-engineer them into specifications.',
    points: [
      'Azure Data Factory, Databricks, Synapse, Data Lake, Snowflake',
      'IoT ingestion and predictive-maintenance analytics',
      'Legacy-to-cloud migration across banking, pharma and transit',
      'AI-assisted reverse engineering of legacy codebases',
    ],
    flow: ['Legacy / sensors', 'Ingest · ADF', 'Databricks', 'Data Lake', 'BI · RAG'],
    lang: 'text',
    code: `# AI reverse engineering — pipeline sketch
legacy repo
  → chunk by module / call graph
  → Claude + Copilot: explain, trace, summarize
  → functional spec  +  technical spec
  → analyst review   →  versioned in source control

result: 5+ legacy apps documented, −30% analyst effort`,
    caseStudy: '/work/legacy-reverse-engineering',
  },
] as const;

export const principles = [
  {
    title: 'Guardrails first',
    body: 'Safety filters, tool allowlists and PII masking are designed in on day one — not bolted on before go-live.',
  },
  {
    title: 'Eval before every release',
    body: 'A curated golden set and automated groundedness checks gate each deploy, so quality regressions never reach users.',
  },
  {
    title: 'Audit trail by default',
    body: 'Every agent tool call is logged immutably. When a customer, auditor or regulator asks “why did it do that?”, there is an answer.',
  },
  {
    title: 'Humans stay in the loop',
    body: 'Agents propose; people approve. Low-confidence answers route to an expert instead of guessing.',
  },
];

export const experience = [
  {
    role: 'Agentic AI Technical Architect',
    org: 'Microsoft Discovery Studio',
    period: 'Feb 2026 – Present',
    sector: 'Life Sciences · Drug Discovery',
    summary:
      'Architected and deployed an agentic AI drug-discovery platform co-engineered with Microsoft product teams, on Azure AI Foundry Hosted Agents, Claude and GraphRAG knowledge bases.',
    points: [
      'Orchestrated multi-agent pipelines with action-based tool calling for literature mining, target validation and molecular screening — all within a human-in-the-loop environment.',
      'Designed secure APIs and connectors bringing assay, pathway, chemical-structure and genomics data into Azure Data Lake and GraphRAG knowledge stores.',
      'Enforced GxP, HIPAA and FDA standards through prompt safety filters, execution guardrails, strict RBAC and immutable audit logging of every agent tool call.',
      'Primary technical point of contact for Microsoft product engineering and client R&D, Bio-IT and Data Science leadership.',
    ],
  },
  {
    role: 'Solution Architect & AI Delivery Lead',
    org: '',
    period: 'Oct 2023 – Jan 2026',
    sector: 'Financial Services · Credit Unions & Banking',
    summary:
      'Delivered a grounded RAG assistant to 200+ member-service reps and led AI-assisted engineering programs across legacy modernization and delivery automation.',
    points: [
      'RAG knowledge assistant on Azure AI Foundry with hybrid vector + Dataverse retrieval; cut request processing time 23–40% and reduced escalations.',
      'Release-gated evaluation (groundedness, relevance, coherence) against a curated golden Q&A set; citations on every answer and refusal routing when retrieval was weak.',
      'GenAI pipeline (GitHub Copilot, Claude) reverse-engineering 5+ legacy applications into specifications, cutting analyst effort 30%.',
      'AI forward-engineering platform cut build cycle time 50%; Sprint Zero automation with the Azure DevOps MCP server compressed planning from 15 days to 5.',
      'Led a Dynamics 365 CE core-system replacement serving 5,000+ users, cutting loan processing cycle time 30–40% under PCI requirements.',
      'Authored enterprise AI architecture standards, responsible-AI guidelines and model-governance frameworks adopted by client organizations.',
    ],
  },
  {
    role: 'Technical Architect, Clinical Trial & eDocs',
    org: '',
    period: 'Apr 2019 – Sep 2023',
    sector: 'Life Sciences · Clinical Operations',
    summary:
      'Led legacy-to-cloud migration of clinical-trial document repositories and architected an enterprise eDocs platform for global trial sites.',
    points: [
      'Automated ingestion and OCR extraction cut manual indexing effort 35%.',
      'Secure APIs connecting eDocs with CTMS, EDC and Veeva Vault for real-time metadata synchronization.',
      'FDA 21 CFR Part 11, EU Annex 11 and GCP/ICH compliance with immutable audit trails, e-signature validation and PHI encryption.',
    ],
  },
  {
    role: 'Data Engineer & Application Development Lead',
    org: '',
    period: 'Aug 2015 – Mar 2019',
    sector: 'Public Transportation · Asset Management',
    summary:
      'Led data engineering for a 2,000+ asset fleet: ADF pipelines, IoT ingestion into Databricks for predictive maintenance, and Power BI for 2,000+ operations staff.',
    points: [],
  },
  {
    role: 'Clinical Application Migration Lead & SharePoint Architect',
    org: '',
    period: 'Jan 2012 – Jul 2015',
    sector: 'Clinical & Enterprise Platforms',
    summary:
      'Led legacy migration workstreams end to end — discovery, gap analysis, cutover and hypercare — and a SharePoint Online rollout for 2,000+ users.',
    points: [],
  },
  {
    role: 'Sr. Software Engineer & Team Lead',
    org: '',
    period: 'Apr 2008 – Dec 2011',
    sector: 'Enterprise Application Development',
    summary:
      'Led teams building enterprise applications on C#, .NET and SQL Server for global financial-services and supply-chain clients.',
    points: [],
  },
];

export const skills = [
  { group: 'Generative & Agentic AI', items: 'LLM applications, RAG, GraphRAG, hybrid search, multi-agent orchestration, tool calling, MCP, prompt engineering, human-in-the-loop, guardrails, responsible AI' },
  { group: 'AI Platforms', items: 'Azure AI Foundry (Hosted Agents), Anthropic API (Claude), Azure OpenAI, Microsoft Discovery Studio, GitHub Copilot, Copilot Studio' },
  { group: 'Data Engineering', items: 'Python, SQL, Azure Data Factory, Databricks, Synapse, Snowflake, Azure Data Lake, data modeling, IoT pipelines, Power BI' },
  { group: 'Cloud & Architecture', items: 'REST APIs, microservices, Azure Functions, Logic Apps, Service Bus, APIM, Key Vault, RBAC, managed identities, Azure DevOps' },
  { group: 'Governance & Compliance', items: 'AI governance, responsible AI, PCI, HIPAA, GxP & FDA 21 CFR Part 11, audit trails & traceability' },
  { group: 'Modernization', items: 'Legacy platform migration, AI-assisted reverse engineering, discovery & gap analysis, cutover planning, post-migration validation' },
];

// Microsoft credentials shown as badges on the home page — all verifiable on Credly.
// Dates are ISO months; `expired` is set when the credential has lapsed.
const credly = (id: string) => `https://www.credly.com/badges/${id}/public_url`;
export const credlyProfile = 'https://www.credly.com/users/yogendrabhardwaj/badges';
export const msCerts = [
  { name: 'Agentic AI Hackathon — Proficient', kind: 'Microsoft badge', badge: '/badges/agentic-ai-hackathon.png', earned: '2026-11', expired: '', verify: credly('44e3ebb9-9de5-47b5-ad93-8937bcb3b56d') },
  { name: 'Microsoft Certified Trainer', kind: '3 consecutive years', badge: '/badges/mct-2023-2024.png', earned: '2021-07', until: '2024', expired: '', verify: credly('99263ddf-a8d5-4e11-868b-39bfcede0965') },
  // Legacy Microsoft program — not on Credly. Add `earned` (YYYY-MM) and a Microsoft Learn transcript link in `verify` when available.
  { name: 'Microsoft Certified Professional', kind: 'MCP', badge: '', emblem: 'MCP', earned: '', expired: '', verify: '' },
  { name: 'Azure AI Engineer Associate', kind: 'Certification', badge: '/badges/azure-ai-engineer.png', earned: '2022-08', expired: '2024-08', verify: credly('b3362b37-241c-48f2-9b5f-183b8c22f438') },
  { name: 'Azure Data Engineer Associate', kind: 'Certification', badge: '/badges/azure-data-engineer.png', earned: '2021-06', expired: '2024-06', verify: credly('8db54459-ee62-45cd-8fb1-c7ae13570ded') },
  { name: 'Power BI Data Analyst Associate', kind: 'Certification', badge: '/badges/power-bi-data-analyst.png', earned: '2021-06', expired: '2024-06', verify: credly('43ecf7f3-3c6a-4dad-a17b-8af382ad807c') },
  { name: 'Architecting Microsoft Azure Solutions', kind: 'Exam 535', badge: '/badges/exam-535.png', earned: '2018-09', expired: '', verify: credly('28731581-2347-4e2d-a031-6ba795b36750') },
  { name: 'Azure AI Fundamentals', kind: 'Certification', badge: '/badges/azure-ai-fundamentals.png', earned: '2021-11', expired: '', verify: credly('348cc708-cae9-4e1b-943a-d5b5bb5c1a33') },
  { name: 'Security, Compliance & Identity Fundamentals', kind: 'Certification', badge: '/badges/sci-fundamentals.png', earned: '2021-07', expired: '', verify: credly('ee7aa318-3ef4-4eaf-8332-bf588a4e17d0') },
];

export const certifications = [
  'Microsoft Certified Trainer — Microsoft (2021–2024)',
  'Microsoft Certified Professional (MCP) — Microsoft',
  'Azure AI Engineer Associate — Microsoft (2022–2024)',
  'Azure Data Engineer Associate — Microsoft (2021–2024)',
  'Power BI Data Analyst Associate — Microsoft (2021–2024)',
  'Agentic AI Hackathon — Proficient — Microsoft (2026)',
  'Exam 535: Architecting Microsoft Azure Solutions — Microsoft (2018)',
  'Azure AI Fundamentals; Security, Compliance & Identity Fundamentals — Microsoft (2021)',
  'Data Architect & Technical Architect — MIT Professional Education',
  'Machine Learning Specialization — Stanford / DeepLearning.AI',
];

export const education = [
  'M.S., Information Science & Technology — Bundelkhand University, India',
  'B.S., Mathematics — Bundelkhand University, India',
];

export const lab = [
  {
    name: 'DataPulse',
    featured: true,
    kind: 'Open-source tool',
    description:
      'A zero-dependency Python engine that compares source and destination datasets, applies transformation rules, and renders an interactive HTML dashboard of migration health — what passed, what failed, and why.',
    tags: ['Python', 'Data migration', 'Validation'],
    url: 'https://github.com/yogendrabhardwaj-tech/DataPulse',
  },
  {
    name: 'Copilot Studio × MCP',
    kind: 'Hands-on lab',
    description:
      'Worked through Microsoft’s Copilot Studio + Model Context Protocol lab: deploying MCP servers to Azure and wiring them into Copilot Studio agents with enterprise governance.',
    tags: ['MCP', 'Copilot Studio', 'Azure'],
    url: 'https://github.com/yogendrabhardwaj-tech/mcsmcp',
  },
  {
    name: 'Turborepo reference architecture',
    kind: 'Reference build',
    description:
      'Monorepo with separate workspaces for a user-facing UI, an admin panel, third-party integrations and a shared Prisma data layer — Next.js, Node/Express and TypeScript throughout.',
    tags: ['TypeScript', 'Next.js', 'Monorepo'],
    url: 'https://github.com/yogendrabhardwaj-tech/demo-Turborepo-strategy-',
  },
];

export const speakingTopics = [
  'Generative AI in the enterprise: from prompt to production',
  'Building AI agents with tools and the Model Context Protocol',
  'RAG that doesn’t hallucinate: evaluation and guardrails',
  'Responsible AI in the enterprise: guardrails, privacy and compliance',
  'Careers in data engineering and cloud architecture',
  'From legacy to cloud: modernization with AI assistance',
];

// Plain-language "About" — written for recruiters and non-technical readers.
export const about = {
  // Put a square photo at public/headshot.jpg and set this to '/headshot.jpg'.
  photo: '/headshot.jpg' as string,
  bio: [
    'I help large enterprises — banks, insurers, pharma companies, transit agencies and manufacturers — put AI to work safely. I design the systems where AI assistants and agents find the right information, take actions with software tools, and stay inside the rules, with people approving the decisions that matter.',
    'Before AI, I spent 15 years at Accenture building data platforms, cloud systems and large migrations, so I know the plumbing that AI depends on — and how to get it through an audit.',
    'Outside client work, I publish research on securing AI systems, review research papers, am writing a book on AI, and volunteer as a guest lecturer for college students.',
  ],
  facts: [
    { label: 'Role', value: 'AI & Data Solutions Architect, Accenture' },
    { label: 'Experience', value: '18 years (2008 – present)' },
    { label: 'Industries', value: 'Banking & lending · Insurance · Pharma (clinical trials, drug discovery) · Public transportation · Asset management · Manufacturing · Field service & sales' },
    { label: 'Focus', value: 'AI agents · Grounded AI assistants (RAG) · Data engineering · AI governance' },
    { label: 'Microsoft', value: 'Certified Trainer 2021–2024 · Certified Professional (MCP) · Azure AI Engineer, Azure Data Engineer and Power BI Data Analyst certifications (earned 2021–2022)' },
    { label: 'Based in', value: 'Wilmington, Delaware, USA' },
    { label: 'Open to', value: 'AI architecture leadership roles, advisory work and speaking' },
  ],
};

// Research, writing and community impact.
export const research = {
  scholar: 'https://scholar.google.com/citations?user=NWN975kAAAAJ&hl=en',
  interests: ['Artificial Intelligence', 'Retrieval-Augmented Generation', 'Multi-Agent Systems', 'AI Security', 'Model Context Protocol'],
  publications: [
    {
      title: 'Guarding the Gateway: Securing MCP-Mediated RAG Pipelines Against Injection with the Guru Framework',
      authors: ['Y. K. Bhardwaj', 'P. S. Chauhan', 'P. R. Sharma'],
      // TODO: replace with the full conference name (Scholar truncates it).
      venue: '2026 International Conference on Emerging Trends in Information …',
      year: 2026,
      type: 'Conference paper',
      tags: ['MCP', 'RAG security', 'Prompt injection'],
      url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NWN975kAAAAJ&citation_for_view=NWN975kAAAAJ:u5HHmVD_uO8C',
    },
  ],
  book: {
    // Leave title empty until you are ready to announce it.
    title: '',
    subtitle: '',
    status: 'In progress',
    blurb:
      'A practitioner’s book on building AI systems that hold up in the real world — drawn from 18 years of enterprise delivery and the last few years of agentic AI across industries.',
  },
  orcid: 'https://orcid.org/0009-0000-6044-4189',
  reviewing: {
    summary:
      'I review conference papers and book chapters on AI, data and cybersecurity, bringing an industry practitioner’s view on what works in production.',
    // Newest first. Manuscript titles are deliberately omitted: reviews are confidential.
    records: [
      {
        kind: 'Conference paper review',
        venue: 'ICDSCNC 2026',
        venueFull: '2nd International Conference on Distributed Systems, Computer Networks and Cybersecurity',
        organizer: 'Sri Krishna Institute of Technology, Bengaluru',
        date: 'Aug 2026',
        proof: 'Certificate of Appreciation — Reviewer',
        certificate: '/certificates/icdscnc-2026-reviewer.jpg',
        reviewType: '',
      },
      {
        kind: 'Book chapter review',
        venue: 'IGI Global Scientific Publishing',
        venueFull: 'AI-Enabled Monitoring of Avian Influenza for Human Health and Global Preparedness',
        organizer: 'Edited book',
        date: 'May 2026',
        proof: 'Reviewer certificate from the Editorial Board',
        certificate: '',
        reviewType: 'Double-anonymized',
      },
      {
        kind: 'Book chapter review',
        venue: 'IGI Global Scientific Publishing',
        venueFull: 'AI-Enabled Surveillance and Control of the Nipah Virus',
        organizer: 'Edited book',
        date: 'May 2026',
        proof: 'Reviewer certificate from the Editorial Board',
        certificate: '',
        reviewType: 'Double-anonymized',
      },
    ],
  },
};

// One-page profile for conference committees (speaker / reviewer / advisor).
export const academicProfile = {
  title: 'AI & Data Solutions Architect · Researcher · Speaker',
  bioShort:
    'Yogendra K. Bhardwaj is an AI & Data Solutions Architect with 18 years of enterprise experience, architecting AI agents, retrieval-augmented generation (RAG) and data platforms for banking, insurance, life-sciences, transportation and manufacturing organizations. Bhardwaj’s published research focuses on securing MCP-mediated RAG pipelines against injection.',
  bioLong:
    'Yogendra K. Bhardwaj is an AI & Data Solutions Architect with 18 years of experience delivering enterprise data and AI platforms across banking, insurance, life sciences, public transportation, asset management and manufacturing. Currently leading agentic AI architecture for drug discovery on Microsoft Discovery Studio, Bhardwaj co-engineers with Microsoft product teams on Azure AI Foundry Hosted Agents, Claude and GraphRAG. Earlier work includes a grounded RAG assistant used by 200+ banking service representatives, a 5,000-user loan-processing platform, predictive maintenance and field-service automation for a 2,000-asset transit fleet, and AI pipelines that reverse-engineer legacy code into specifications. The common thread is AI that can be trusted in production: guardrails, evaluation, human-in-the-loop controls and audit trails. Bhardwaj’s research on securing Model Context Protocol (MCP)-mediated RAG pipelines appeared in 2026, a book on AI is in progress, and Bhardwaj volunteers as a guest lecturer for college students.',
  roles: [
    {
      role: 'Keynote & invited speaker',
      detail: 'Industry keynotes, invited talks and panels on agentic AI, RAG and responsible AI in the enterprise.',
    },
    {
      role: 'Technical program committee & reviewer',
      detail: 'Reviewing papers in AI, retrieval-augmented generation, multi-agent systems and AI security — with a production-readiness lens.',
    },
    {
      role: 'Industry advisor',
      detail: 'Advisory board or industry track chair: connecting academic research with enterprise practice, and mentoring student researchers.',
    },
  ],
  talks: [
    {
      title: 'Guarding the gateway: securing MCP-mediated RAG against injection',
      abstract: 'How tool-connected AI systems get attacked through retrieved content and tool calls — and the layered defenses that keep them safe.',
    },
    {
      title: 'Agentic AI that passes the audit',
      abstract: 'Guardrails, evaluation gates, human-in-the-loop approval and immutable audit trails for agents in banking, insurance and life sciences.',
    },
    {
      title: 'Grounded RAG in production: answers that cite — or decline',
      abstract: 'Hybrid retrieval, golden-set evaluation and refusal routing, from a deployment serving 200+ financial-services staff.',
    },
    {
      title: 'From legacy to AI-native',
      abstract: 'Using LLMs to reverse-engineer legacy codebases into specifications and accelerate modernization.',
    },
  ],
  credentials: [
    '18 years of enterprise delivery; Agentic AI Technical Architect co-engineering with Microsoft product teams',
    'Microsoft Certified Trainer (2021–2024) and Certified Professional (MCP); Azure AI Engineer, Data Engineer, Power BI Data Analyst (earned 2021–22)',
    'MIT Professional Education — Data & Technical Architect; Stanford / DeepLearning.AI — Machine Learning',
    'Industries: banking, insurance, pharma, public transportation, asset management, manufacturing',
  ],
};
