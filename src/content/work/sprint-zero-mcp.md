---
title: Sprint Zero automation with the Azure DevOps MCP server
summary: An AI-driven solution that turns requirements into features, user stories and backlog items in Azure DevOps — with an HTML review step before anything lands on the board.
sector: Delivery Engineering
role: Solution Architect & AI Delivery Lead
period: 2023 – 2026
order: 6
pillar: agentic
stack: [GitHub Copilot, Azure DevOps MCP server, Model Context Protocol, Azure Boards]
metrics:
  - { value: '15→5', label: 'Days of sprint planning' }
  - { value: 'MCP', label: 'Direct, governed access to Azure DevOps' }
---

## Context

“Sprint Zero” — turning a body of requirements into a groomed backlog of features, user stories and product backlog items — routinely took **15 days** of workshops and manual entry before a team could start building.

## Approach

- **GitHub Copilot** drafts features, user stories and PBIs from the source requirements.
- The **Azure DevOps MCP server** gives the agent structured, permissioned access to the project, using the **Model Context Protocol** instead of brittle scripts.
- An **HTML review** step lets product owners read, edit and approve the generated backlog before it is written to the scrum board.

## Outcome

Sprint planning compressed from **15 days to 5**, with people still owning every item that reaches the board.
