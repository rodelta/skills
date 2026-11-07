---
name: refine
description: Iteratively improve the codebase by removing indirection, simplifying, and moving towards a more elegant codebase. Run before simplify, code-review, or test-writing rounds, or whenever structural moves would have the most leverage.
---

The best part is no part.
Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.

Iteratively study the relevant code (user named, branch, or uncommitted changes) to find improvements towards an elegant, simple codebase.
Fix weird logic, reduce indirection, duplication, unnecessary abstraction, or redundancy.
Names and comments earn elegance the same way: nothing left to take away.
Look beyond the immediate code — simplification often lives higher in the logic tree, or in architecture outside the changed lines. Question whether a module earns its existence, whether responsibilities belong where they are, whether the dependency direction is right.
If an entire layer or abstraction can be collapsed — propose it. Every boundary should justify itself.

Walk through findings one at a time — sometimes previous fixes uncover new opportunities.
For each one, show options and recommendations, then act on feedback.
The work is finished when there is nothing left to take away — a fresh pass yields no new findings — or the user agrees more effort is not worth the improvements.

Remember: The best part is no part.
