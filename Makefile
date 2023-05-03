up:
	docker compose up -d

stop:
	docker compose stop

startback:
	sudo service postgresql start
	cd backend/
	source venv/bin/activate
	cd backend/
	python manage.py migrate
	python manage.py runserver

startfront:
	cd frontend
	npm start
