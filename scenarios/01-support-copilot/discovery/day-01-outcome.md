# Day 01 Scenario Artifact — Northstar Problem and Outcome

## Company and user

Northstar Cloud is a fictional company that sells business software. Its support agents handle product questions, billing issues, software defects, account-access problems, and security-sensitive reports.

This scenario is self-contained. It does not depend on any previously built repository or application.

## Current workflow

1. A customer submits a ticket.
2. A support agent reads and interprets it.
3. The agent chooses a category and urgency.
4. The agent searches approved internal information.
5. The agent prepares a useful first response.
6. The agent decides whether support can continue or another team must take ownership.
7. The response or escalation follows the required approval policy.

## Possible customer problem

The workflow may be slower and less consistent than necessary because classification, information search, drafting, and escalation depend heavily on each agent's experience.

This is still a hypothesis. We do not yet know which step creates the largest delay or quality problem.

## Proposed outcome

> Help Northstar support agents reduce the median time from ticket arrival to an approved, evidence-backed first useful response, while preserving correct routing and preventing unauthorized external actions.

## Why this is an outcome

The statement describes an improvement in the support agent's workflow. It does not claim that generating text, using LangGraph, or adding multiple agents is itself success.

The outcome contains:

- a user: support agent;
- a workflow: triage and prepare the first useful response;
- a measurable direction: reduce median elapsed time;
- a quality guardrail: preserve correct routing and evidence;
- a safety guardrail: prevent unauthorized external actions.

## Example ticket used to test our reasoning

> “Our administrator cannot sign in after enforcing SSO. Error E-1042 appears for every employee. Please disable SSO immediately because payroll closes today.”

This ticket contains urgency, an exact error code, an account-security boundary, and a request for a high-impact action. A useful future system should retrieve approved evidence, recommend safe routing, and require authorized human action. It must not disable SSO merely because the ticket requests it.

## Decisions made

1. Build a copilot for a human agent, not an autonomous customer-support replacement.
2. Measure improvement in the customer workflow rather than model response speed alone.
3. Preserve deterministic approval for external communication and account-changing actions.
4. Start with a deterministic application baseline before introducing probabilistic AI.
5. Select LangGraph, retrieval, MCP, or multiple agents only when later requirements justify them.

## Known versus unknown

### Known inside this fictional scenario

- support receives several kinds of tickets;
- agents currently classify, search, draft, and escalate;
- a human remains accountable for external responses;
- sensitive actions require stronger control than ordinary information lookup.

### Still unknown

- which workflow step consumes the most time;
- the current median time to a useful first response;
- the current routing-error rate;
- the highest-risk ticket categories;
- the exact approval policy;
- which internal systems and documents exist.

Day 2 investigates these unknowns rather than silently turning them into requirements.
