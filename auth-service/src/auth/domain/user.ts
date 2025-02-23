
export class Login {
    constructor(private readonly username: string, private readonly password: string) {
    }

    get Username() {
        return this.username
    }

    get Password() {
        return this.password
    }
}
