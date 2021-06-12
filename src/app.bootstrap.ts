//=|*Imports*|=//
import cors from 'cors';
import express, { json } from 'express';
import { PassportConfig } from './middlewares/Passport.middleware';
import { apiRouter } from './routes/api.router';
import { authRouter } from './routes/auth.router';
import { usersRouter } from './routes/users.router';


//=|*Input*|=//
const app = express();


//=|*MiddleWares*|=//
app.use(cors()); //=|secure domain cross-origin
app.use(json()); //=|use for body JSON POST
app.use(PassportConfig.config); //=|Passport config

//=|*routes*|=//
app.use(apiRouter);
app.use(usersRouter);
app.use(authRouter);



//=|*Exports*|=//=>server.ts
export {app};
