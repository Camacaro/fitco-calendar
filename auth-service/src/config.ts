import dotenv from "dotenv";
dotenv.config();

export interface ConfigI {
    server: {
        port: string;
    };
    jwt: {
        secret: string;
        expiresIn: string;
    };
    redis: {
        connection: string;
    };
}

export const config: Config = {
    server: {
        port : process.env.PORT as string,
    },
    jwt: {
        secret: process.env.JWT_SECRET as string,
        expiresIn: process.env.JWT_EXPIRES_IN as string,
    },
    redis: {
        connection: process.env.REDIS_CONNECTION as string,
    },
}
