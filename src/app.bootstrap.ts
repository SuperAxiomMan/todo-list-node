//=|*Imports*|=//
import cors from 'cors';
import express from 'express';
import { apiRouter } from './routes/api.router';


//=|*Input*|=//
const app = express();


//=|*Uses*|=//
app.use(cors());//secure domain cross-origin
app.use(apiRouter);


//=|*Exports*|=//=>server.ts
export {app};
