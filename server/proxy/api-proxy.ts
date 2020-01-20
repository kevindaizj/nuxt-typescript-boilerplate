import express, { RequestHandler } from 'express';
import * as bodyParser from 'body-parser';
import { ApiMiddleware } from '../middlewares/api/api-handler';
import { ApiErrorHandlingMiddleware } from '../middlewares/error/api-error-handler';

// Create express router
const router = express.Router();
const app = express();

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const apiHandler: RequestHandler = (req, res, next) => {
    Object.setPrototypeOf(req, app.request);
    Object.setPrototypeOf(res, app.response);
    req.res = res;
    res.req = req;

    new ApiMiddleware().config()(req as any, res as any, next);
};

router.use([
    bodyParser.json({ limit: '50mb' }),
    apiHandler,
    new ApiErrorHandlingMiddleware().config()
]);


export default {
    path: '/api',
    handler: router
};