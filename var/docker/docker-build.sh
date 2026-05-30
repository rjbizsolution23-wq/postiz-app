#!/bin/bash

set -o xtrace

docker rmi localhost/instapost || true
docker build --target dist -t localhost/instapost -f Dockerfile.dev .
docker build --target devcontainer -t localhost/instapost-devcontainer -f Dockerfile.dev .
