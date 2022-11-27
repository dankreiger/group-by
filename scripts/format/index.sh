#!/usr/bin/env sh

echo "┏━━━ format  ━━━━━━━━━━━━━━━━━━━"
sort-package-json && prettier src --single-quote --write