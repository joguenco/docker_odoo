## Odoo 18.0 with docker

### Create database
```
fly postgres create
```
### Connect to database
```
fly postgres connect -a odoo-hello-db
```
### Create user
```
CREATE ROLE odoo WITH LOGIN NOSUPERUSER CREATEDB NOCREATEROLE INHERIT NOREPLICATION CONNECTION LIMIT -1 PASSWORD 'N0PiratearXfavor';
```

fly logs --app odoo-hello