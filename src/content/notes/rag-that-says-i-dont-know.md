---
title: Our RAG assistant says “I don’t know” on purpose
description: For customer-facing financial services, a confident wrong answer is the worst outcome. Here is how citations, refusal routing and an eval gate kept ours honest.
date: 2026-11-21
tags: [RAG, Evaluation, Financial Services]
draft: true
---

The most important feature of the knowledge assistant we built for member-service representatives was not an answer. It was a **refusal**.

In customer-facing financial services, a confident wrong answer costs more than no answer: it reaches a member, it gets acted on, and it erodes trust in the tool for every rep who hears about it. So we designed the assistant to be **useful when it is sure and honest when it is not**.

## Cite everything

Every answer cites the policy document it came from. Reps can check the source in one click, and an answer without a source is not shown.

## Decline when retrieval is weak

When hybrid retrieval — vector search over policies plus structured account queries — came back with low confidence, the assistant **declined and routed the question to senior staff** instead of improvising.

## Gate every release on evals

A curated **golden Q&A set**, scored for groundedness, relevance and coherence, ran before every release. Prompt change, document refresh or model update — if groundedness dropped, the release did not ship.

## Mask PII before the model sees it

Member PII was masked before it reached the model or the logs, and content-safety filters ran on both prompts and responses.

---

The result: **200+ reps**, **23–40% faster** request handling, and fewer escalations — not because the assistant knew everything, but because reps could trust what it said.

_Draft — review before publishing._
