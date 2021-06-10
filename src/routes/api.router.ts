//=|*Imports*|=//
import { Request, Response, Router } from 'express';
import { TodoController } from '../controllers/api/v1/TodoController';

const apiRouter = Router();

//=|Root Page/=>
apiRouter.get('/', (req:Request, res:Response) => {
  res.send('It works !');
});

//=|API Todo/=>
apiRouter.get('/api/todo/v1', TodoController.findAll);
apiRouter.get('/api/todo/v1/:id', TodoController.findOne);
apiRouter.post('/api/todo/v1/create', TodoController.create);
apiRouter.put('/api/todo/v1/:id', TodoController.update);
apiRouter.delete('/api/todo/v1/:id', TodoController.delete);

//=|*Exports*|=//=>app.bootstrap.ts
export { apiRouter };
