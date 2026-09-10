# Scenario 01 — Customer Support Copilot

## Scenario

Northstar Cloud is a fictional B2B SaaS company. Its support team receives product questions, billing issues, bug reports, and security-sensitive requests through a shared ticket queue.

Agents manually identify the category and urgency, search internal documentation, draft a response, and decide whether another team must handle the ticket. Response quality and routing vary between operators, and repeated searches make first responses slow.

Northstar wants assistance, not uncontrolled automation. A human support agent remains responsible for every external response and sensitive action.

## Initial stakeholders

- **Support agent:** needs fast, relevant recommendations with evidence.
- **Support lead:** needs consistency, queue visibility, and measurable quality.
- **Security lead:** needs strict access control and protection against malicious ticket content.
- **Engineering on-call:** needs high-quality bug escalations without noisy automation.
- **Customer:** needs a correct, timely response and transparent escalation.

## Hypotheses to validate

These statements are assumptions, not requirements yet:

- documentation search is the largest source of delay;
- category and urgency can be suggested reliably;
- cited draft responses will reduce first-response time;
- human approval is required before sending any response;
- billing changes, account access, and security reports must use specialized workflows;
- support agents will reject suggestions that do not explain their evidence.

## Candidate success metrics

- median time to first useful response;
- correct category and escalation rate;
- draft acceptance and edit rate;
- percentage of answers with valid supporting citations;
- unsafe-action and cross-customer data-leak rate;
- cost and latency per recommendation;
- support-agent satisfaction.

Targets must not be invented until a baseline and stakeholder priorities are established.

## Constraints

- Never send an external response without explicit human approval.
- Never perform account, billing, or production changes in the first release.
- Treat ticket text and retrieved content as untrusted input.
- Enforce permissions in application code; prompts are not security boundaries.
- Preserve an audit trail of recommendations, evidence, approvals, and actions.
- Provide a useful non-AI fallback when the model is unavailable.

## Delivery milestones

### M0 — Discovery and scope

Produce:

1. ten stakeholder interview questions grouped by stakeholder;
2. a current-state workflow from ticket arrival through resolution;
3. five user stories with testable acceptance criteria;
4. prioritized functional and non-functional requirements;
5. explicit assumptions, risks, dependencies, and non-goals;
6. a metric definition for “first useful response.”

Review question: **Can another engineer explain what customer outcome the first release will improve and what it will deliberately not do?**

### M1 — Deterministic vertical slice

Build ticket intake, rule-based category/priority suggestions, human review, and decision history. Use a relational database and no LLM.

Purpose: learn the domain and establish a measurable baseline before introducing probabilistic behavior.

### M2 — Evaluated AI triage

Introduce schema-validated model output behind an interface. Route routine classification to the smallest model that meets the quality target and define a fallback. Create a labelled ticket dataset and compare output quality, execution traces, latency, tokens, and cost against M1.

### M3 — Grounded response drafting

Retrieve approved knowledge, return citations, abstain when evidence is insufficient, and evaluate retrieval and answer quality separately. Keep transient workflow state distinct from durable ticket history and retrieved knowledge. Pass only the context needed by each step.

### M4 — Safe tool integration

Add a ticket-system adapter with strict machine-readable contracts. Separate read-only operations from high-impact writes. Add authenticated users, RBAC, replay-safe webhooks, deterministic approval gates, sanitized audit logs, content isolation, PII controls, and adversarial tests.

### M5 — Production operation

Deploy to staging with CI/CD, migrations, bounded retries, model fallbacks, caching where correctness permits, streaming where it improves the user experience, and end-to-end agent traces. Define SLOs and alerts, then perform load, rollback, and recovery exercises.

### M6 — Pilot and iteration

Run a user pilot, measure the baseline and target outcomes, analyze rejected recommendations, and ship one evidence-driven improvement.

## First exercise

Complete M0 without designing screens or selecting frameworks. Write your answers in `scenarios/01-support-copilot/discovery.md`.

For each requirement, record which stakeholder or observed workflow justifies it. Mark uncertain statements as assumptions. This distinction is a core FDE habit: do not present an unverified idea as a customer fact.
