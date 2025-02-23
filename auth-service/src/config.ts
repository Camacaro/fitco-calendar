import dotenv from "dotenv";
import {StringValue} from "ms";
dotenv.config();

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
}
