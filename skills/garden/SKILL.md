---
name: garden
description: "One round of long-term care for the codebase, taken to a ready PR. Use when the user says garden, or asks for a cleanup, tidy-up, or quality pass on the codebase."
---

The job is to care about the long term future of the codebase.
It's done in iterations that fit in 205k context windows, and are merged as PRs.

Bias to long-term benefit over polish. The best part is no part: deleting beats adding.
Take safe and obvious decisions. If something deviates from what a user would expect from a safe improvement run, stop, warn, and ask.
Progress is done in easily digestable iterations.
Orchestrate a team for non-trivial tasks. Keep context lean: use agents smartly to efficiently achieve the goal.

Invocation without args means work autonomously until ready for PR.
With args makes the modification, and if relevant offers options to the user, then work autonomously until PR.

Pick an improvement, orchestrate the implementation, clean and refine it, and prepare the PR. Push when the user confirms.

# Pick

Linter warnings we can clean?
Safe package upgrades or security patches?
Strict typing?
Improvements in tooling?
Faster tests?
Dead code, unnecessary abstractions, duplicate concepts?
Read Keep and decide (no args) or propose (args) an improvement.

# Keep

Maintain a KEEP.md file. It should stay short, efficient and clean, and readable by the devs on the repo.
Its path is in your memory. When it isn't, ask the user where KEEP.md should live (ideally a place every git worktree shares), and save their answer to memory.
It should orient you when you find new data about the codebase, and help orchestrate action
while not relying on notes that degrade over time. Timestamp findings and replace often. Pure and structured.

# Steps

1. **Orient.**
   git status, read KEEP.md, and architecture docs.
2. **Explore.**
   Update obsolete data. Launch info agents to learn more about the codebase. Update your Knowledge.
   Launch info agents to understand the task for the chosen improvement.
   Understand your decision tree, explore more when needed.
3. **Pick.**
   Make safe, long-term beneficial decisions. Make changes that are easy to review and trust.
   Propose the best options, each labelled with its door (one-way or two-way) and blast radius.
   When invoked with args, wait for user feedback and decision.
   When invoked with no arg, decide yourself on the best option that does the job.
4. **Build.**
   Orchestrate the implementation.
   Be smart about commits so we have useful, efficient commit branches.
5. **Refine.**
   Clean up after yourself. Do a refinement pass to go over the work and iterate on its quality, simplicity, usefulness.
6. **Review.**
   Call the Skill tool with "code-review" for a round of review over your code.
7. **PR**
   Call the Skill tool with "pr" to write the PR body.
   Report:
   - the Merge Danger (door and blast radius) from the PR body.
   - the change and why it matters long term.
   - scope

On user confirmation, push the PR and help the process of review & merging
Offer recommendations and candidate to fix next, if you have either.
