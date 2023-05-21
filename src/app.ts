import 'reflect-metadata';
import mysqlConnection from './shared/infra/mysql'
import expressServer from './shared/infra/express'
import { iServer } from './shared/infra/iServer';
import { iDatabase } from './shared/infra/iDatabase';

function bootstrap (server: iServer, dbConnection: iDatabase) {
  server.start();

  dbConnection.start();
}

bootstrap(expressServer, mysqlConnection);