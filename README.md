# Odoo 18.0 with docker

Docker files for Odoo

### Create user
```
CREATE ROLE hello WITH LOGIN NOSUPERUSER CREATEDB NOCREATEROLE INHERIT NOREPLICATION CONNECTION LIMIT -1 PASSWORD 'h';
```

## Run
```
 docker-compose up
```