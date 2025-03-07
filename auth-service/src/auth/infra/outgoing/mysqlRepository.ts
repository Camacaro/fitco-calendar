
import mysql, {QueryResult} from "mysql2"

import {UserRepositoryI} from "../../application/auth.interface";
import {User} from "../../domain/user";
import {MysqlConfigI} from "../../../config";


export class MySQLRepository implements UserRepositoryI {
    private connection: mysql.Connection;

    constructor(private readonly config: MysqlConfigI) {
        this.connection = mysql.createConnection({
            user: config.user,
            host: config.host,
            database: config.database,
            port: Number(config.port),
            password: config.password
        })
        this.initConnection()
    }

    private initConnection() {
        this.connection.connect();
        this.connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
            if (error) throw error;
            console.log('Connected to Mysql');
        });
    }

    GetByEmail(email: string): Promise<User> {
        return new Promise((resolve, reject) => {
            let sql = "SELECT * FROM ?? WHERE ?? = ?";
            const inserts = ['users', 'email', email];
            sql = mysql.format(sql, inserts);

            // TODO: create type for response of db in results
            this.connection.query(sql, (error, results: any) => {
                if (error) return reject(error)
                if (results.length === 0) {
                    return reject("not found")
                }
                const userFound = results[0]
                const user = new User(userFound.uuid, userFound.username, userFound.email, '')
                return resolve(user)
            })
        })
    }

    Insert(user: User): Promise<User> {
        return new Promise((resolve, reject) => {
            const query = "insert into users (uuid, username, email, password) values (?,?,?,?)";
            const values = [user.Uuid, user.Username, user.Email, user.Password]
            this.connection.query(query, values, (error, results) => {
                if (error) return reject(error)
                console.log('insert', results)
                resolve(user)
            })
        })
    }

    GetById(id: string): Promise<User> {
        return new Promise((resolve, reject) => {
            let sql = "SELECT * FROM ?? WHERE ?? = ?";
            const inserts = ['users', 'uuid', id];
            sql = mysql.format(sql, inserts);

            // TODO: create type for response of db in results
            this.connection.query(sql, (error, results: any) => {
                if (error) return reject(error)
                if (results.length === 0) {
                    throw new Error("not found")
                }
                const userFound = results[0]
                const user = new User(userFound.uuid, userFound.username, userFound.email, '')
                return resolve(user)
            })
        })
    }

    closeConnection(): void {
        this.connection.end()
    }
}
