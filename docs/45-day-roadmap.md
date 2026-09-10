# 45-Day FDE Intensive

## Honest outcome

This is an intensive foundation and portfolio pathway, not a promise of complete field readiness. In 45 calendar days, the realistic outcome is one well-understood capstone that demonstrates customer discovery, full-stack delivery, evaluated AI, retrieval, safe integration, basic production operation, and impact communication.

Plan for 3–4 focused hours on six days followed by one review/rest day. If an evidence gate fails, use the next day to close it rather than advancing by date.

## Learner calibration

The working assumption is that the learner has useful Python/ML foundations but is newer to production LLM applications. Existing ML knowledge transfers to problem framing, datasets, metrics, error analysis, and experimentation; the plan explicitly adds token economics, structured model outputs, retrieval, tool safety, controlled orchestration, trace evaluation, and production LLM reliability.

An optional three-hour **GenAI orientation** may be completed between Days 1 and 2. It covers one model API call, message roles, tokens and context windows, sampling variability, cost estimation, and a schema-validated response. It does not replace customer discovery or alter the 45-day sequence.

## Scope decisions

### Included

- one primary capstone: Support Operations Copilot;
- deterministic and AI baselines;
- LangGraph only after branching and approval requirements exist;
- vector, keyword, and hybrid retrieval comparison;
- identity, tenancy, safe tools, and approval;
- one read-only MCP capability;
- one bounded multi-agent experiment compared with a simpler design;
- CI, staged deployment, observability, one failure exercise, and a case study.

### Framework policy

- **FastAPI, Pydantic, PostgreSQL, and the UI choice** form the candidate deterministic application stack; Day 6 records the final choice in an ADR.
- **Streamlit and React/TypeScript** are compared for the operator UI. Streamlit is the primary choice for this 45-day intensive so more time remains for agent, retrieval, integration, and production depth; React is the durable-product alternative when richer interaction, frontend scale, or design-system integration becomes a customer requirement.
- A **provider-neutral model contract** remains the application boundary. LangChain may implement that contract, but product code must not depend directly on provider response shapes.
- **LangGraph** starts only when conditional routing, checkpointing, and human interruption justify graph orchestration.
- **pgvector/vector retrieval, BM25 keyword retrieval, and hybrid fusion** are compared using the same labelled queries and stable chunk identities.
- **RAGAS/DeepEval and model-judge scores** are secondary evidence for generated grounded answers, not substitutes for independently labelled retrieval and task metrics.
- **LangSmith** may accelerate LLM trace inspection; OpenTelemetry-compatible application telemetry remains the vendor-neutral operational boundary.
- **MCP** is limited to one allowlisted read-only capability during the intensive.

### Deferred

- a second production-quality project;
- Kubernetes and complex infrastructure;
- many SaaS integrations;
- autonomous write access;
- advanced model training;
- claims of enterprise production readiness.

Incident response and contract review remain follow-on transfer scenarios after the intensive.

## Dependency path

```text
Customer outcome
  → deterministic product
  → evaluated model
  → durable graph
  → authorized retrieval
  → safe integration
  → production evidence
  → pilot and case study
```

## Seven phases

| Days | Focus | Why in this order | Build outcome | MNC value | Startup value | Gate evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 1–7 | Discovery and solution definition | Framework choices are meaningless before the user, workflow, constraints, and metric are clear | Customer discovery pack and scoped architecture | Aligns product, security, operations, and customer stakeholders | Prevents spending runway on the wrong problem | Facts/assumptions, workflow, requirements, baseline, ADR |
| 8–15 | Deterministic full-stack baseline | Agents require a reliable product, API, database, and human workflow | Ticket intake, rule triage, review, and history | Produces contracts, auditability, and team boundaries | Ships initial value and creates a cheap fallback | Browser-to-database demo, migration, API/UI tests |
| 16–22 | Evaluated model and controlled graph | AI must beat a baseline before orchestration complexity is justified | Structured classification, routing, fallback, LangGraph state and approval pause | Supports provider governance and durable processes | Controls latency, cost, and action risk | Labelled evals, route tests, checkpoint/resume test |
| 23–29 | Grounded hybrid retrieval | Retrieval quality and permission boundaries precede answer generation | Incremental ingestion, chunks, vector/BM25 search, fusion, citations | Handles corpora, exact identifiers, lineage, and access control | Improves answers without training a model | Retrieval comparison, freshness/deletion, citation and ACL tests |
| 30–36 | Enterprise tools and MCP | Real value and real risk appear when the system touches customer tools | Auth/RBAC, typed ticket tools, webhook, approval, one MCP read capability | Integrates governed systems with SSO-style boundaries and audit | Turns assistance into safe workflow automation | Threat model, replay, unauthorized-write, stale-approval, MCP failure tests |
| 37–43 | Production and architecture challenge | The service must operate through dependency failure and justify complexity | Traces, reliability controls, CI, staged deployment, load/failure exercise, multi-agent comparison | Fits release, observability, incident, and model-governance practices | Enables safe iteration while protecting cost and uptime | Dashboard, pipeline, deployment, game day, single-vs-multi report |
| 44–45 | Forward deployment evidence | Delivery ends with adoption, outcome, feedback, and communication | Customer demo, pilot simulation, iteration decision, case study | Communicates to engineering panels and executives | Communicates value to founders and customers | Feedback, before/after metric, case study, updated rubric |

