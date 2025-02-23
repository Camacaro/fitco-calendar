
import {Sequelize} from "sequelize";
import {config} from "../../../config.js";

export const sequelize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
  host: config.mysql.host,
  port: config.mysql.port,
  dialect: 'mysql',
});
