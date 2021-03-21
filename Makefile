docker_compose_bin := $(shell command -v docker-compose 2> /dev/null)
BACKEND_CONTAINER_NAME = backend
FRONTEND_CONTAINER_NAME = frontend

up:
	$(docker_compose_bin) up --no-recreate -d

down:
	$(docker_compose_bin) down

install:
	$(docker_compose_bin) exec "$(BACKEND_CONTAINER_NAME)" yarn install
	$(docker_compose_bin) exec "$(FRONTEND_CONTAINER_NAME)" yarn install

backend-dev:
	$(docker_compose_bin) exec "$(BACKEND_CONTAINER_NAME)" yarn start:debug

frontend-dev:
	$(docker_compose_bin) exec "$(FRONTEND_CONTAINER_NAME)" yarn start

backend-test:
	$(docker_compose_bin) exec "$(BACKEND_CONTAINER_NAME)" yarn test
	$(docker_compose_bin) exec "$(BACKEND_CONTAINER_NAME)" yarn test:e2e

frontend-test:
	$(docker_compose_bin) exec "$(BACKEND_CONTAINER_NAME)" yarn test

production:
	$(docker_compose_bin) exec "$(FRONTEND_CONTAINER_NAME)" yarn build
	$(docker_compose_bin) exec "$(BACKEND_CONTAINER_NAME)" yarn start:prod