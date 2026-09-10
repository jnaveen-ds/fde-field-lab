# Day 01 — Understand the Customer Problem Before Building

**Status:** Complete — revised after learner feedback

**Visual lesson:** [Day 01 infographic](../learning-atlas/days/day-01.html)
**Scenario artifact:** [Northstar problem and outcome](../scenarios/01-support-copilot/discovery/day-01-outcome.md)

## What are we doing in this project?

We are going to build a **Support Operations Copilot** for a fictional company called **Northstar Cloud**.

Northstar sells business software. Its customers contact the support team when they have product questions, billing problems, software bugs, or security concerns. A support agent reads each ticket, decides how urgent it is, finds the relevant company documentation, prepares a reply, and sometimes sends the ticket to another team.

Our future application will help the support agent perform those steps. It may eventually use deterministic rules, language models, retrieval, LangGraph, tools, MCP, and a carefully evaluated multi-agent workflow. However, Day 1 does not implement those technologies. Day 1 defines the problem that those technologies may later solve.

## Why don't we start by coding?

Suppose we immediately build an agent that drafts replies. Later, we learn that drafting is already fast and the actual delay comes from waiting for security approval. The application would work technically but solve the wrong problem.

An FDE avoids this by first answering:

1. Who experiences the problem?
2. What do they do today?
3. Where might time, quality, or safety be lost?
4. What improvement should the customer experience?
5. How will we know whether the improvement happened?
6. What must the system never do?

This is not paperwork before engineering. It prevents expensive engineering in the wrong direction.

## Important Day 1 terms

### Customer problem

A customer problem is a difficulty inside a real workflow. It should describe what makes the user's work slow, expensive, inconsistent, or risky.

For Northstar, the possible problem is not “we do not have an AI agent.” The possible problem is that support agents may spend too much time classifying tickets, searching for approved information, preparing useful replies, and deciding where tickets should go.

We say **possible problem** because we have not interviewed the fictional stakeholders or measured their workflow yet. Day 2 will separate known scenario facts from assumptions.

### Output

An output is something the system produces.

Examples include:

- a predicted ticket category;
- a list of retrieved documents;
- a generated response draft;
- a request for human approval.

Outputs show that software performed work. They do not prove that the customer's situation improved.

### Outcome

An outcome is the improvement experienced by the customer after using the system.

For example, if an agent generates a response in two seconds but the response is wrong, unsupported, or never approved, the output exists but the desired outcome did not happen. A useful outcome would be that the support agent reaches a correct, approved first response faster and with suitable evidence.

### Metric

A metric is a defined measurement used to compare the workflow before and after a change.

Our candidate metric is the **median elapsed time from ticket arrival to an approved first useful response**. “Median” means the middle observed value after ordering all measured response times. It is often more representative than an average when a few unusual tickets take a very long time.

We have not selected a numerical target because we do not yet know Northstar's current response time.

### Guardrail

A guardrail is a condition that must remain safe or acceptable while another metric improves.

If we optimize only speed, the application might recommend a fast but incorrect reply or fail to escalate a security ticket. Therefore, routing correctness, evidence quality, and unauthorized-action rate are guardrails. Faster is acceptable only when those protections remain within agreed limits.

### Assumption

An assumption is something we currently believe but have not verified.

“Documentation search is the largest delay” is an assumption. We must not present it as a customer fact until interviews or measurements support it. FDEs explicitly track assumptions because hidden assumptions often cause failed projects.

## The Northstar workflow today

This is our initial understanding from the fictional scenario:

1. A customer submits a support ticket.
2. A support agent reads it.
3. The agent identifies its category and urgency.
4. The agent searches internal documentation or previous cases.
5. The agent prepares a first response.
6. The agent decides whether support can handle it or another team must become involved.
7. The response is reviewed or sent according to company policy.

We have not yet measured which step causes the greatest delay. We will investigate that instead of guessing.

## Concrete example

### Incoming ticket

> “Our administrator cannot sign in after enforcing SSO. Error E-1042 appears for every employee. Please disable SSO immediately because payroll closes today.”

### What an unsafe application might do

It might classify this as urgent, invent a troubleshooting answer, or attempt to disable SSO because the customer requested it. That would be fast but potentially incorrect and dangerous.

### What our planned copilot should eventually do

1. Identify the ticket as a high-impact authentication problem.
2. Preserve the tenant and requester identity.
3. Retrieve authorized documentation that specifically addresses error `E-1042`.
4. Present evidence and a suggested response to the support agent.
5. Escalate according to deterministic security/account policy.
6. Refuse to change SSO directly.
7. Require an authorized human before any external response or account-changing action.

This example explains why we will later study keyword search, vector search, routing, tools, approvals, and observability. It does not yet prove which implementation is best.

## Customer outcome selected for the scenario

> Help Northstar support agents reduce the median time from ticket arrival to an approved, evidence-backed first useful response, while preserving correct routing and preventing unauthorized external actions.

### Breaking the statement down

| Question | Answer |
| --- | --- |
| Who should benefit? | Northstar support agents |
| Which workflow changes? | Ticket triage and preparation of the first useful response |
| What should improve? | Median elapsed time should decrease |
| What quality must remain? | Correct routing and evidence-backed responses |
| What must never happen? | An unauthorized external or account-changing action |
| What is still unknown? | Current baseline, numerical target, and which workflow step is the largest delay |

## What did the FDE actually do on Day 1?

1. Created a realistic customer setting instead of a generic chatbot idea.
2. Described the user's current workflow in plain language.
3. Distinguished software outputs from customer outcomes.
4. Proposed one measurable outcome without inventing a numerical target.
5. Added quality and safety guardrails so speed cannot reward harmful behavior.
6. Documented unresolved questions rather than disguising them as facts.
7. Deferred framework selection until later evidence establishes a need.

## How this helps in different companies

### In an MNC

An FDE may need agreement from support leadership, security, legal, identity teams, platform teams, and business owners. A precise outcome and explicit guardrails let those groups review the same proposed change. This reduces the risk that a locally successful prototype violates a broader company requirement.

### In a startup

The company has limited time, money, and engineers. Starting with the outcome prevents spending several weeks on an impressive agent that users do not need. A clear metric also helps founders decide whether the feature deserves further investment.

## What Day 1 did not do

- No application backend or frontend was created.
- No model was called.
- No LangGraph workflow was implemented.
- No vector database was selected.
- No MCP server was created.
- No multi-agent system was created.

Those are later engineering steps. Day 1 created the problem definition that will be used to judge whether those steps are useful.

## Completion evidence

- The scenario can be understood without another repository.
- The current workflow and a concrete example are documented.
- Output, outcome, metric, guardrail, and assumption are explained.
- The proposed outcome names the user, workflow, desired change, and protections.
- Unknowns are preserved for Day 2 discovery.

## Next day

Day 2 will create a fact-versus-assumption register and detailed stakeholder questions. We will simulate how an FDE interviews support, security, and engineering stakeholders instead of inventing their needs.
