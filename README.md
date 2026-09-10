# FDE Field Lab

An evidence-based learning lab for becoming a **Forward Deployed Engineer (FDE)** by solving realistic customer problems end to end.

This is not a collection of chatbot demos. Every scenario follows the complete FDE loop:

```text
Discover → Define → Build → Integrate → Deploy → Operate → Measure → Iterate
```

## What an FDE does

A Forward Deployed Engineer works at the boundary between customers, product, and engineering. The role combines:

- customer discovery and requirement gathering;
- rapid full-stack prototyping;
- data and enterprise-system integration;
- AI and agent engineering when the problem requires it;
- secure production deployment and operation;
- debugging with users and measuring business impact.

The goal is not to learn every framework. The goal is to repeatedly turn ambiguous customer problems into reliable, measurable solutions.

## Learning method

Each milestone uses the same cycle:

1. **Learn** the minimum concepts needed for the milestone.
2. **Explain** the design and trade-offs in your own words.
3. **Build** the smallest complete vertical slice.
4. **Verify** behavior with tests, evaluations, and operational checks.
5. **Demonstrate** the workflow as if presenting it to a customer.
6. **Reflect** on feedback, failures, and the next iteration.

Completion means producing evidence, not merely reading about a topic. See the [competency rubric](docs/competency-rubric.md).

Production agent work follows the repository's [agentic AI engineering principles](docs/agentic-ai-principles.md): explicit model routing, typed tools, separated state and memory, controlled orchestration, trace evaluations, deterministic approval gates, and secure observability.

The main pathway is a single-source [45-day FDE intensive](docs/45-day-roadmap.md). The interactive [FDE Field Atlas](learning-atlas/index.html) explains its daily purpose, MNC and startup applications, LangGraph anatomy, hybrid indexing, and production principles visually.

## Scenario roadmap

| Order | Scenario | Primary FDE skills |
| --- | --- | --- |
| 1 | Customer support copilot | Discovery, full-stack delivery, retrieval, tool use, human approval, evaluation |
| 2 | Contract risk review | Document pipelines, citations, structured outputs, privacy, auditability |
| 3 | Incident response assistant | Observability, runbooks, safe tools, permissions, failure handling |
| 4 | Data operations assistant | SQL, semantic layers, access control, data quality, visualization |
| 5 | Cross-functional workflow | Event-driven integration and justified multi-agent coordination |

We start with one controlled agent. Memory, MCP, autonomous execution, and multi-agent orchestration are introduced only when a scenario provides a clear reason for them.

## Curriculum

The complete progression is documented in [docs/curriculum.md](docs/curriculum.md). It covers:

- software, data, and distributed-system foundations;
- customer discovery and solution architecture;
- LLM applications, retrieval, tools, agents, and evaluations;
- authentication, authorization, integrations, and governance;
- cloud delivery, CI/CD, observability, reliability, and security;
- customer rollout, support, adoption, and business-impact measurement.

## Current work

We are beginning [Scenario 01: Customer Support Copilot](scenarios/01-support-copilot/brief.md). Track daily evidence in the [learning progress index](progress/README.md); Day 1 includes a dedicated [visual lesson](learning-atlas/days/day-01.html) and [worksheet](progress/day-01.md).

The first milestone is **customer discovery and problem definition**. We will not choose an agent framework or write application code until the workflow, constraints, success metrics, and first vertical slice are clear.

## Repository structure

```text
docs/                         Curriculum, rubric, and shared engineering guidance
  agentic-ai-principles.md    Production rules for models, tools, state, and agents
  45-day-roadmap.md           Intensive sequence, scope, gates, and outcomes
learning-atlas/               Interactive HTML infographic
progress/                     Daily exercises, evidence, and Git snapshots
scenarios/                    Customer briefs and scenario-specific evidence
  01-support-copilot/
    brief.md                  Initial discovery brief and milestone plan
```

Application, infrastructure, evaluation, and runbook directories will be added when their first real artifact is required.
