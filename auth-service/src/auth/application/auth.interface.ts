import {Login} from "../domain/user";

export interface AuthApplication {
    login(login: Login): Promise<any>
    authenticate(uuid: string): Promise<any>
    refreshToken(uuid: string): Promise<any>
}

export interface AuthRepository {
    setKey(key: string, value: string): Promise<any>
    getKey(key: string): Promise<any>
}
