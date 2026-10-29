import express from 'express';
import { serverConfig } from './config';
import v1Router from './routers/v1/index.router';
import v2Router from './routers/v2/index.router';
import {z} from 'zod';
import { genericErrorHandler } from './middlewares/error.middleware';
const app = express();

app.use(express.json());
/**
 * Registering all the routers and their corresponding routes with our app server object.
 */

app.use('/api/v1',v1Router);
app.use('/api/v2',v2Router);

/**
 * Add the error handler middleware
 */
app.use(genericErrorHandler);

console.log("Environment variable loaded");


app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
    console.log(`Press Ctrl+C to stop the server.`);    
});