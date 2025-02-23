
import mysql from "mysql2"

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

    GetById(user: User): Promise<User> {
        return new Promise((resolve, reject) => {
            let sql = "SELECT * FROM ?? WHERE ?? = ?";
            const inserts = ['users', 'id', user.Uuid];
            sql = mysql.format(sql, inserts);

            this.connection.query(sql, (error, results) => {
                if (error) return reject(error)
                console.log('GetById', results)
                resolve(user)
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

    closeConnection(): void {
        this.connection.end()
    }
}
