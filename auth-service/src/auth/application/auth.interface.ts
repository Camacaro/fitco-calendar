import {Login} from "../domain/user";
import {User} from "../domain/login";

export interface AuthApplicationI {
    login(login: Login): Promise<User>
    authenticate(uuid: string): Promise<any>
    refreshToken(uuid: string): Promise<any>
}

export interface AuthRepositoryI {
    setKey(key: string, value: string): Promise<any>
    getKey(key: string): Promise<any>
}
