#!/usr/bin/env sh
source ./scripts/shared.sh

echo "┏━━━ 🧹 $PACKAGE_NAME: clean  ━━━━━━━━━━━━━━━━━━━"
rimraf ./dist
