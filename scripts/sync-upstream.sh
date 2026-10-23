#!/usr/bin/env bash
set -euo pipefail

# Clones or updates mattpocock/skills into upstream/ (gitignored) as a local
# reference for conventions and for skills worth forking.

REPO="$(cd "$(dirname "$0")/.." && pwd)"
DIR="$REPO/upstream/mattpocock-skills"

if [ -d "$DIR/.git" ]; then
  git -C "$DIR" pull --ff-only
else
  git clone --depth 1 https://github.com/mattpocock/skills.git "$DIR"
fi
