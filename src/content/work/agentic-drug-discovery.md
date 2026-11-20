---
title: An agentic AI platform for drug discovery
summary: Specialized scientific agents on Microsoft Discovery Studio that mine literature, validate targets and screen molecules — with a scientist approving every step and every tool call on an immutable audit trail.
sector: Life Sciences · Drug Discovery
role: Agentic AI Technical Architect
period: 2026 – present
order: 1
pillar: agentic
stack: [Microsoft Discovery Studio, Azure AI Foundry Hosted Agents, Claude (Anthropic API), GraphRAG, Azure Data Lake, RBAC]
metrics:
  - { value: 'Multi-agent', label: 'Literature, target validation, screening' }
  - { value: '100%', label: 'Agent tool calls on an immutable audit log' }
  - { value: 'GxP · HIPAA · FDA', label: 'Controls enforced in the platform' }
---

## Context

Pharmaceutical R&D teams spend a large share of their time on work that is necessary but slow: reading literature, cross-referencing target pathways, and preparing candidate molecules for screening. The goal was an agentic platform that would speed up hypothesis testing for global scientific teams — without ever taking the scientist out of the decision.

The platform was co-engineered with Microsoft product teams on **Microsoft Discovery Studio**.

## Constraints

- **Regulated environment.** GxP, HIPAA and FDA expectations apply to how data is accessed and how decisions are recorded.
- **Heterogeneous data.** Assay results, target pathways, chemical and molecular structures, and genomics — structured and unstructured — all needed to be retrievable.
- **Scientists stay accountable.** Agents may propose; people decide.

## Architecture

- **Specialized scientific agents** running on **Azure AI Foundry Hosted Agents**, using **Claude via the Anthropic API** for reasoning and synthesis.
- **Multi-agent orchestration** with action-based tool calling and custom tool-integration frameworks, automating literature mining and synthesis, target validation and molecular screening.
- **A data layer built for retrieval:** secure REST APIs and connectors bringing R&D data into Azure Data Lake, Discovery Studio storage and **GraphRAG** knowledge stores, so agents can reason over relationships — not just text similarity.
- **Human-in-the-loop** checkpoints wherever an agent’s output would change what scientists do next.

## Guardrails & governance

- Prompt safety filters and **execution guardrails** on what each agent may do.
- **Strict RBAC**, so agents only reach the data their task requires.
- **Immutable audit-trail logging of every agent tool call** — the answer to “why did it do that?” is always on record.

## My role

Strategic technical lead and primary technical point of contact for Microsoft product engineering and the client’s R&D, Bio-IT and Data Science leadership — aligning platform capabilities with pharmaceutical research roadmaps.
