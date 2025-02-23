import {AuthApplication} from "./auth/application/authApplication";
import {RedisConnection} from "./auth/infra/outgoing/redis";
import {Server} from "./auth/server/init";
import {config} from "./config";
import {MySQLRepository} from "./auth/infra/outgoing/mysqlRepository";

const mysqlRepository = new MySQLRepository(config.mysql)
const redisRepository = new RedisConnection(config.redis.connection);
const authApplication = new AuthApplication(redisRepository, mysqlRepository);

const server = new Server(config, authApplication);
server.listen()
