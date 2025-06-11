# Odoo 18.0 with docker

Docker files for Odoo

## Create user
```
CREATE ROLE hello WITH LOGIN NOSUPERUSER CREATEDB NOCREATEROLE INHERIT NOREPLICATION CONNECTION LIMIT -1 PASSWORD 'h';
```

## Postgres Configuration
/var/lib/pgsql/data/pg_hba.conf
```
host    all             hello             172.17.0.1/16           scram-sha-256
```
/var/lib/pgsql/data/postgresql.conf
```
listen_addresses = '*'
```

## Run
```
 docker-compose up
```