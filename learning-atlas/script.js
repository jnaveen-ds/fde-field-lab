const phases = {
  1: {
    outcome: 'A customer discovery pack, measurable outcome, and scoped architecture.',
    days: [
      ['FDE role & baseline', 'Define the delivery loop and assess your current evidence.', 'Keeps customer impact above framework complexity.', 'MNC: aligns teams. Startup: focuses scarce effort.', 'Self-assessment and outcome statement.'],
      ['Facts vs hypotheses', 'Separate the scenario’s evidence from assumptions.', 'Prevents invented requirements from becoming architecture.', 'MNC: formal discovery. Startup: fewer wrong bets.', 'Fact and assumption register.'],
      ['Stakeholder discovery', 'Prepare questions for support, security, and engineering.', 'Surfaces conflicting needs and hidden constraints.', 'MNC: stakeholder alignment. Startup: direct user learning.', 'Interview guide and simulated answers.'],
      ['Workflow map', 'Map ticket arrival through resolution, delay, and risk.', 'Finds the bottleneck worth solving.', 'MNC: process review. Startup: fastest value target.', 'Current-state workflow diagram.'],
      ['Requirements & non-goals', 'Write prioritized stories and testable acceptance criteria.', 'Turns ambiguity into a delivery contract.', 'MNC: governance. Startup: scope control.', 'Requirements and non-goals.'],
      ['Metric & architecture', 'Define a baseline, trust boundaries, and first ADR.', 'Connects technical choices to an outcome and risk.', 'MNC: reviewability. Startup: simplest viable design.', 'Metric definition, context diagram, ADR.'],
      ['Customer gate', 'Review claims, repair gaps, and rest.', 'Depth is more valuable than advancing by date.', 'Both: stops weak foundations from propagating.', 'Reviewed discovery pack.']
    ]
  },
  2: {
    outcome: 'A tested ticket workflow through UI, API, database, and human review.',
    days: [
      ['Domain model', 'Define ticket, recommendation, review, and audit states.', 'Creates shared language and legal state transitions.', 'MNC: ownership boundaries. Startup: less rework.', 'Domain glossary and transition diagram.'],
      ['API contract', 'Design requests, responses, errors, and idempotency.', 'Lets components and integrations evolve safely.', 'MNC: cross-team contract. Startup: parallel work.', 'API examples and error table.'],
      ['Relational design', 'Choose keys, constraints, relationships, and indexes.', 'Reliable agents depend on durable business state.', 'MNC: audit/consistency. Startup: avoids prototype traps.', 'ER diagram and query rationale.'],
      ['Migration & repository', 'Implement schema evolution and tested persistence.', 'Makes data changes repeatable and recoverable.', 'MNC: operational control. Startup: safe iteration.', 'Migration and repository tests.'],
      ['Ticket + rules', 'Implement intake and deterministic triage.', 'Creates the cheapest useful baseline.', 'MNC: reviewable slice. Startup: early value.', 'API flow and rule tests.'],
      ['Human review', 'Persist approve, reject, edit, and decision history.', 'Keeps accountability outside model judgment.', 'MNC: audit. Startup: fast feedback.', 'Review API and immutable history tests.'],
      ['Operator UI', 'Build intake, recommendation, review, and history screens.', 'A workflow is useful only when operators can use it.', 'MNC: adoption. Startup: customer demo.', 'Accessible browser flow.'],
      ['Product gate', 'Test invalid, duplicate, and conflicting operations; demo.', 'Boundary behavior distinguishes systems from demos.', 'Both: reduces expensive state defects.', 'End-to-end test and retrospective.']
    ]
  },
  3: {
    outcome: 'An evaluated model workflow with routing, fallback, checkpoint, and approval.',
    days: [
      ['Dataset & baseline', 'Label tickets and score deterministic triage.', 'AI requires an independent comparison.', 'MNC: governance. Startup: anti-hype discipline.', 'Dataset and baseline report.'],
      ['Model contract', 'Define structured output and malformed-response handling.', 'Models are unreliable upstream dependencies.', 'MNC: provider portability. Startup: fewer failures.', 'Interface, schema, and invalid-output tests.'],
      ['Model experiment', 'Version prompts; compare small and strong models.', 'Routing must be supported by quality and cost evidence.', 'MNC: spend policy. Startup: protects margins.', 'Quality/latency/cost comparison.'],
      ['Routing & fallback', 'Choose by task and threshold; preserve rule fallback.', 'The biggest model is rarely the right default.', 'MNC: approved routing. Startup: responsive UX.', 'Routing and outage tests.'],
      ['State + LangGraph', 'Separate durable history; implement typed state and nodes.', 'Makes real branching inspectable without context bloat.', 'MNC: governed execution. Startup: controlled iteration.', 'State diagram and node tests.'],
      ['Checkpoint + approval', 'Add conditional edges, run ID, interrupt, and resume.', 'Long workflows and writes must pause and recover safely.', 'MNC: audit/recovery. Startup: prevents duplicate harm.', 'Route, restart, approve/reject tests.'],
      ['AI gate', 'Evaluate output and trajectory; remove unjustified complexity.', 'A graph is useful only when evidence supports it.', 'Both: lowers risk and maintenance.', 'Eval report and architecture decision.']
    ]
  },
  4: {
    outcome: 'Permission-aware hybrid retrieval with citations and incremental indexing.',
    days: [
      ['Ingestion', 'Build source manifest, parser, normalization, and failures.', 'Retrieval quality begins before embeddings.', 'MNC: governed sources. Startup: repeatable onboarding.', 'Manifest and malformed-source tests.'],
      ['Chunking & metadata', 'Use semantic boundaries, IDs, hashes, versions, and ACL data.', 'Chunks need meaning, provenance, and updateability.', 'MNC: lineage. Startup: avoids full re-indexing.', 'Chunk samples and metadata contract.'],
      ['Vector index', 'Embed chunks and measure recall on labelled questions.', 'Semantic search must be evaluated, not assumed.', 'MNC: large-corpus discovery. Startup: no model training.', 'Vector recall baseline.'],
      ['Keyword index', 'Build BM25 and test exact error codes and names.', 'Embeddings often miss rare exact identifiers.', 'MNC: product/policy codes. Startup: cheap precision.', 'Keyword benchmark.'],
      ['Hybrid + citations', 'Fuse ranks, rerank, budget context, cite, and abstain.', 'Different retrieval methods cover different failures.', 'MNC: explainability. Startup: stronger trust.', 'Hybrid and citation tests.'],
      ['ACL + updates', 'Filter before model exposure; update and delete incrementally.', 'Permissions and freshness are retrieval properties.', 'MNC: tenant isolation. Startup: safe customer growth.', 'Cross-tenant, freshness, deletion tests.'],
      ['Retrieval gate', 'Compare vector, keyword, and hybrid quality and cost.', 'Use only complexity that measurably improves evidence.', 'Both: informed architecture choice.', 'Retrieval comparison report.']
    ]
  },
  5: {
    outcome: 'Tenant-safe tools, approval-bound writes, and one read-only MCP capability.',
    days: [
      ['Identity & tenancy', 'Define authentication, RBAC, tenant, and audit models.', 'Tools cannot be safe without an identity boundary.', 'MNC: SSO/compliance. Startup: customer trust.', 'Role matrix and isolation tests.'],
      ['Threat model', 'Analyze injection, content isolation, PII, and secrets.', 'Tickets and retrieved documents are untrusted.', 'MNC: security review. Startup: avoids trust failure.', 'Threat model and adversarial cases.'],
      ['Typed tools', 'Separate read/write tools; validate and authorize arguments.', 'Model text must never directly become a side effect.', 'MNC: least privilege. Startup: controlled automation.', 'Tool contracts and blocked-write tests.'],
      ['Webhook safety', 'Verify signatures, prevent replay, dedupe, and reconcile.', 'External events are duplicated, delayed, and reordered.', 'MNC: integration reliability. Startup: fewer support incidents.', 'Replay and reconciliation tests.'],
      ['Approval binding', 'Persist immutable proposal, expiry, approver, and decision.', 'Approval must apply to the exact action executed.', 'MNC: audit/compliance. Startup: lowers business risk.', 'Stale/edit/reject/execute tests.'],
      ['MCP capability', 'Expose one allowlisted read resource/tool through MCP.', 'MCP helps after a capability contract is understood.', 'MNC: reuse across hosts. Startup: fewer adapters.', 'MCP integration and unavailable-server test.'],
      ['Enterprise gate', 'Run tenant, tool, approval, and hostile-content tests.', 'Security is behavior, not a design-document claim.', 'Both: produces trust evidence.', 'Adversarial suite and gate decision.']
    ]
  },
  6: {
    outcome: 'An observable staged service and an evidence-based single-versus-multi-agent decision.',
    days: [
      ['Agent traces', 'Instrument routes, retrieval, tools, approvals, tokens, and cost.', 'Operators need a sanitized anatomy of every run.', 'MNC: central observability. Startup: faster debugging.', 'Trace and dashboard.'],
      ['Failure controls', 'Add timeouts, retry classification, backoff, and breakers.', 'Every dependency eventually fails.', 'MNC: SLOs. Startup: provider resilience.', 'Injected timeout/outage tests.'],
      ['Queue & recovery', 'Reconcile side effects and recover interrupted work.', 'Retries must not duplicate customer actions.', 'MNC: failure-domain control. Startup: fewer manual repairs.', 'Recovery exercise.'],
      ['CI & deployment', 'Containerize, gate tests/migrations, stage, and roll back.', 'Reproducibility turns code into an operable service.', 'MNC: release governance. Startup: safe iteration.', 'Passing CI and staged deployment.'],
      ['Operate a game day', 'Define SLO, alert, load test, runbook, and incident exercise.', 'Production ownership includes degraded behavior.', 'MNC: operations practice. Startup: outage readiness.', 'Load report and postmortem.'],
      ['Bounded specialists', 'Implement one reviewer/specialist variant with typed handoff.', 'Tests a concrete reason for multiple agents.', 'MNC: maps role boundaries. Startup: controlled experiment.', 'Multi-agent variant and trace eval.'],
      ['Architecture challenge', 'Compare quality, latency, cost, and failures; keep the winner.', 'Multiple agents must beat a simpler design.', 'Both: prevents fashionable complexity.', 'Comparison report and ADR.']
    ]
  },
  7: {
    outcome: 'A customer-facing demonstration, measured pilot story, and defensible portfolio case study.',
    days: [
      ['Pilot & feedback', 'Run a customer-style demo, capture feedback, prioritize one change.', 'Delivery ends with adoption and observed learning.', 'MNC: controlled pilot. Startup: product learning.', 'Demo, feedback, and iteration decision.'],
      ['Impact & case study', 'Report before/after, defend architecture, and reassess gaps.', 'Converts implementation into credible FDE evidence.', 'MNC: panel/executive communication. Startup: customer value story.', 'Case study and updated rubric.']
    ]
  }
}

