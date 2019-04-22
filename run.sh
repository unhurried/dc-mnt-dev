cd $(dirname $0)
docker-compose up -d
docker-compose exec shell bash
docker-compose down
