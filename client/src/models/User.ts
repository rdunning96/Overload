//User Class
export class User {
    id?: number;
    name?: string;
    email: string;
    password: string;
    constructor(email: string, password: string, name?: string) {
        this.password = password;
        this.email = email;
        this.name = name;

    }
}