import { NextFunction, Request, Response } from 'express';
import {v4 as uuidV4 } from 'uuid';
import { asyncLocalStorage } from '../utils/helpers/request.helpers';
export const attachCorrelationIdMiddleware = (req: Request, res: Response, next: NextFunction) => {
    //Generate a unique correelation id
    const correlationId = uuidV4();
   
     // Optionally you can also attach it to the response headers
    req.headers['x-correlation-id'] = correlationId;
    // call the next middleware or route handler

    asyncLocalStorage.run({correlationId: correlationId}, () => {
        next();
    }) ;
};