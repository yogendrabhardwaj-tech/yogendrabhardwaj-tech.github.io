---
title: AI that reverse-engineers legacy code into specifications
summary: A GenAI pipeline using GitHub Copilot and Claude that turns undocumented legacy codebases into functional and technical specifications — then a forward-engineering platform that builds from them.
sector: Financial Services · Modernization
role: Solution Architect & AI Delivery Lead
period: 2023 – 2026
order: 5
pillar: data
stack: [Claude, GitHub Copilot, Copilot agents, Source control, Test scaffolding]
metrics:
  - { value: '5+', label: 'Legacy applications documented' }
  - { value: '−30%', label: 'Analyst effort on discovery' }
  - { value: '−50%', label: 'Build cycle time (forward engineering)' }
---

## Context

Modernization programs stall at discovery. The people who wrote the legacy system have moved on, the documentation is out of date, and analysts spend weeks reading code to work out what it actually does.

## Reverse engineering

A **GenAI pipeline built on GitHub Copilot and Claude** reads legacy codebases and produces **functional and technical specifications**: what each module does, the business rules it encodes, and how the pieces call one another. Analysts review and correct the output rather than writing it from scratch.

Applied across **5+ legacy applications**, it cut analyst effort by **30%**.

## Forward engineering

The specifications then fed a second platform — **GitHub Copilot and Claude agents** that automate code generation, test scaffolding and bug resolution from functional specs — cutting build cycle time by **50%**.

## What made it work

- **Humans review every specification.** The model drafts; the analyst signs off.
- **Specs live in source control**, so they evolve with the code instead of going stale.
- **Specs before code.** Generating from a reviewed specification is far more reliable than generating from a vague ticket.
