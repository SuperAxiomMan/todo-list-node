import Navigo from 'navigo';
import { Views } from '../services/Views';
import { AddTodoController } from './controllers/AddTodo.Contoller.Client';
import { TodosControllerClient } from './controllers/TodosControllerClient';

const frontRouter = new Navigo('/');

frontRouter.on('/', () => {
  Views.displayView(null);
});
frontRouter.on('/todos/add', new AddTodoController().execute());
frontRouter.on('/todos', new TodosControllerClient().controllerExecute());
frontRouter.on('/todos/:id', new TodosControllerClient().getSingleExecute());


frontRouter.resolve();
export { frontRouter };
