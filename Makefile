docker_compose_bin := $(shell command -v docker-compose 2> /dev/null)
BACKEND_CONTAINER_NAME = backend
FRONTEND_CONTAINER_NAME = frontend

up:
	$(docker_compose_bin) up --no-recreate -d

down:
	$(docker_compose_bin) down

install: up
	$(docker_compose_bin) exec "$(BACKEND_CONTAINER_NAME)" yarn install
	$(docker_compose_bin) exec "$(FRONTEND_CONTAINER_NAME)" yarn install

backend-dev: install
	$(docker_compose_bin) exec "$(BACKEND_CONTAINER_NAME)" yarn start:debug

frontend-dev: install
	$(docker_compose_bin) exec "$(FRONTEND_CONTAINER_NAME)" yarn start

backend-test: install
	$(docker_compose_bin) exec "$(BACKEND_CONTAINER_NAME)" yarn test

frontend-test: install
	$(docker_compose_bin) exec "$(BACKEND_CONTAINER_NAME)" yarn test

e2e:
	$(docker_compose_bin) -f docker-compose.e2e.yml up --abort-on-container-exit
	$(docker_compose_bin) -f docker-compose.e2e.yml down

production: intall
	$(docker_compose_bin) exec "$(FRONTEND_CONTAINER_NAME)" yarn build
	$(docker_compose_bin) exec "$(BACKEND_CONTAINER_NAME)" yarn start:prod