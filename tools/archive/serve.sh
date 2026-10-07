#!/usr/bin/env bash
# Simple static server for local preview (root-absolute /wp-content paths require docroot = this folder)
cd "$(dirname "$0")/.."
exec python3 -m http.server "${1:-8080}"
