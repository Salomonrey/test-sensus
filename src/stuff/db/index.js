import { Sequelize } from 'sequelize';
import dbConfigs from '../../../config/config.json';

export default new Sequelize(
  dbConfigs['development'].database,
  dbConfigs['development'].username,
  dbConfigs['development'].password,
  {
    dialect: 'postgres',
    host: dbConfigs['development'].host,
    port: 5432
  }
);
