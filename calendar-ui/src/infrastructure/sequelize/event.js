import { DataTypes } from 'sequelize';
import { sequelize } from './sequelize.js';

export const Event = sequelize.define('Event', {
  uuid: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'uuid',
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'title',
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'notes',
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'start_date',
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'end_date',
  },
}, {
  tableName: 'events',
  timestamps: false,
});
