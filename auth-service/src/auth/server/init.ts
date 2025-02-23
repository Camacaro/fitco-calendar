import express, {Application as ApplicationExpress} from "express";
import cors from 'cors'

import {AuthApplicationI} from "../application/auth.interface";
import {ConfigI} from "../../config";
import {AuthHandler} from "../infra/incoming/rest/authHandler";
import {AuthRouter} from "../infra/incoming/rest/router";
import {errorHandler, notFoundMiddleware} from "./middlewares";

export class Server {
    private app: ApplicationExpress
    private readonly authHandler: AuthHandler
    private authRouter: AuthRouter

    constructor(
        private readonly config: ConfigI,
        private authApplication: AuthApplicationI
    ) {
        this.app = express()
        this.authHandler = new AuthHandler(this.config, this.authApplication)
        this.authRouter = new AuthRouter(this.authHandler)

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
        this.app.use('/api/auth', this.authRouter.Router);
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
