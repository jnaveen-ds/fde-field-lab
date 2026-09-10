# Agentic AI Engineering Principles

These principles govern agent implementations in every scenario. They describe engineering contracts, not a required framework.

## 1. Model layer

Treat model selection as a policy, not a hard-coded preference for the largest model.

- Route classification, extraction, and formatting to the smallest model that meets evaluated quality targets.
- Use a stronger model only for tasks that demonstrate a reasoning-quality benefit.
- Consider task risk, context limits, latency, availability, and cost in routing decisions.
- Validate structured outputs against a schema.
- Define behavior for timeout, rate limiting, malformed output, and provider outage.
- Record the route and reason in the trace without exposing private content.

Routing is complete only when evaluations show that the chosen model meets the task's acceptance threshold.

## 2. Tools

Treat every tool as an external API with a strict contract.

- Define typed, narrow inputs and machine-readable success and error results.
- Separate read-only tools from mutating tools so policy can reason about risk.
- Authenticate and authorize tools in application code.
- Apply timeouts, idempotency, and replay protection where appropriate.
- Never let model-generated text bypass input validation.
- Return the minimum data needed by the next workflow step.

Tools that move money, delete data, change permissions, communicate externally, or affect production require deterministic approval and audit controls.

## 3. Memory and state

Keep these concepts separate:

- **Workflow state:** the current run's step, inputs, decisions, attempts, and pending approvals.
- **Durable history:** business records and audit events that must survive the run.
- **Long-term memory:** selectively retrieved knowledge or prior facts relevant to a future step.

Do not put all history into prompts or a vector database. Use relational storage, object storage, search, or vector retrieval according to the data and access pattern. Apply ownership, retention, deletion, and provenance rules to every store.

## 4. Orchestration

Prefer explicit workflows over unrestricted autonomous loops.

- Start with ordinary application code for linear workflows.
- Introduce a state machine or graph when branching, cycles, checkpoints, interruption, or recovery create real complexity.
- Make termination conditions and maximum attempts explicit.
- Persist enough state to resume safely.
- Make side effects idempotent before retrying them.
- Keep deterministic business and security rules outside model judgment.

LangGraph is one possible implementation, not a default requirement. The architecture must remain understandable without knowledge of a particular framework.

## 5. Evaluations

Evaluate both the outcome and the trajectory used to produce it.

### Final-output evaluation

- task correctness and completeness;
- groundedness and citation validity;
- safety, policy compliance, and appropriate abstention;
- customer-relevant quality measures.

### Trace-level evaluation

- correct model route;
- relevant retrieval and minimal context selection;
- valid tool choice, arguments, and result handling;
- correct branching, retry, escalation, and approval behavior;
- absence of forbidden side effects or data access.

Use independently labelled examples, adversarial cases, and regression thresholds. Compare complex agents against a deterministic or single-call baseline.

## 6. Approval gates

Human-in-the-loop control is an application feature, not an instruction in a prompt.

- Determine approval from tool risk and policy before execution.
- Persist the exact proposed action and immutable arguments.
- Show the approver the effect, target, evidence, and relevant risk.
- Bind approval to that exact action and reject stale or modified requests.
- Record approver identity, decision, and timestamp.
- Support rejection, editing, expiry, and safe resumption.

Approval is mandatory for high-impact writes unless a later customer-approved policy explicitly establishes a safe autonomous boundary.

## 7. Reliability

Treat model, retrieval, and tool calls as unreliable upstream dependencies.

- Set timeouts and distinguish retryable from permanent failures.
- Use bounded retries with backoff and jitter only for retryable operations.
- Ensure retries cannot duplicate side effects.
- Provide fallbacks such as a smaller workflow, cached safe result, deterministic baseline, or human escalation.
- Use circuit breakers or load shedding when repeated upstream failure threatens the service.
- Test degraded modes and recovery, not only happy paths.

## 8. Cost, latency, and context

- Establish quality, latency, and cost budgets per workflow and step.
- Pass only the instructions, state, and evidence needed for the current step.
- Summarize or retrieve selectively instead of appending full histories.
- Cache only when scope, permissions, freshness, and invalidation are well defined.
- Stream when early output improves user experience without hiding validation or approval boundaries.
- Track token usage and cost by model, customer, scenario, and workflow step.

Optimization must preserve measured quality and security.

## 9. Observability and security

Capture the anatomy of each run while minimizing sensitive data:

- correlation, tenant, user, workflow, and version identifiers;
- step timing, status, model route, token usage, and cost;
- retrieval identifiers and relevance metadata;
- tool name, validated argument summary, result status, and side-effect identifier;
- retries, fallbacks, policy decisions, approvals, and errors.

Do not blindly log prompts, retrieved documents, tool payloads, secrets, or PII. Redact or tokenize sensitive fields, enforce tenant isolation, control trace access, and define retention.

Treat user messages, documents, retrieved text, and tool output as untrusted content. Keep data distinct from system instructions, allowlist tools and destinations, enforce authorization outside the model, and test prompt-injection and exfiltration attempts.

## Review checklist

Before an agent capability is considered complete, answer:

1. Why is a model or agent preferable to a deterministic implementation here?
2. What is the simplest model that meets the evaluated quality threshold?
3. What state is transient, durable, or retrieved, and why?
4. Which tools can mutate state, and where are authorization and approval enforced?
5. Can every side effect be retried safely or reconciled?
6. Do evaluations inspect both the final result and important trace steps?
7. What happens during model, retrieval, or tool failure?
8. Are quality, latency, token use, and cost observable?
9. Can traces be useful without leaking customer data?
10. What measured evidence justifies any orchestration complexity?
