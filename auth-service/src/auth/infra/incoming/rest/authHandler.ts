import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken"
import { v4 as uuidv4 } from 'uuid';

import {AuthApplicationI} from "../../../application/auth.interface";
import {ConfigI} from "../../../../config";
import {authHandlerResponseI, PayloadFromTokenI} from "./authHandler.interface";
import {Login} from "../../../domain/login";
import {User} from "../../../domain/user";

export class AuthHandler {
    constructor(
        private config: ConfigI,
        private authApplication: AuthApplicationI,
    ) {
    }

    private async generateToken(payload: object): Promise<string> {
        try {
            const token = jwt.sign({...payload}, this.config.jwt.secret, {expiresIn: this.config.jwt.expiresIn});
            return Promise.resolve(token);
        } catch (e) {
            return Promise.reject(e);
        }
    }

    public async verifyToken(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.header('Authorization')?.split(' ')[1];
            if (!token) {
                res.status(401).json({message: 'No token provided'});
                return
            }

            const payload = jwt.verify(token, this.config.jwt.secret) as PayloadFromTokenI;
            if (!payload) {
                res.status(401).json({message: 'Invalid token'});
                return
            }

            req.body.payload = payload.uuid;
            next();
        } catch (e) {
            res.status(500).json({message: 'Internal server error'});
        }
    }

    public async login(req: Request, res: Response) {
        // TODO: validate body
        const loginDto = new Login(req.body.email, req.body.password);
        try {
            const user = await this.authApplication.login(loginDto)
            const payload = {
                email: user.Email,
                username: user.Username
            }
            const token = await this.generateToken(payload);
            const response: authHandlerResponseI = {
                token,
                user: {
                    uuid: user.Uuid,
                    username: user.Username,
                    email: user.Email
                },
                ok: true
            }
            res.status(200).json(response);
        } catch (e) {
            res.status(500).json({message: 'Internal server error'});
        }
    }

    public async register(req: Request, res: Response) {
        // TODO: validate body
        const uuid = uuidv4()
        const loginDto = new User(uuid, req.body.username, req.body.email, req.body.password);
        try {
            const user = await this.authApplication.register(loginDto)
            const payload = {
                email: user.Email,
                username: user.Username
            }
            const token = await this.generateToken(payload);
            const response: authHandlerResponseI = {
                token,
                user: {
                    uuid: user.Uuid,
                    username: user.Username,
                    email: user.Email
                },
                ok: true
            }
            res.status(200).json(response);
        } catch (e) {
            res.status(500).json({message: 'Internal server error'});
        }
    }

    public async authenticate(req: Request, res: Response) {
        try {
            const uuid = req.body.payload;
            const response = await this.authApplication.authenticate(uuid);
            res.status(200).json(response);
        } catch (e) {
            res.status(500).json({message: 'Internal server error'});
        }
    }

    public async refreshToken(req: Request, res: Response) {
        try {
            const uuid = req.body.payload;
            const response = await this.authApplication.refreshToken(uuid);
            res.status(200).json(response);
        } catch (e) {
            res.status(500).json({message: 'Internal server error'});
        }
    }
}
