import Navigo from 'navigo';
import { TodosControllerClient } from './controllers/TodosControllerClient';

const frontRouter = new Navigo('/');

frontRouter.on('/todos', new TodosControllerClient().controllerExecute());
frontRouter.on('/todos/:id', new TodosControllerClient().getSingleExecute());

frontRouter.resolve();
export { frontRouter };
