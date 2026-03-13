#!/usr/bin/env bash

set -Eeuo pipefail

APP_ROOT="${APP_ROOT:-$HOME/verify-business}"
DEPLOY_BRANCH="${DEPLOY_BRANCH:-main}"
REPO_URL="${REPO_URL:-}"
INSTALL_CMD="${INSTALL_CMD:-npm ci}"
BUILD_CMD="${BUILD_CMD:-npm run build}"

echo "Starting deploy for branch: ${DEPLOY_BRANCH}"
echo "Application root: ${APP_ROOT}"

mkdir -p "${APP_ROOT}"

if [ ! -d "${APP_ROOT}/.git" ]; then
  if [ -z "${REPO_URL}" ]; then
    echo "REPO_URL is required for the first deploy."
    exit 1
  fi

  echo "Cloning repository..."
  git clone --branch "${DEPLOY_BRANCH}" "${REPO_URL}" "${APP_ROOT}"
fi

cd "${APP_ROOT}"

echo "Fetching latest changes from origin/${DEPLOY_BRANCH}..."
git fetch origin "${DEPLOY_BRANCH}"
git checkout "${DEPLOY_BRANCH}"
git reset --hard "origin/${DEPLOY_BRANCH}"

echo "Installing dependencies..."
if [ -f package-lock.json ]; then
  eval "${INSTALL_CMD}"
else
  npm install
fi

echo "Building application..."
eval "${BUILD_CMD}"

echo "Restarting Passenger application..."
mkdir -p tmp
touch tmp/restart.txt

echo "Deployment completed successfully."
