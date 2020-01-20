import express, { RequestHandler } from 'express';
import { DownloadMiddleware } from '../middlewares/file/download-handler';

// Create express router
const router = express.Router();
const app = express();

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const fileHandler: RequestHandler = (req, res, next) => {
    Object.setPrototypeOf(req, app.request);
    Object.setPrototypeOf(res, app.response);
    req.res = res;
    res.req = req;

    new DownloadMiddleware().config()(req as any, res as any, next);
};


router.use(fileHandler);


export default {
    path: '/file/download',
    handler: router
};