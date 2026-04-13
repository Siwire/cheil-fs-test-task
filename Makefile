prod:
	docker compose -f docker-compose.prod.yml up -d --build

dev:
	docker compose up -d --build