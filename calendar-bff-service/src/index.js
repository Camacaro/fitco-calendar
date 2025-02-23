
import createApp from './infra/webserver/app.js';
import config from "../config.js";
const app = createApp();

app.listen(config.port, () => {
  console.log(`BFF server is running on port ${config.port}`);
});
