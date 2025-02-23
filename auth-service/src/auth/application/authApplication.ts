import bcrypt from 'bcryptjs'
import {AuthApplicationI, AuthRepositoryI, UserRepositoryI} from "./auth.interface";
import {Login} from "../domain/login";
import {User} from "../domain/user";

export class AuthApplication implements AuthApplicationI {
    constructor(
        private readonly authRepository: AuthRepositoryI,
        private readonly userRepository: UserRepositoryI,
    ) {}

    async login(loginDto: Login): Promise<User> {
        return new User('uuid', 'email', 'password', '');
    }

    async register(user: User): Promise<User> {
        const salt = bcrypt.genSaltSync();
        user.Password = bcrypt.hashSync( user.Password, salt );
        return this.userRepository.Insert(user)
    }

    async authenticate(uuid: string): Promise<any> {
        throw new Error("need implementation")
    }

    async refreshToken(uuid: string): Promise<any> {
        throw new Error("need implementation")
    }
}
