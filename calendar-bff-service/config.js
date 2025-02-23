import dotenv from "dotenv";
dotenv.config();

const config = {
  port: process.env.PORT,
  servicesConfig: {
    auth: {
      baseUrl: process.env.AUTH_SERVICE_BASE_URL,
    },
    event: {
      baseUrl: process.env.EVENT_SERVICE_BASE_URL,
    }
  }
}

export default config
