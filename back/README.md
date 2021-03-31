# Encare Backend

Uses docker compose 3.8. To install, refer to [this link](https://docs.docker.com/compose/install/).

## Setup

Create the .env file at `$root/src/conf/settings/.env` like so:
```
DEBUG=True
SECRET_KEY=key_name
DATABASE_HOST=mongodb://mongodb
DATABASE_PORT=27017
```

And build the services with:
```
docker-compose build
```

## Run
```
docker-compose up
```

