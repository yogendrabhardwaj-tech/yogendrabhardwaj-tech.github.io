---
title: A grounded RAG assistant for member-service reps
summary: A knowledge assistant for 200+ representatives at a financial-services client — every answer cites its policy source, low-confidence questions route to a senior colleague, and an eval gate runs before each release.
sector: Financial Services · Credit Unions
role: Solution Architect & AI Delivery Lead
period: 2023 – 2026
order: 2
pillar: rag
stack: [Azure AI Foundry, Prompt flow, Hybrid search, Dataverse, Azure AI Content Safety, Foundry evaluators]
metrics:
  - { value: '200+', label: 'Member-service reps using it' }
  - { value: '23–40%', label: 'Faster request processing' }
  - { value: 'Fewer', label: 'Escalations to senior staff' }
---

## Context

Member-service representatives answer questions that depend on dense, frequently changing policy documents and on the member’s own account data. Finding the right answer meant searching manuals or escalating to senior staff.

## Constraints

- **Customer-facing financial services.** A wrong answer is worse than no answer.
- **Member PII** must never reach the model or the logs unmasked.
- **Quality must not drift** as prompts, documents and models change release to release.

## Architecture

- **Azure AI Foundry** with **hybrid retrieval**: vector search over policy documents combined with structured **Dataverse** queries for account context.
- Prompt templates kept **in source control**, versioned with each release, built with curated few-shot examples; flows orchestrated and tested in **prompt flow**.

## Hallucination mitigation

- **Every answer cites** the policy document it came from.
- When retrieval was weak, the assistant **declined or routed the request to senior staff** instead of guessing.
- Selected answers were manually validated against ground-truth data, so unverified information never reached customer-facing staff.

## Evaluation as a release gate

The assistant was scored with Azure AI Foundry built-in evaluators — **groundedness, relevance and coherence** — against a curated golden Q&A set, rerun before every release to catch quality regressions.

## Guardrails

**Azure AI Content Safety** filters on prompts and responses, and **PII masking** before data reached the model or logs — meeting regulatory expectations for customer-facing use.

## Outcome

Rolled out to **200+ representatives**, cutting request processing time by **23–40%** and reducing escalations to senior staff.
