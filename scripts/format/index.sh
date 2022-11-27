#!/usr/bin/env sh

echo "┏━━━ format  ━━━━━━━━━━━━━━━━━━━"
npx sort-package-json && npx prettier src --single-quote --write