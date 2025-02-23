import {RedisClientType, RedisDefaultModules, RedisModules, RedisFunctions, RedisScripts, createClient} from 'redis';

import {AuthRepositoryI} from "../../application/auth.interface";

export class RedisConnection implements AuthRepositoryI {
    private readonly redisClient: RedisClientType<RedisDefaultModules & RedisModules, RedisFunctions, RedisScripts>;
    constructor(private readonly connection: string) {
        this.redisClient = createClient({url: this.connection});

        this.redisClient.on('connect', () => {
            console.log('Connected to Redis');
        });
        this.redisClient.on('error', (err: Error) => {
            console.log('Error connecting to Redis:', err);
        });
        this.redisClient.on('end', () => {
            console.log('Redis connection closed');
        });
        this.redisClient.connect().then();
    }

    // Promise<null|Error>
    async setKey(key: string, value: string): Promise<null|Error> {
        return new Promise( async (resolve, reject) => {
            try {
                await this.redisClient.set(key, value, {
                    EX: 86401, // 24 hours + 1 second expiration
                })
                resolve(null);
            }catch (e) {
                reject(e);
            }
        })
    }

    // Promise<string | Error>
    async getKey(key: string): Promise<string> {
        return new Promise( async (resolve, reject) => {
            try {
                const value = await this.redisClient.get(key);
                if (!value) {
                    resolve("");
                }
                resolve(value!);
            }catch (e) {
                reject(e);
            }
        })
    }
}
