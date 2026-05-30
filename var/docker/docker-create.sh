#!/usr/bin/env bash

docker kill instapost || true 
docker rm instapost || true 
docker create --name instapost -p 3000:3000 -p 4200:4200 localhost/instapost