const firstDay = { 1: 1, 2: 8, 3: 16, 4: 23, 5: 30, 6: 37, 7: 44 }
const grid = document.querySelector('#day-grid')
const outcome = document.querySelector('#week-outcome')
const label = outcome.previousElementSibling
const tabs = [...document.querySelectorAll('[data-week]')]

function detail(name, value) {
  return `<span class="detail-row"><b>${name}</b><span>${value}</span></span>`
}

function renderPhase(phaseNumber) {
  const phase = phases[phaseNumber]
  outcome.textContent = phase.outcome
  label.textContent = `PHASE ${phaseNumber} OUTCOME`
  grid.innerHTML = phase.days.map((day, index) => {
    const number = firstDay[phaseNumber] + index
    const lesson = number === 1 ? '<a class="lesson-link" href="days/day-01.html">OPEN DAY 1 VISUAL LESSON →</a>' : ''
    return `<details class="day-card"><summary><span class="day-number">DAY ${String(number).padStart(2, '0')}</span><h3>${day[0]}</h3><span class="day-summary">${day[1]}</span><span class="day-prompt">OPEN: WHY + WHERE + EVIDENCE</span></summary><span class="day-detail">${detail('WHY THIS HELPS', day[2])}${detail('MNC & STARTUP USE', day[3])}${detail('PROOF FOR THE DAY', day[4])}${lesson}</span></details>`
  }).join('')
}

tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(candidate => candidate.setAttribute('aria-selected', String(candidate === tab)))
  renderPhase(Number(tab.dataset.week))
}))

renderPhase(1)
