import express, {Application as ApplicationExpress} from "express";
import cors from 'cors'

import {AuthApplicationI} from "../application/auth.interface";
import {ConfigI} from "../../config";
import {errorHandler, notFoundMiddleware} from "./middlewares";

export class Server {
    private app: ApplicationExpress

    constructor(
        private readonly config: ConfigI,
        private authApplication: AuthApplicationI
    ) {
        this.app = express()

        this.middlewares()
        this.routes()
        this.middlewareAfterRouter()
    }

    private middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    private routes() {

    }

    private middlewareAfterRouter() {
        this.app.use(notFoundMiddleware);
        this.app.use(errorHandler);
    }

    listen() {
        this.app.listen(this.config.server.port, () => {
            console.log(`Server running on port ${this.config.server.port}`);
        });
    }
}
