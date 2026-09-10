# Day 01 — FDE Role, Baseline, and Customer Outcome

**Status:** Complete

**Visual lesson:** [Day 01 infographic](../learning-atlas/days/day-01.html)
**Scenario artifact:** [Customer outcome definition](../scenarios/01-support-copilot/discovery/day-01-outcome.md)

## Learning objective

Explain how a Forward Deployed Engineer differs from a framework specialist, assess current evidence honestly, and define a customer outcome before selecting technology.

## Core distinction

- **Output:** software or model behavior produced, such as an AI-generated reply.
- **Outcome:** a measurable improvement experienced by the customer, such as a faster approved response without lower routing quality.

An output can work technically while producing no useful outcome.

## Preliminary evidence baseline

This is an initial assessment from the existing Document Insight Generator repository. It is not a final rating of the learner.

| Competency | Preliminary level | Existing evidence | Important gap |
| --- | --- | --- | --- |
| Discovery | 0 — Not started | No customer interview or workflow evidence found | Validate a real problem and assumptions |
| Product judgment | 1 — Guided | Honest POC scope and documented non-production limits | Connect scope to customer baseline and impact |
| Software engineering | 2 — Independent | React/FastAPI vertical slice, worker, tests, Docker | Demonstrate iterative customer-driven delivery |
| Data engineering | 1 — Guided | Atomic filesystem persistence and explicit state transitions | SQL modelling, migrations, retention, recovery |
| AI engineering | 0 — Not started | Provider interface exists, but implementation is deterministic fake analysis | Real model contract, baseline, labelled evals |
| Agent engineering | 0 — Not started | No agent workflow implemented | State, tools, control, trace evals, approvals |
| Integration | 1 — Guided | Browser, API, worker, PDF parser, artifact integration | External enterprise API/webhook and reconciliation |
| Security | 1 — Guided | Validation, safe errors, path containment | Identity, authorization, tenancy, threat model |
| Production | 1 — Guided | Container and Railway configuration | CI, observability, SLOs, failure and restore proof |
| Communication | 2 — Independent | Strong architecture and learning documentation | Customer-facing discovery and outcome narrative |
| Impact | 0 — Not started | No adoption or before/after evidence | Baseline, pilot, feedback, measurable result |

The correct response to a low score is not embarrassment. It identifies what evidence the lab must produce.

## Draft customer outcome

> For Northstar support agents, reduce the median time from ticket arrival to an approved, evidence-backed first useful response, without reducing correct routing or permitting unauthorized external actions.

This is a **hypothesis**, not a validated requirement. We do not assign a numerical target until discovery and baseline work establish one.

### Anatomy

- **User:** Northstar support agent
- **Workflow:** ticket triage and first response
- **Desired change:** reduce elapsed time
- **Quality guardrail:** preserve correct routing and evidence quality
- **Safety guardrail:** no unauthorized external action
- **Candidate measure:** median time to approved first useful response

### Not the outcome

- build a LangGraph application;
- use multiple agents;
- connect a vector database;
- generate a support reply;
- maximize automation.

Those may become implementation choices or outputs. None independently proves customer value.

## Worked scenario exercise

The following answers demonstrate the reasoning process applied to this scenario. They are project evidence, not a claim that the learner independently produced them.

### 1. Explain the FDE role in two sentences

An FDE translates an ambiguous customer workflow into a reliable technical solution and owns delivery across product, data, integration, deployment, and support. The role is successful when users adopt the solution and a guarded business outcome improves—not when a particular framework is installed.

### 2. Which existing competency is your strongest, and what evidence supports it?

Software engineering is the strongest evidenced competency. The existing project demonstrates a complete React/FastAPI workflow, asynchronous worker, defensive validation, tests across multiple layers, Docker packaging, and unusually clear architecture documentation.

### 3. Which competency needs the most improvement, and why?

Customer discovery and measured impact need the most improvement. There is no evidence yet of stakeholder interviews, a measured current workflow, user adoption, or a before/after customer result; agent engineering is also unstarted because the existing provider is deterministic rather than a real evaluated model workflow.

### 4. Rewrite the draft customer outcome in your own words

Help Northstar support agents reduce the median time from ticket arrival to an approved, evidence-backed first useful response while preserving correct routing and preventing unauthorized external actions.

### 5. What harmful behavior could occur if we optimize only response speed?

Optimizing only speed could reward fast but incorrect replies, missed security escalation, unsupported advice, or rushed approval. Speed must therefore be paired with routing correctness, evidence validity, and a zero-unauthorized-action guardrail.

## Completion gate

Day 1 is complete when:

- the FDE role is explained without defining it as “someone who builds agents”;
- one strong and one weak competency are supported by evidence;
- the customer outcome identifies user, workflow, measurable change, and guardrails;
- output and outcome are clearly distinguished;
- at least one risk of optimizing the metric is identified.

## Evidence record

- Customer outcome: Defined as a testable hypothesis with quality and safety guardrails.
- What was built: Day 1 visual lesson, evidence baseline, worked exercise, and scenario outcome artifact.
- Key decision: Customer outcome precedes framework selection.
- Verification: Completion criteria checked against the worked answers and scenario artifact; rendered infographic inspected at desktop and narrow widths.
- Failure or feedback discovered: The initial workflow tried to require learner-authored answers; changed to an agent-owned worked process while keeping personal competency claims separate.
- Metric before/after: Not yet measured.
- Next step: Day 2 will classify scenario facts and hypotheses and produce stakeholder discovery questions.
