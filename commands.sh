# Stop and remove existing containers
docker compose down

# Rebuild without cache
docker compose build --no-cache

# Start and follow logs
docker compose up --force-recreate 