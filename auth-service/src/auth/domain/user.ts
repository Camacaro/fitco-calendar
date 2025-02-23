

export class User {
    constructor(
        private readonly uuid: string,
        private readonly username: string,
        private readonly email: string,
        private readonly password: string,
    ) {}

    get Uuid(): string {
        return this.uuid;
    }

    get Username(): string {
        return this.username;
    }

    get Email(): string {
        return this.email;
    }

    get Password(): string {
        return this.password;
    }
}
