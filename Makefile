docker_compose_bin := $(shell command -v docker-compose 2> /dev/null)
BACKEND_CONTAINER_NAME = backend

up:
	$(docker_compose_bin) up --no-recreate -d

down:
	$(docker_compose_bin) down

install: up
	$(docker_compose_bin) exec "$(BACKEND_CONTAINER_NAME)" yarn install

backend-dev: install
	$(docker_compose_bin) exec "$(BACKEND_CONTAINER_NAME)" yarn start:debug

backend-test: install
	$(docker_compose_bin) exec "$(BACKEND_CONTAINER_NAME)" yarn test

e2e:
	$(docker_compose_bin) -f docker-compose.e2e.yml up --abort-on-container-exit --force-recreate -V

production: intall
	$(docker_compose_bin) exec "$(BACKEND_CONTAINER_NAME)" yarn start:prod