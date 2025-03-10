import {Router} from "express";

import {AuthHandler} from "./authHandler";

export class AuthRouter {
    private router = Router()

    constructor(private readonly authHandler: AuthHandler) {
        this.router.post('/login', this.authHandler.login.bind(this.authHandler));
        this.router.post('/register', this.authHandler.register.bind(this.authHandler));
        this.router.get('/verify', this.authHandler.verifyToken.bind(this.authHandler), this.authHandler.authenticate.bind(this.authHandler));
        this.router.get('/refresh', this.authHandler.verifyToken.bind(this.authHandler), this.authHandler.refreshToken.bind(this.authHandler));
    }

    get Router() {
        return this.router
    }
}
