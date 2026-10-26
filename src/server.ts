import express from 'express';
import { serverConfig } from './config';
import { pingHandler } from './controllers/ping.controller';
import pingRouter from './routers/ping.router';
const app = express();

/**
 * Registering all the routers and their corresponding routes with our app server object.
 */

app.use(pingRouter);

console.log("Environment variable loaded");


app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
    console.log(`Press Ctrl+C to stop the server`);
    console.log(process.env.SERVER_NAME);
});