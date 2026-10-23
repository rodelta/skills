#!/usr/bin/env bash
set -euo pipefail

# Symlinks every skill in this repo into the local harness skill dirs, so edits
# here are live without reinstalling. Re-run after adding or renaming a skill.

REPO="$(cd "$(dirname "$0")/.." && pwd)"
DESTS=("$HOME/.claude/skills" "$HOME/.agents/skills")

for DEST in "${DESTS[@]}"; do
  mkdir -p "$DEST"
  while IFS= read -r -d '' skill_md; do
    src="$(dirname "$skill_md")"
    target="$DEST/$(basename "$src")"
    if [ -e "$target" ] && [ ! -L "$target" ]; then
      rm -rf "$target"
    fi
    ln -sfn "$src" "$target"
    echo "linked $(basename "$src") -> $src ($DEST)"
  done < <(find "$REPO/skills" -name SKILL.md -print0)
done
