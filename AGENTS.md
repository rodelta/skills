Agent skills, published via [skills.sh](https://skills.sh) (`vpx skills add rodelta/skills`). Conventions follow [mattpocock/skills](https://github.com/mattpocock/skills); run `scripts/sync-upstream.sh` to get a local copy in `upstream/` (gitignored) and read its `CLAUDE.md` and `.agents/` when a convention question comes up.

Before creating or editing a skill, call the Skill tool with "writing-for-agents".

## Tooling

pnpm on Vite+ (`vp`), as in `../dide`. `vp` docs: `node_modules/vite-plus/docs`.

```bash
vp check && vp test # commit gate (pre-commit runs `vp check --fix` on staged files)
vp check --fix      # format markdown, yaml, ts
```

`test/skills.test.ts` enforces the Layout and Invocation rules below. When you add a rule a script can check, add it there.

## Layout

Each skill is `skills/<name>/SKILL.md`, plus `skills/<name>/agents/openai.yaml` for Codex UI metadata. Every skill is listed in `README.md` with its name linked to its `SKILL.md`, grouped into **User-invoked** and **Model-invoked**.

## Invocation

- **User-invoked**: `disable-model-invocation: true` in frontmatter and `policy.allow_implicit_invocation: false` in `agents/openai.yaml`. Description is a one-line human-facing summary.
- **Model-invoked**: omit both. Description is model-facing, carrying the trigger branches.

A skill depends on another by telling the agent to call the Skill tool with its name, one call per skill. Only model-invoked skills can be reached this way.

## Upstream dependencies

Skills here call Matt Pocock's model-invoked skills (`codebase-design`, `tdd`, `code-review`, `domain-modeling`) rather than copying them. `README.md` lists which ones each skill needs. To change one of his skills, fork it into `skills/` under a new name and credit the original in its frontmatter-adjacent first line, so it never collides with the upstream install.

`scripts/link-skills.sh` symlinks every skill here into `~/.claude/skills` and `~/.agents/skills`, so edits are live locally. Re-run it after adding or renaming a skill.
