#!/usr/bin/env sh
source ./scripts/shared.sh

echo "┏━━━ 🧑‍🍳 $PACKAGE_NAME prepare ━━━━━━━"
husky install
yarn build