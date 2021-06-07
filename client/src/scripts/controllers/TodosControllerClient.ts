/* eslint-disable no-console */
import { APIRest } from '../../services/apiRest';

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
            // console.log(`params are : ${data.id}`);
            this.todo = await APIRest.getSingleTodo(data.id);

            // console.log(this.todo); 
            this.renderView(this.todo);
        };
    }

    async renderView(todos: []) {
        console.log(todos);
        const todosLength = Object.keys(todos).length;
        const todosList: HTMLUListElement = document.getElementById(
            'todos-list'
        ) as HTMLUListElement;
            let html:string;

        if (todosLength ===1) {
            html =`
            <h3>${todos.todos.title}</h3>
            <p>${todos.todos.description}<p>
            <a href="/todos/">Back</a>
            `;
        }else{
            html = todos.map(todo =>`
            <h3>${todo.title}</h3>
            
            <a href="/todos/${todo._id}">Details</a>
            `)
            .join('');
        }
        
        todosList.innerHTML = html;
    }
}
