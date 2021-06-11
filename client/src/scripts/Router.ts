/* eslint-disable no-warning-comments */
import Navigo from 'navigo';
import { Views } from '../services/Views';
import { AddTodoController } from './controllers/AddTodo.Contoller.Client';
import { AddCatController } from './controllers/addCategories.Controller.Client';
import { TodosControllerClient } from './controllers/TodosControllerClient';
import { CatControllerClient } from './controllers/Categories.Controller.Client';
import { RegisterController } from './controllers/Register.Controller.Client';



const frontRouter = new Navigo('/');

frontRouter.on('/', () => {
  Views.displayView(null);
});

//Todo Router
frontRouter.on('/todos/add', new AddTodoController().execute());
frontRouter.on('/todos', new TodosControllerClient().execute());

//Categories Router
frontRouter.on('/categories', new CatControllerClient().execute());
frontRouter.on('/categories/add', new AddCatController().execute());

//User Router
frontRouter.on('/register', new RegisterController().execute());



frontRouter.resolve();
export { frontRouter };
