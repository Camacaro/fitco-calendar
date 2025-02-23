import {AuthApplicationI, AuthRepositoryI} from "./auth.interface";
import {Login} from "../domain/user";
import {User} from "../domain/login";

export class AuthApplication implements AuthApplicationI {
    constructor(
        private readonly authRepository: AuthRepositoryI,
    ) {}

    async login(loginDto: Login): Promise<User> {
        return new User('uuid', 'email', 'password');
    }

    async authenticate(uuid: string): Promise<any> {
        throw new Error("need implementation")
    }

    async refreshToken(uuid: string): Promise<any> {
        throw new Error("need implementation")
    }
}
