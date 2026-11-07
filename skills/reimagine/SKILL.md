---
name: reimagine
description: "Rethink a part of the codebase from first principles, compatibility broken, into a proposal."
argument-hint: "The topic to reimagine: a module, subsystem, or concern."
disable-model-invocation: true
---

Reimagine the topic: design it as if building it today, free of compatibility with what exists, and integrate it as a well-engineered section of the architecture. Aim for a fundamental change that pays off long term: new capabilities, a cleaner architecture, or an unexpected win. The output is a proposal; the code stays as it is until the user picks a direction.

The topic is the argument. Without one, ask for it.

Call the Skill tool with "codebase-design" for the design vocabulary, and use its terms throughout.

## Steps

1. **Map.** Read the topic's code, its callers, `GLOSSARY.md`, and ADRs. Done when you can state the **job** the topic does for the system in one sentence, independent of how it does it today, and list every seam where it meets the rest of the codebase.
2. **Research.** Call the Skill tool with "research" on how others do this job: best practices, published designs, prior art. Done when its findings file cites primary sources.
3. **Diverge.** From the job, first principles, and the research, generate designs. Done when at least three fundamentally different designs exist, one of them a **wildcard** that questions whether the job should exist in its current form. Each states what it enables, what it deletes, and its migration cost.
4. **Propose.** Present the proposal in chat:

   ```markdown
   **Bottom line:** <the recommended design and its biggest win, in one or two sentences>

   **Job:** <the one-sentence job from Map>

   | Design | Enables | Deletes | Migration | Door |
   | ------ | ------- | ------- | --------- | ---- |

   ## Recommended: <name>

   <Target shape as a file tree, call tree, or diagram, then the migration path in ordered steps.>
   ```

   _Door_ is one-way (hard to reverse) or two-way (cheap to walk back).

5. **Grill.** Call the Skill tool with "grilling" to stress-test the recommendation with the user. Done when the user commits to a design, redirects, or drops the topic.
6. **Record.** When the user commits, call the Skill tool with "domain-modeling" to record the decision as an ADR.
