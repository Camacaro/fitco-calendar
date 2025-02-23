import {User} from "../../../domain/user";

export interface PayloadFromTokenI {
    uuid: string;
}

export interface authHandlerResponseI {
    ok: boolean,
    user: User,
    token: string
}
