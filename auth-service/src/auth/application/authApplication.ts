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
        const user = await this.userRepository.GetByEmail(loginDto.Username)
        const payload = {
            uuid: user.Uuid,
            username: user.Username,
            email: user.Email,
        }
        const payloadStr = JSON.stringify(payload)
        await this.authRepository.setKey(user.Uuid, payloadStr)
        return user
    }

    async register(user: User): Promise<User> {
        const salt = bcrypt.genSaltSync();
        user.Password = bcrypt.hashSync( user.Password, salt );
        return this.userRepository.Insert(user)
    }

    async authenticate(uuid: string): Promise<User> {
        const payloadStr = await this.authRepository.getKey(uuid)
        // TODO: standardize the payload to expect
        if (payloadStr) {
            try {
                const payload = JSON.parse(payloadStr)
                if (payload.uuid) {
                    return new User(payload.uuid, payload.username, payload.email, '')
                }
            } catch (e) {
                console.error(e)
            }
        }

        const user = await this.userRepository.GetById(uuid)
        const payloadToSave = {
            uuid: user.Uuid,
            username: user.Username,
            email: user.Email,
        }
        const payloadStrToSave = JSON.stringify(payloadToSave)
        await this.authRepository.setKey(user.Uuid, payloadStrToSave)
        return user
    }

    async refreshToken(uuid: string): Promise<any> {
        throw new Error("need implementation")
    }
}
