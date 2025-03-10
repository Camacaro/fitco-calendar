import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT,
  mysql: {
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  }
}
