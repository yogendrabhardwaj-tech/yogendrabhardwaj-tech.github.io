---
title: Guardrails for agentic AI under GxP — what auditors actually ask for
description: Agents that call tools change the compliance question from “what did the model say?” to “what did the system do?” Four controls that answer it.
date: 2026-11-20
tags: [Agentic AI, Governance, Life Sciences]
draft: true
---

When a chatbot answers a question, the compliance question is about **content**: was the answer accurate, safe, appropriate? When an agent **calls tools** — queries an assay database, writes a record, triggers a screening run — the question becomes about **actions**. Auditors stop asking “what did the model say?” and start asking “what did the system do, on whose authority, and can you prove it?”

In regulated life-sciences work, four controls do most of the work of answering that.

## 1. An allowlist, not a blocklist

Every agent gets an explicit list of tools it may call, scoped to its task. A literature-mining agent can search; it cannot write. Anything not on the list does not exist for that agent.

## 2. Least-privilege identity for every tool call

Tools run under identities with **RBAC** scoped to exactly the data the task needs. The agent never inherits a human’s broad permissions.

## 3. Humans approve state changes

Agents propose; people decide. Anything that changes what scientists do next — promoting a hypothesis, writing to a dataset — waits for a named person to approve it.

## 4. An immutable log of every tool call

Who asked, which agent acted, which tool it called with which inputs, what came back, and who approved. Written once, never edited. This is the record that turns “trust us” into evidence.

---

None of this is exotic — it is the same discipline as **21 CFR Part 11** applied to a new kind of actor. The teams that move fastest with agents are the ones that design these controls in on day one, because they never have to stop and retrofit them before an audit.

_Draft — review before publishing._
