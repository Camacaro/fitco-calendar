import {AuthApplication} from "./auth/application/authApplication";
import {RedisConnection} from "./auth/infra/outgoing/redis";
import {Server} from "./auth/server/init";
import {config} from "./config";

const redisRepository = new RedisConnection(config.redis.connection);
const authApplication = new AuthApplication(redisRepository);

const server = new Server(config, authApplication);
server.listen()
