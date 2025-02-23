
export interface PayloadFromTokenI {
    uuid: string;
}

interface userResponseI {
    uuid: string
    username: string
    email: string
}

export interface authHandlerResponseI {
    ok: boolean,
    user: userResponseI,
    token: string
}
