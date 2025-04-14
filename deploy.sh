cd /home/ubuntu/Bac-A-Sable-Alexandre
git switch docker_deploy
git pull
docker stop $(docker ps -a -q)
docker compose up --build -d
docker system prune -a -f