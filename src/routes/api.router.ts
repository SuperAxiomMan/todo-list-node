//=|*Imports*|=//
import { Request, Response, Router } from 'express';
import { CategoriesController } from '../controllers/api/v1/Categories.Controller';
import { TodoController } from '../controllers/api/v1/TodoController';

const apiRouter = Router();

//=|Root Page/=>
apiRouter.get('/', (req:Request, res:Response) => {
  res.send('It works !');
});

//=|API Todo/=>
apiRouter.get('/api/todo/v1', TodoController.findAll);
apiRouter.post('/api/todo/v1/create', TodoController.create);
apiRouter.get('/api/todo/v1/:id', TodoController.findOne);
apiRouter.put('/api/todo/v1/:id', TodoController.update);
apiRouter.delete('/api/todo/v1/:id', TodoController.delete);

//=|API Categories/=>
apiRouter.get('/api/cat/v1', CategoriesController.findAll);
apiRouter.post('/api/cat/v1/create', CategoriesController.create);
apiRouter.get('/api/cat/v1/:id', CategoriesController.findOne);
apiRouter.put('/api/cat/v1/:id', CategoriesController.update);
apiRouter.delete('/api/cat/v1/:id', CategoriesController.delete);


//=|*Exports*|=//=>app.bootstrap.ts
export { apiRouter };
