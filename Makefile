.PHONY: ci build deps lint serve typecheck

ci: lint typecheck build

deps:
	npm ci

lint:
	npm run lint

typecheck:
	npm run typecheck

build:
	npm run build

serve:
	npm start
