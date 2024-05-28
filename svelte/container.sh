#!/bin/bash

# Check if the Docker image ID is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <docker_image_id>"
  exit 1
fi

# Assign the first argument to the DOCKER_IMAGE_ID variable
DOCKER_IMAGE_ID=$1

# Run the Docker container with port mapping
docker run -p 80:3000 $DOCKER_IMAGE_ID
