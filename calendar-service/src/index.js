import {createApp} from "./infrastructure/webserver/app.js";
import {config} from "../config.js";

(async () => {
  try {
    const app = await createApp();
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  } catch (e) {
    console.error('Error starting server:', e);
  }
})();
