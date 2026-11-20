// Single source of truth for profile content shown across the site.
// Edit text here; pages and components read from this file.

export const site = {
  url: 'https://yogendrabhardwaj.runs-on.dev',
  name: 'Yogendra K. Bhardwaj',
  shortName: 'Yogendra Bhardwaj',
  role: 'AI & Data Solutions Architect',
  headline: 'Agentic AI for Regulated Industries',
  tagline: 'Agentic AI that passes the audit.',
  description:
    'Yogendra K. Bhardwaj architects production generative AI and multi-agent systems for regulated life-sciences and financial-services enterprises, built on 18 years of data engineering at Accenture.',
  location: 'Wilmington, DE, United States',
  email: 'yogendrabhardwaj@outlook.com',
  linkedin: 'https://www.linkedin.com/in/yogendrabhardwaj/',
  github: 'https://github.com/yogendrabhardwaj-tech',
};

export const metrics = [
  { value: '18', unit: 'yrs', label: 'Enterprise delivery at Accenture' },
  { value: '200+', unit: '', label: 'Service reps on a grounded RAG assistant' },
  { value: '15→5', unit: 'days', label: 'Sprint planning with an MCP-driven agent' },
  { value: '50%', unit: '', label: 'Faster build cycles via AI forward engineering' },
  { value: '5,000+', unit: '', label: 'Users on a core banking platform I led' },
  { value: '4×', unit: '', label: 'Microsoft Azure certified' },
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
      'Legacy-to-cloud migration under 21 CFR Part 11',
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
    body: 'Safety filters, tool allowlists and PII masking are designed in on day one — not bolted on before the audit.',
  },
  {
    title: 'Eval before every release',
    body: 'A curated golden set and automated groundedness checks gate each deploy, so quality regressions never reach users.',
  },
  {
    title: 'Audit trail by default',
    body: 'Every agent tool call is logged immutably. If a regulator asks “why did it do that?”, there is an answer.',
  },
  {
    title: 'Humans stay in the loop',
    body: 'Agents propose; people approve. Low-confidence answers route to an expert instead of guessing.',
  },
];

export const experience = [
  {
    role: 'Agentic AI Technical Architect',
    org: 'Accenture · Microsoft Discovery Studio',
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
    org: 'Accenture',
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
    org: 'Accenture',
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
    org: 'Accenture',
    period: 'Aug 2015 – Mar 2019',
    sector: 'Public Transportation · Asset Management',
    summary:
      'Led data engineering for a 2,000+ asset fleet: ADF pipelines, IoT ingestion into Databricks for predictive maintenance, and Power BI for 2,000+ operations staff.',
    points: [],
  },
  {
    role: 'Clinical Application Migration Lead & SharePoint Architect',
    org: 'Accenture',
    period: 'Jan 2012 – Jul 2015',
    sector: 'Clinical & Enterprise Platforms',
    summary:
      'Led legacy migration workstreams end to end — discovery, gap analysis, cutover and hypercare — and a SharePoint Online rollout for 2,000+ users.',
    points: [],
  },
  {
    role: 'Sr. Software Engineer & Team Lead',
    org: 'Accenture India',
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
  { group: 'Governance & Compliance', items: 'AI governance, GxP, FDA 21 CFR Part 11, HIPAA, PCI, audit trails & traceability' },
  { group: 'Modernization', items: 'Legacy platform migration, AI-assisted reverse engineering, discovery & gap analysis, cutover planning, post-migration validation' },
];

export const certifications = [
  'Azure Solutions Architect Expert — Microsoft',
  'Azure AI Engineer Associate — Microsoft',
  'Azure Data Engineer Associate — Microsoft',
  'Azure Data Analyst Associate — Microsoft',
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
  'Responsible AI in regulated industries (GxP, HIPAA, PCI)',
  'Careers in data engineering and cloud architecture',
  'From legacy to cloud: modernization with AI assistance',
];

// Plain-language "About" — written for recruiters and non-technical readers.
export const about = {
  // Put a square photo at public/headshot.jpg and set this to '/headshot.jpg'.
  photo: '/headshot.jpg' as string,
  bio: [
    'I help large, regulated companies — drug makers, banks and credit unions — use AI safely. I design the systems where AI assistants and agents find the right information, take actions with software tools, and stay inside the rules, with people approving the decisions that matter.',
    'Before AI, I spent 15 years at Accenture building data platforms, cloud systems and large migrations, so I know the plumbing that AI depends on — and how to get it through an audit.',
    'Outside client work, I teach: guest lectures and hands-on sessions for college students on AI, data and careers in technology.',
  ],
  facts: [
    { label: 'Role', value: 'AI & Data Solutions Architect, Accenture' },
    { label: 'Experience', value: '18 years (2008 – present)' },
    { label: 'Industries', value: 'Pharma & life sciences · Financial services · Public transport' },
    { label: 'Focus', value: 'AI agents · Grounded AI assistants (RAG) · Data engineering · AI governance' },
    { label: 'Certified', value: 'Azure Solutions Architect Expert + 3 Azure certifications' },
    { label: 'Based in', value: 'Wilmington, Delaware, USA' },
    { label: 'Open to', value: 'AI architecture leadership roles, advisory work and speaking' },
  ],
};
