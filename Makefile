image_app = oneonone

build: 
	docker build -t $(image_app) .

up:
	docker-compose up

up-d:
	docker-compose up -d

stop:
	docker-compose stop

down:
	docker-compose down

down-v:
	docker-compose down -v