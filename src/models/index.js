import sequelize from '../stuff/db';
import { DataTypes } from 'sequelize';

const Tracker = sequelize.define(
  'track',
  {
    userId: { type: DataTypes.INTEGER },
    lat: { type: DataTypes.DATEONLY },
    lon: { type: DataTypes.STRING }
  },
  { underscored: true, freezeTableName: true }
);

export { Tracker };
