# Skills

RoRelta agent skills. Built on, and designed to sit beside, [mattpocock/skills](https://github.com/mattpocock/skills).

## Install

```bash
# these skills
vpx skills add rodelta/skills

# the upstream skills they depend on
vpx skills add mattpocock/skills
```

One skill only: `vpx skills add rodelta/skills --skill garden`.

## Model-invoked

- **[garden](./skills/garden/SKILL.md)**: Picks and makes the one change that most improves the codebase long term, autonomously, up to a ready PR. With an arg, proposes options in that area first.

## Dev

```bash
scripts/link-skills.sh     # symlink skills here into ~/.claude/skills and ~/.agents/skills
scripts/sync-upstream.sh   # local reference copy of mattpocock/skills in upstream/
```
