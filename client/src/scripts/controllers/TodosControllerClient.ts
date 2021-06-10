/* eslint-disable no-console */
import { APIRest } from '../../services/apiRest';
import { Views } from '../../services/Views';
import { frontRouter } from '../Router';

export class TodosControllerClient {
    todos: any;
    todo: any;

    controllerExecute() {
        return async () => {
            this.todos = (await APIRest.getAllTodos()).todos;

            // console.log(this.todos);
            this.renderView(this.todos);
        };
    }
    getSingleExecute(){
        return async ({data}) => {
            console.log(`params are : ${data.id}`);
            this.todo = await APIRest.getSingleTodo(data.id);
            
            // console.log(this.todo); 
            this.renderView(this.todo);
        };
    }

    async listenDeleteBtns(){
        const deleteTodoBtns = [...document.querySelectorAll('.delete-todo')];//// ??
        deleteTodoBtns.forEach(btn => {
            btn.addEventListener('click', this.deleteTodo.bind(this));
        });
    }

    async deleteTodo(event){
        event.preventDefault();
        const todoID = event.target.dataset.todoId;
        console.log(todoID);
        const apiCall = await APIRest.deleteTodo(todoID);
        if (apiCall) {
            console.log(apiCall);
            // frontRouter.navigate('/todos');
            frontRouter.resolve('/todos');
        }

    }


    async renderView(todos: []) {

        console.log(todos);
        
        const todosLength = Object.keys(todos).length;
        const todosList: HTMLUListElement = document.getElementById('todos-list') as HTMLUListElement;

        let html:string;

        if (todosLength ===1) {
            html =`
            <h3>${todos.todos.title}</h3>
            <p>${todos.todos.description}<p>
            <a class="btn btn-primary" href="/todos/">Back</a>
            
            `;
        }else{
            html = todos.map(todo =>`
            <h3>${todo.title}</h3>
            
            <a href="/todos/${todo._id}">Details</a>
            <button class="btn btn-danger delete-todo" data-todo-id="${todo._id}">Delete Todo</button>
            `)
            .join('');
        }
        
        todosList.innerHTML = html;
        this.listenDeleteBtns();
        Views.displayView('todos');
    }
}
