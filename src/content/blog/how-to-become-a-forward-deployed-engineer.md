---
title: "How to become a Forward Deployed Engineer (FDE)"
description: "What FDEs actually do, the six-stage loop they run from discovery to production, free training to learn each stage, and two portfolio projects to prove it."
date: 2026-11-20
category: how-to-become
tags: [Forward Deployed Engineer, AI Engineering, Careers, Agentic AI]
featured: true
draft: false
---

Forward Deployed Engineer is one of the fastest-growing job titles in AI right now, and one of the least understood. This post is for software, data and ML engineers who want to move into the role. You'll get a plain-English view of the job, the stages of work an FDE owns, a curated list of **free** training for each stage, and **two hands-on projects** you can build to prove you can do it.

## What a Forward Deployed Engineer actually does

An FDE sits between the customer and the codebase. Instead of building a product for thousands of users, you embed with one customer, find the workflow where AI can make a measurable difference, and ship a working solution into *their* environment: their data, their security rules, their cloud.

<figure class="bx-bridge" aria-label="Where the FDE sits: between the customer's world and the AI platform">
<div class="bx-side"><span class="bx-label">Customer's world</span><strong>The real problem</strong><ul><li>Messy workflows</li><li>Data in five systems</li><li>Security and compliance rules</li><li>A budget and a deadline</li></ul></div>
<div class="bx-mid"><span class="bx-label">Forward Deployed Engineer</span><strong>Translates and ships</strong><p>Finds the one workflow worth fixing, builds it, proves it works and keeps it working.</p><div class="bx-arrows" aria-hidden="true"><span class="bx-in">listens</span><span class="bx-out">builds</span></div></div>
<div class="bx-side"><span class="bx-label">AI platform</span><strong>The building blocks</strong><ul><li>LLMs and agents</li><li>Retrieval and APIs</li><li>Cloud services</li><li>Evals and monitoring</li></ul></div>
</figure>

In my enterprise delivery work, the projects that succeed are rarely the ones with the cleverest model. They are the ones where someone took the time to understand the real workflow, agreed on what "good" looks like, and kept the system honest after go-live. That someone is the FDE.

Three things separate an FDE from a typical engineer:

<ol class="bx-traits">
<li class="bx-trait"><div class="bx-head"><span class="bx-num">1</span><strong>Owns the outcome, not the ticket</strong></div><div class="bx-vs"><p class="bx-typ"><span>Typical engineer</span>Builds the chatbot that was requested.</p><p class="bx-fde"><span>FDE</span>Discovers the real pain is slow claim triage, and builds that instead.</p></div></li>
<li class="bx-trait"><div class="bx-head"><span class="bx-num">2</span><strong>Works end to end</strong></div><div class="bx-vs"><p class="bx-typ"><span>Typical engineer</span>Owns one layer of the stack.</p><p class="bx-fde"><span>FDE</span>Moves from a customer call to code to a security review in a single day.</p></div><ol class="bx-day" aria-label="A typical day"><li><time>09:00</time>Discovery call with operations</li><li><time>13:30</time>Fix a LangGraph retry bug</li><li><time>16:00</time>Deployment review with security</li></ol></li>
<li class="bx-trait"><div class="bx-head"><span class="bx-num">3</span><strong>Translates constantly</strong></div><div class="bx-vs"><p class="bx-typ"><span>Typical engineer</span>Talks to other engineers.</p><p class="bx-fde"><span>FDE</span>Turns business pain into a technical design, and trade-offs into a one-pager a VP can sign off on.</p></div></li>
</ol>

## The FDE loop: six stages from problem to production

I think of the job as a loop of six stages. Each one has a clear goal, a deliverable the customer can see, and a small set of tools worth learning first.

