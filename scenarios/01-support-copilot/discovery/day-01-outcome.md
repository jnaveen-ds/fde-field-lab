# Day 01 — Customer Outcome Definition

## Purpose

Define why the Support Operations Copilot may be worth building before choosing AI, retrieval, or orchestration technology.

## Process performed

### 1. Inputs examined

- the Northstar scenario brief;
- preliminary engineering evidence from the existing Document Insight Generator;
- stated constraints around human approval, sensitive actions, untrusted content, and audit history;
- the FDE competency rubric.

### 2. Evidence classified

| Statement | Classification | Treatment |
| --- | --- | --- |
| Northstar receives product, billing, bug, and security tickets | Scenario fact | Use to define workflow scope |
| Agents manually categorize, search, draft, and escalate | Scenario fact | Use as the initial current-state workflow |
| Documentation search is the largest delay | Hypothesis | Validate during stakeholder discovery |
| Suggested categories can be reliable | Hypothesis | Compare rules and model outputs against labelled cases |
| Human agents remain accountable for external responses | Stated constraint | Enforce as an application approval boundary |
| Faster first responses create customer value | Hypothesis | Validate against support priorities and quality guardrails |

### 3. Output separated from outcome

- **Possible output:** classify a ticket or generate a response draft.
- **Desired outcome:** help a support agent reach an approved, useful first response faster while preserving correctness and safety.

The project will not use “agent successfully generated text” as a business-success measure.

### 4. Draft outcome selected

> Help Northstar support agents reduce the median elapsed time from ticket arrival to an approved, evidence-backed first useful response, while preserving correct routing and preventing unauthorized external actions.

### 5. Outcome anatomy

| Element | Definition |
| --- | --- |
| User | Northstar support agent |
| Workflow | Triage and prepare the first useful response |
| Desired change | Reduce median elapsed time |
| Quality guardrail | Preserve correct routing and evidence quality |
| Safety guardrail | No external action without authorized human approval |
| Candidate measure | Median time from ticket arrival to approved first useful response |

No numerical target is assigned yet because the current baseline and stakeholder priorities are unknown.

## Decisions

1. Optimize the human support workflow rather than maximize autonomous ticket handling.
2. Treat deterministic rules as the first baseline and degraded-mode fallback.
3. Defer LangGraph, retrieval, MCP, and multiple agents until requirements demonstrate their need.
4. Evaluate speed with quality and safety guardrails so the metric cannot reward careless routing or unsafe replies.

## Rejected outcome statements

- “Build a customer-support agent.” — describes a solution, not an improvement.
- “Automate 80% of tickets.” — invents a target and may reward unsafe automation.
- “Use LangGraph and a vector database.” — describes technology without customer value.
- “Generate accurate responses.” — does not identify baseline, workflow location, or measurable change.

## Primary risk of optimizing speed alone

The system could produce fast but incorrect replies, under-prioritize security incidents, route billing or account-access requests incorrectly, or encourage approval without sufficient evidence. Therefore, routing correctness, evidence validity, and unauthorized-action rate are mandatory guardrails.

## Unknowns carried into discovery

- Which ticket stage consumes the most elapsed and active agent time?
- What does Northstar consider a “useful” first response?
- Which categories have the highest cost of incorrect routing?
- What current routing and response-quality baselines exist?
- Which actions require support lead, security, billing, or engineering approval?

These remain unknown rather than being silently converted into requirements.
