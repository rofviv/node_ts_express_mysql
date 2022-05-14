### Node Service Backend

Basic structure of a project configured with Node, Typescript, Express and mysql

Install the dependencies with npm install then import the database.sql file in Mysql or MariaDB and run the command npm run start:dev

The main file is index.ts which imports the server.ts file located in the server folder. Here is the configuration of the server which imports the routes that these have their own controller.

To change the database configuration modify the keys.ts file