<figure class="fde-loop" aria-label="The FDE loop: six stages from problem to production">
<div class="fl-title"><span class="fl-kicker">The FDE loop</span><span class="fl-sub">One customer problem → six stages → running in production</span></div>
<ol class="fl-grid">
<li class="fl-card"><div class="fl-head"><span class="fl-num">01</span><strong>Discover</strong></div><p class="fl-goal">Sit with the people doing the work. Map the workflow, find the data, agree on one number that defines success.</p><ul class="fl-tools" aria-label="Tools"><li>Workshops</li><li>Jupyter</li><li>SQL</li><li>Databricks</li></ul><p class="fl-out"><span>Customer sees</span>A one-page problem statement with a target metric</p></li>
<li class="fl-card"><div class="fl-head"><span class="fl-num">02</span><strong>Prototype</strong></div><p class="fl-goal">Prove value on one workflow, using real or realistic data, in days rather than weeks.</p><ul class="fl-tools" aria-label="Tools"><li>LLM API</li><li>Streamlit</li><li>Hugging Face</li></ul><p class="fl-out"><span>Customer sees</span>A clickable demo the sponsor can try</p></li>
<li class="fl-card"><div class="fl-head"><span class="fl-num">03</span><strong>Build</strong></div><p class="fl-goal">Turn the demo into agents, retrieval and APIs that hold up under real users.</p><ul class="fl-tools" aria-label="Tools"><li>LangGraph</li><li>FastAPI</li><li>Vector index</li></ul><p class="fl-out"><span>Customer sees</span>A working service behind a clean API</p></li>
<li class="fl-card"><div class="fl-head"><span class="fl-num">04</span><strong>Evaluate</strong></div><p class="fl-goal">Score answers against a golden set and catch hallucinations before anyone relies on them.</p><ul class="fl-tools" aria-label="Tools"><li>promptfoo</li><li>DeepEval</li><li>Phoenix</li></ul><p class="fl-out"><span>Customer sees</span>An eval report with pass / fail thresholds</p></li>
<li class="fl-card"><div class="fl-head"><span class="fl-num">05</span><strong>Deploy</strong></div><p class="fl-goal">Ship inside the customer's cloud, behind their security review, with guardrails on.</p><ul class="fl-tools" aria-label="Tools"><li>Docker</li><li>Azure / AWS</li><li>PII masking</li></ul><p class="fl-out"><span>Customer sees</span>A reviewed, containerized release</p></li>
<li class="fl-card"><div class="fl-head"><span class="fl-num">06</span><strong>Operate</strong></div><p class="fl-goal">Watch quality, cost and the business metric from stage 1. Feed what you learn back in.</p><ul class="fl-tools" aria-label="Tools"><li>Langfuse</li><li>OpenTelemetry</li><li>Grafana</li></ul><p class="fl-out"><span>Customer sees</span>Dashboards, a runbook and a clean handoff</p></li>
</ol>
<div class="fl-return"><span aria-hidden="true">↺</span>Operate feeds Discover: every production lesson becomes the next round of requirements.</div>
<div class="fl-skills"><span class="fl-skills-label">Used at every stage</span><ul><li>Python</li><li>SQL</li><li>APIs &amp; integration</li><li>Cloud</li><li>Customer communication</li></ul></div>
</figure>

Don't chase every framework. Learn **one tool per stage deeply** and understand what its alternatives are for. Customers will have their own stack, and you'll adapt.

### 1. Discover

This is the stage most engineers skip and most projects regret skipping. Before choosing a model, write down three things: the workflow as it runs today, where the data lives (and who owns it), and **the metric that will prove success**, such as minutes saved per case or the percentage of tickets routed correctly. If you can't name the metric, you're not ready to build.

### 2. Prototype

Pick **one valuable workflow** and make it work end to end, ugly UI and all. A Streamlit app on top of a hosted model is enough. The goal is to learn fast what the data really looks like and whether the customer gets excited, not to impress with features.

### 3. Build

Now harden it: a proper API (FastAPI), an orchestration layer for multi-step agents (LangGraph is a solid default), and retrieval that cites its sources. Spend more time on the workflow design (state, retries, human approval steps) than on picking frameworks.

### 4. Evaluate

Create a **golden set** of 30–100 real questions with expected answers before you tune anything. Run it on every prompt or model change. This is the single habit that most clearly separates production AI engineers from demo builders, and it's what earns trust with risk and compliance teams.

### 5. Deploy

Containerize everything, keep secrets out of code, and assume the customer's security team will review your design. Guardrails for input and output (PII masking, content filters, topic limits) belong here, not as an afterthought.

### 6. Operate

