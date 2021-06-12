//=|*Imports*|=//
import { Router } from 'express';
import { UsersController } from '../controllers/api/v1/Users.Controller';

const usersRouter = Router();



//=|API User/=>
usersRouter.get('/api/user/v1', UsersController.findAll);
usersRouter.post('/api/user/v1/create', UsersController.create);
usersRouter.get('/api/user/v1/:id', UsersController.findOne);
usersRouter.put('/api/user/v1/:id', UsersController.update);
usersRouter.delete('/api/user/v1/:id', UsersController.delete);



//=|*Exports*|=//=>app.bootstrap.ts
export { usersRouter };
