# Day 01 — FDE Role, Baseline, and Customer Outcome

**Status:** In progress  
**Visual lesson:** [Day 01 infographic](../learning-atlas/days/day-01.html)

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

## Your exercise

Write answers below or send them in the learning thread for review.

### 1. Explain the FDE role in two sentences

_Your answer:_

### 2. Which existing competency is your strongest, and what evidence supports it?

_Your answer:_

### 3. Which competency needs the most improvement, and why?

_Your answer:_

### 4. Rewrite the draft customer outcome in your own words

_Your answer:_

### 5. What harmful behavior could occur if we optimize only response speed?

_Your answer:_

## Completion gate

Day 1 is complete when:

- the FDE role is explained without defining it as “someone who builds agents”;
- one strong and one weak competency are supported by evidence;
- the customer outcome identifies user, workflow, measurable change, and guardrails;
- output and outcome are clearly distinguished;
- at least one risk of optimizing the metric is identified.

## Evidence record

- Customer outcome: Drafted; awaiting learner rewrite and review.
- What was built: Day 1 visual lesson, evidence baseline, and worksheet.
- Key decision: Customer outcome precedes framework selection.
- Verification: Pending review of learner answers.
- Failure or feedback discovered: Pending.
- Metric before/after: Not yet measured.
- Next step: Complete the five exercises and pass the Day 1 gate.