## Daily plan

### Days 1–7 — Discovery and design

1. FDE role, competency baseline, and customer outcome.
2. Facts, hypotheses, and stakeholder interview questions.
3. Current workflow, delay, error, and risk map.
4. User stories, acceptance criteria, and explicit non-goals.
5. Baseline metric and target hypothesis.
6. Context/trust-boundary architecture and first ADR.
7. Customer gate review, correction, and rest.

### Days 8–15 — Deterministic product

8. Domain objects and state transitions.
9. API requests, responses, errors, and idempotency contract.
10. Relational schema, constraints, indexes, and ER diagram.
11. Migration and repository implementation with data tests.
12. Ticket intake API and deterministic triage rules.
13. Human review API and immutable decision history.
14. Operator UI and full browser flow.
15. Boundary tests, demo, product gate, and retrospective.

### Days 16–22 — Evaluated agent core

16. Labelled dataset and deterministic scoring baseline.
17. Model interface, structured output schema, and invalid-output handling.
18. Prompt/config versioning and small-versus-large model experiment.
19. Routing policy, latency/cost budget, and deterministic fallback.
20. State versus durable history; minimal LangGraph nodes and edges.
21. Conditional route, stable run ID, checkpoint, interrupt, and resume.
22. Output/trace evaluation, restart test, AI gate, and simplification review.

### Days 23–29 — Retrieval

23. Source manifest, parser, normalization, and malformed input.
24. Semantic chunks, stable IDs, metadata, hashes, and versions.
25. Embeddings, vector index, labelled questions, and recall baseline.
26. Tokenization, BM25 keyword index, and exact-identifier tests.
27. Rank fusion, reranking, context budget, citations, and abstention.
28. Tenant/ACL filters, incremental updates, deletion, and freshness metrics.
29. Vector/keyword/hybrid comparison and retrieval gate review.

### Days 30–36 — Enterprise integration

30. Authentication model, RBAC, tenancy, and audit schema.
31. Threat model: prompt injection, content isolation, PII, and secrets.
32. Typed read/write ticket tools with validation and authorization.
33. Webhook verification, replay protection, idempotency, and reconciliation.
34. Immutable approval proposal, expiry, reject/edit, and safe execution.
35. MCP host/client/server model; expose one allowlisted read-only capability.
36. Cross-tenant, unauthorized-write, stale-approval, and hostile-server tests.

### Days 37–43 — Production and challenge

37. Sanitized logs/traces for routes, retrieval, tools, approvals, tokens, and cost.
38. Timeouts, retry classification, bounded backoff, fallback, and circuit behavior.
39. Queue/recovery behavior, side-effect reconciliation, and injected failures.
40. Docker, CI quality gates, migrations, staged deployment, and rollback.
41. SLO, dashboard, alert, load test, runbook, and game-day exercise.
42. Implement one bounded specialist/reviewer variant with typed handoffs.
43. Compare single versus multi-agent quality, latency, cost, and failure rate; keep the winner.

### Days 44–45 — Forward deployment

44. Customer-style demo, pilot simulation, feedback, and one prioritized iteration.
45. Before/after impact report, architecture defense, case study, and updated competency rubric.

## Daily learning loop

1. **Learn:** understand the concept and one concrete failure mode.
2. **Explain:** draw or write it in your own words.
3. **Design:** apply it to the customer workflow and compare a simpler alternative.
4. **Build:** implement the smallest useful behavior.
5. **Break:** test the boundary where a plausible wrong implementation differs.
6. **Record:** link evidence, feedback, and the next decision.

The HTML atlas visualizes the phases and technical anatomy. Implementation days will add focused visual lessons linked to the exact code being built, rather than generic framework documentation.