After launch, watch three dashboards: **quality** (are answers still grounded?), **cost** (tokens per task, and whether it's creeping up), and **business impact** (the metric from stage 1). Data drifts, prompts age, and usage patterns change. Operating is where the long-term customer relationship is won.

## Skills map

| Must-have | Nice-to-have |
| --- | --- |
| Python and SQL | TypeScript for quick front ends |
| Calling LLM APIs, prompt design, tool use | Fine-tuning and small-model distillation |
| RAG: chunking, embeddings, hybrid search, citations | Knowledge graphs / GraphRAG |
| Building APIs (FastAPI) and working with Git | Kubernetes beyond the basics |
| Docker and one cloud (AWS, Azure or GCP) | A second cloud |
| Evaluation: golden sets, LLM-as-judge, regression tests | MLflow / experiment tracking at scale |
| Clear writing and customer communication | Domain depth in one industry (finance, health, manufacturing) |

That last must-have is not a soft extra. An FDE who can run a calm discovery workshop and write a one-page design that a non-technical sponsor understands will outgrow an FDE who only codes.

## Free training, stage by stage

Everything below is free to access at the time of writing. Some platforms offer paid certificates on top; you don't need them to learn.

**Foundations (LLMs, prompting and agents)**
- [Hugging Face AI Agents Course](https://huggingface.co/learn/agents-course): agent fundamentals, frameworks and a final hands-on project.
- [Anthropic Courses](https://anthropic.skilljar.com/) and the [Anthropic courses repo on GitHub](https://github.com/anthropics/courses): prompt engineering, tool use and building with Claude.
- [Microsoft AI Agents for Beginners](https://github.com/microsoft/ai-agents-for-beginners): 18 short lessons with code samples.
- [Microsoft Generative AI for Beginners](https://github.com/microsoft/generative-ai-for-beginners): a broader foundation course covering RAG, prompting and app building.

**Prototype and build**
- [Streamlit Get Started](https://docs.streamlit.io/get-started): build a demo UI in an afternoon.
- [LangChain Academy: Introduction to LangGraph](https://academy.langchain.com/courses/intro-to-langgraph): stateful, multi-step agents with human-in-the-loop.
- [DeepLearning.AI: AI Agents in LangGraph](https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/): a short, practical companion course. The full [short-course catalog](https://www.deeplearning.ai/short-courses/) is worth browsing too.
- [FastAPI Tutorial](https://fastapi.tiangolo.com/tutorial/): the official step-by-step guide.
- [Microsoft Learn: Develop generative AI apps on Microsoft Foundry](https://learn.microsoft.com/en-us/training/paths/create-custom-copilots-ai-studio/): if your customers are on Azure.

**Evaluate**
- [DeepLearning.AI: Evaluating AI Agents](https://www.deeplearning.ai/short-courses/evaluating-ai-agents/)
- [promptfoo Getting Started](https://www.promptfoo.dev/docs/getting-started/): regression tests for prompts, in YAML.
- [DeepEval Getting Started](https://deepeval.com/docs/getting-started): pytest-style LLM evaluation.
- [Arize Phoenix docs](https://arize.com/docs/phoenix): tracing and evals you can run locally.

**Deploy and operate**
- [Docker Get Started](https://docs.docker.com/get-started/)
- [Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/): the official interactive tutorial.
- [Langfuse docs](https://langfuse.com/docs): open-source LLM tracing, cost tracking and prompt management.

**Discover (data platforms) and the big picture**
- [Databricks Free Edition](https://www.databricks.com/learn/free-edition): practice with notebooks and data pipelines at no cost.
- [Full Stack LLM Bootcamp](https://fullstackdeeplearning.com/llm-bootcamp/): free recorded lectures on shipping LLM apps end to end.

## Two projects to learn the whole loop

Courses teach tools; projects teach judgment. Each project below runs through all six stages, uses free public data, and makes a strong portfolio piece. Write a short README for each that covers the problem, the metric, your architecture, your eval results and what you'd do next. That README is what a hiring manager will actually read.

### Project 1: Customer-support copilot (RAG + triage agent)

**The scenario:** a support team handles thousands of tickets a week. Agents waste time finding the right policy answer, and tickets get routed to the wrong queue.

**Data:** the [Bitext customer support dataset](https://huggingface.co/datasets/bitext/Bitext-customer-support-llm-chatbot-training-dataset) on Hugging Face (customer questions labeled with intents and categories, plus sample responses).

| Stage | What you build |
| --- | --- |
| Discover | Explore the data in Jupyter. Define two metrics: routing accuracy (intent → queue) and answer groundedness. |
| Prototype | A Streamlit app: paste a ticket, get a suggested queue and a draft reply. |
| Build | A LangGraph agent with two steps: classify the intent, then retrieve similar resolved cases and draft a reply **with citations**. Expose it through a FastAPI endpoint. Add a "not confident, escalate to a human" branch. |
| Evaluate | Hold out a labeled test set. Measure routing accuracy, and use promptfoo or DeepEval to score groundedness of replies. |
| Deploy | Dockerize the API. Add PII masking on input (emails, order numbers) before text reaches the model. |
| Operate | Trace every call in Langfuse. Report cost per ticket and the escalation rate. |

**What it proves:** RAG with citations, agent design with a human-in-the-loop fallback, and evaluation discipline.

A starter setup (Python 3.11+):

```bash
mkdir support-copilot && cd support-copilot
python -m venv .venv && source .venv/bin/activate
pip install datasets pandas streamlit fastapi uvicorn langgraph deepeval
```

Prefer promptfoo for evals? It runs on Node.js instead of pip:

```bash
npx promptfoo@latest init
```

### Project 2: "Ask your data" analyst agent (text-to-SQL)

**The scenario:** business users wait days for analysts to answer simple questions like "Which country brought in the most revenue last year?" They want to ask in plain English and get a trustworthy answer.

**Data:** the [Chinook sample database](https://github.com/lerocha/chinook-database), a digital music store with customers, invoices, tracks, albums and employees. It's available for SQLite, PostgreSQL, SQL Server and more.

| Stage | What you build |
| --- | --- |
| Discover | Write down 40 real business questions and the correct SQL for each. This is your golden set *and* your requirements document. |
| Prototype | A Streamlit chat: question in, generated SQL plus a result table out. |
| Build | An agent that reads the schema, writes SQL, runs it **read-only**, and retries on errors. It should show the SQL it ran so users can trust the answer. FastAPI backend. |
| Evaluate | Execution accuracy: does the agent's query return the same result as your golden SQL? Track it across prompt and model changes. |
| Deploy | Docker plus a read-only database user. Block DDL/DML (`DROP`, `UPDATE`, `DELETE`) with a guardrail before execution. |
| Operate | Log every question, query, latency and cost. Review failed questions weekly and add them to the golden set. |

**What it proves:** structured-data agents, safety guardrails, and the "golden set grows from production failures" loop that real FDEs run.

## A 90-day roadmap

| Weeks | Focus | Output |
| --- | --- | --- |
| 1–3 | Foundations: one agents course plus prompt engineering | Notes and small experiments on GitHub |
| 4–7 | Project 1, all six stages | Repo, README with eval results, 2-minute demo video |
| 8–11 | Project 2, all six stages | Repo, README, demo video |
| 12–13 | Polish and publish | A LinkedIn post or blog write-up on what you learned, and applications to FDE / AI engineer roles |

If you're already working, look for the FDE-shaped problem inside your current company. Shipping one internal AI workflow with a real metric beats any number of tutorials.

## Getting the first FDE role

- **Lead with outcomes.** For example, "Built a support copilot; routing accuracy 87% on a held-out set; cost under one cent per ticket" beats "Built a chatbot with LangGraph."
- **Show your eval.** Most portfolios have none. Yours will stand out immediately.
- **Practice discovery out loud.** Interviews for FDE roles often include a case: "Here's a customer problem, walk me through it." Start with questions, not architecture.
- **Write.** A clear README or post is a direct sample of how you'll communicate with customers.

## Key takeaways

- An FDE owns a customer outcome end to end: discover, prototype, build, evaluate, deploy, operate.
- Go deep on one tool per stage. Understanding *why* each stage exists matters more than the tool list.
- Evaluation is the habit that separates production engineers from demo builders.
- Two complete projects with READMEs, metrics and eval results make a stronger case than ten certificates.
