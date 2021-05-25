import Navigo from 'navigo';
import { TodosControllerClient } from './controllers/TodosControllerClient';

const frontRouter = new Navigo('/');

frontRouter.on('/todos', new TodosControllerClient().controllerExecute())

frontRouter.resolve();
export { frontRouter };
