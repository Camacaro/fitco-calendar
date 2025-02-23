import {Login} from "../domain/login";
import {User} from "../domain/user";

export interface AuthApplicationI {
    login(login: Login): Promise<User>
    authenticate(uuid: string): Promise<User>
    refreshToken(uuid: string): Promise<any>
    register(user: User): Promise<User>
}

export interface AuthRepositoryI {
    setKey(key: string, value: string): Promise<null|Error>
    getKey(key: string): Promise<string>
}

export interface UserRepositoryI {
    Insert(user: User): Promise<User>
    GetByEmail(email: string): Promise<User>
    GetById(id: string): Promise<User>
}
