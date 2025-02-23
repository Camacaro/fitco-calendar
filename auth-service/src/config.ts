import dotenv from "dotenv";
import {StringValue} from "ms";
dotenv.config();

export interface MysqlConfigI {
    host: string,
    user: string,
    password: string,
    database: string,
    port: string
}

export interface ConfigI {
    server: {
        port: string;
    };
    jwt: {
        secret: string;
        expiresIn: StringValue|number;
    };
    redis: {
        connection: string;
    };
    mysql: MysqlConfigI
}

export const config: ConfigI = {
    server: {
        port : process.env.PORT as string,
    },
    jwt: {
        secret: process.env.JWT_SECRET as string,
        expiresIn: process.env.JWT_EXPIRES_IN as StringValue|number,
    },
    redis: {
        connection: process.env.REDIS_CONNECTION as string,
    },
    mysql: {
        host: process.env.MYSQL_HOST as string,
        user: process.env.MYSQL_USER as string,
        password: process.env.MYSQL_PASSWORD as string,
        database: process.env.MYSQL_DATABASE as string,
        port: process.env.MYSQL_PORT as string
    }
}
