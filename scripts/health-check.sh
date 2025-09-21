#!/bin/bash
set -e

# Health check script
URL=${1:-"http://localhost:3000"}
MAX_ATTEMPTS=${2:-30}
SLEEP_DURATION=${3:-5}

echo "🔍 Performing health check on: $URL"

for i in $(seq 1 $MAX_ATTEMPTS); do
    echo "Attempt $i/$MAX_ATTEMPTS..."
    
    if curl -f -s "$URL/health" > /dev/null; then
        echo "✅ Health check passed!"
        exit 0
    fi
    
    if [ $i -lt $MAX_ATTEMPTS ]; then
        echo "⏳ Waiting ${SLEEP_DURATION}s before retry..."
        sleep $SLEEP_DURATION
    fi
done

echo "❌ Health check failed after $MAX_ATTEMPTS attempts"
exit 1
