import {Login} from "../domain/login";
import {User} from "../domain/user";

export interface AuthApplicationI {
    login(login: Login): Promise<User>
    authenticate(uuid: string): Promise<any>
    refreshToken(uuid: string): Promise<any>
    register(user: User): Promise<User>
}

export interface AuthRepositoryI {
    setKey(key: string, value: string): Promise<any>
    getKey(key: string): Promise<any>
}

export interface UserRepositoryI {
    Insert(user: User): Promise<User>
    GetById(user: User): Promise<User>
}
