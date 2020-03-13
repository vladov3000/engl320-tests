#!/bin/bash
#port 8080 is mapped to port 3000 inside the container
docker run --rm -v ~/engl320-tests/:/engl320-tests -p 8080:3000 engl320-tests