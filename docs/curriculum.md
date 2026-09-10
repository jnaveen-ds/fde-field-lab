# FDE Curriculum

This curriculum is ordered by delivery dependency, not by hype. Progress to the next phase after demonstrating the exit evidence for the current phase.

## Phase 1 — Customer discovery and solution design

### Learn

- stakeholder interviews and workflow mapping
- functional and non-functional requirements
- user stories and acceptance criteria
- assumptions, risks, constraints, and trade-off communication
- success metrics and baseline measurement

### Build

Convert the fictional customer brief into a scoped delivery proposal. Role-play discovery first, then validate it with real users when possible.

### Exit evidence

- discovery notes and current-state workflow;
- prioritized requirements and explicit non-goals;
- architecture decision records;
- measurable baseline and target outcomes;
- customer gate review and correction notes.

## Phase 2 — Product and engineering foundations

### Learn

- Python, Streamlit, HTTP, REST, JSON, Git, and Linux; enough React/TypeScript architecture to evaluate the durable-UI alternative
- SQL, relational modelling, transactions, indexes, and migrations
- frontend state, forms, accessibility, and error handling
- testing, debugging, logs, configuration, and secret handling
- Docker, processes, networking, and basic cloud concepts

### Build

A non-AI vertical slice for the support scenario: create a ticket, apply deterministic triage rules, review the recommendation, and record an operator decision.

### Exit evidence

- working browser-to-database flow;
- unit, API, and browser tests;
- architecture diagram and API contract;
- reproducible local setup and debugging notes.

## Phase 3 — Applied AI and agents

### Learn

- model APIs, tokens, context windows, sampling, and structured outputs
- prompt design, context budgeting, and versioning
- policy-based model routing by task, risk, quality, latency, and cost
- embeddings, retrieval, reranking, and citations
- typed tool contracts and separation of read-only from mutating tools
- workflow state versus durable history and retrieved long-term memory
- controlled branching, loops, checkpoints, retries, and idempotency
- agent boundaries, deterministic approval gates, and failure modes
- output- and trace-level evaluations, test datasets, and regression gates

### Build

Replace deterministic triage one capability at a time. Compare every AI capability against a simple baseline. Add retrieval and tools only when required by the customer workflow.

### Exit evidence

- versioned prompts and model configuration;
- routing tests proving that each task uses an appropriate model and fallback;
- schema-validated tool inputs and machine-readable results;
- independently labelled evaluation dataset;
- final-output and trajectory results against a simple baseline;
- quality, latency, token, and cost results by workflow step;
- tested abstention and human-escalation behavior;
- documented model and retrieval failure analysis.

## Phase 4 — Enterprise integration and security

### Learn

- OAuth/OIDC, sessions, SSO concepts, RBAC, and tenant isolation
- webhooks, rate limits, pagination, retries, and reconciliation
- audit logs, encryption, retention, deletion, and data minimization
- prompt injection, content isolation, PII handling, unsafe tool use, data exfiltration, and least privilege
- privacy, governance, and customer-environment constraints

### Build

Integrate the support workflow with one ticket system or realistic adapter and one communication channel. Enforce ownership and approvals at the application boundary, not in prompts.

### Exit evidence

- threat model and mitigations;
- authenticated, authorized integration;
- deterministic approval gates for every high-impact write;
- replay-safe webhook processing and audit trail;
- adversarial security tests;
- documented data lifecycle.

## Phase 5 — Production and reliability engineering

### Learn

- CI/CD, environments, migrations, rollbacks, and infrastructure as code
- queues, concurrency, timeouts, bounded retries, backoff, dead letters, and backpressure
- model fallbacks and treatment of model APIs as unreliable dependencies
- structured agent traces, metrics, dashboards, alerts, and SLOs
- load testing, capacity, safe caching, streaming, failure recovery, and cost controls
- incident response, runbooks, and postmortems

### Build

Deploy a staged system, instrument the complete request path, inject failures, and operate it against explicit reliability targets.

### Exit evidence

- CI quality gates and repeatable deployment;
- service dashboard and actionable alerts;
- sanitized end-to-end traces for model, retrieval, tool, routing, and approval steps;
- successful load and recovery exercises;
- backup/restore evidence;
- incident runbook and one game-day report.

## Phase 6 — Forward deployment and impact

### Learn

- rollout planning, enablement, and expectation management
- debugging inside unfamiliar customer environments
- adoption measurement and feedback synthesis
- communicating trade-offs to technical and business stakeholders
- converting bespoke learning into reusable product improvements

### Build

Run a small pilot with real users or a realistically simulated customer team. Observe usage and prioritize changes from evidence.

### Exit evidence

- deployment and enablement plan;
- pilot feedback and support log;
- before/after business metrics;
- iteration shipped from observed feedback;
- concise case study and customer-style demo.

## Optional depth after the core

- Kubernetes when orchestration requirements justify it
- broader MCP capabilities when standardized external tool discovery adds value beyond the intensive's one read-only capability
- advanced multi-agent systems when role separation has already beaten the intensive's simpler workflow in evaluations
- advanced ML training when the customer problem cannot be solved with existing models

These are tools, not graduation requirements.
