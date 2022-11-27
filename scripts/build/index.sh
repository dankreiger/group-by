
#!/usr/bin/env sh

npm run clean
echo "┏━━━ 📦 build ━━━━━━━━━━━━━━━━━━━"
tsc && rollup -c