#!/usr/bin/env bash

# Build React app
yarn build

# Where branch am I?
CURRENT_BRANCH="$(git branch | grep \* | cut -d ' ' -f2)"

# Default domain
DOMAIN="rnw-github-${CURRENT_BRANCH}.surge.sh"

# Change domain for master branch
if [ "$CURRENT_BRANCH" == "master" ]; then
  DOMAIN="rnw-github.surge.sh"
fi

# Deploy
echo "Deploying to Surge..."
./node_modules/.bin/surge --project ./build --domain ${DOMAIN}
