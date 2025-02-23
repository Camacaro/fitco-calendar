import {AuthApplicationI, AuthRepositoryI} from "./auth.interface";
import {Login} from "../domain/login";
import {User} from "../domain/user";

export class AuthApplication implements AuthApplicationI {
    constructor(
        private readonly authRepository: AuthRepositoryI,
    ) {}

    async login(loginDto: Login): Promise<User> {
        return new User('uuid', 'email', 'password', '');
    }

    async register(user: User): Promise<User> {

    }

    async authenticate(uuid: string): Promise<any> {
        throw new Error("need implementation")
    }

    async refreshToken(uuid: string): Promise<any> {
        throw new Error("need implementation")
    }
}
