#!/usr/bin/env bash
set -e

# 1) Health check
echo "→ Checking health endpoint…"
curl --fail http://localhost:4000/ && echo "  OK"

# 2) Demo ticker
echo "→ Checking /api/stock/DEMO…"
curl --fail http://localhost:4000/api/stock/DEMO && echo "  OK"

echo "✅ Integration tests passed"
