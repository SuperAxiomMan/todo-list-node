//=|*Imports*|=//
import { Router } from 'express';
import { Authcontroller } from '../controllers/api/v1/Auth.Controller';

const authRouter = Router();



//=|API Auth/=>
authRouter.post('/api/login/v1/', Authcontroller.login);




//=|*Exports*|=//=>app.bootstrap.ts
export { authRouter };
