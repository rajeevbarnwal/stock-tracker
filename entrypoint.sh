#!/bin/bash
node backend/index.js &
sleep 5  # Wait for backend to start
exec serve -s frontend/build -l 3000
