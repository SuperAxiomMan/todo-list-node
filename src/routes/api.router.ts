//=|*Imports*|=//
import { Request, Response, Router } from 'express';
import { TodoController } from '../controllers/api/v1/TodoController';

const apiRouter = Router();

//=|Root Page/=>
apiRouter.get('/',(req:Request,res:Response) => {
  res.send("It works !")
})

//=|API Todo/=>
apiRouter.get("/api/todo/v1", TodoController.findAll);


//=|*Exports*|=//=>app.bootstrap.ts
export { apiRouter };
