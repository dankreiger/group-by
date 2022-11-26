#!/usr/bin/env sh
source ./scripts/shared.sh

echo "┏━━━ format  ━━━━━━━━━━━━━━━━━━━"
npx sort-package-json && npx prettier src --single-quote --write