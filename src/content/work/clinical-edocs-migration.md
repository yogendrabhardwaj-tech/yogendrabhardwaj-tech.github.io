---
title: Clinical-trial documents, migrated to the cloud under Part 11
summary: Legacy clinical-trial document repositories moved to Azure with automated ingestion and OCR, and an enterprise eDocs platform integrated with CTMS, EDC and Veeva Vault.
sector: Life Sciences · Clinical Operations
role: Technical Architect
period: 2019 – 2023
order: 7
pillar: data
stack: [Azure Storage, OCR pipelines, REST APIs, Veeva Vault, CTMS, EDC]
metrics:
  - { value: '−35%', label: 'Manual indexing effort' }
  - { value: 'Part 11', label: 'FDA 21 CFR Part 11 & EU Annex 11' }
  - { value: 'Global', label: 'Trial sites served' }
---

## Context

Clinical-trial protocols, trial master files (eTMF) and regulatory submissions lived in legacy repositories that were costly to maintain and slow to search, with indexing done largely by hand.

## Architecture

- **Legacy-to-cloud migration** into Azure enterprise storage, with **automated ingestion pipelines and OCR extraction** that cut manual indexing effort by **35%**.
- An **enterprise Electronic Document Management System (eDocs)** for protocols, eTMF and regulatory submissions across global trial sites.
- **Secure REST APIs** connecting eDocs with **CTMS, EDC and Veeva Vault** for automated indexing and real-time metadata synchronization.

## Compliance

- **FDA 21 CFR Part 11, EU Annex 11 and GCP/ICH** controls.
- **Immutable audit trails**, electronic-signature validation and fine-grained RBAC.
- **PHI encrypted** at rest and in transit.

## Why it matters now

This is the groundwork the GenAI era depends on: you cannot ground an AI assistant in documents you cannot find, trust or audit.
