cd %~dp0\docker
docker-compose up -d
docker-compose exec shell bash
docker-compose down
