import { APIRest } from "../../services/apiRest";

class TodosControllerClient {
    todos: any;

    controllerExecute() {
        return async () => {
            this.todos = (await APIRest.getAllTodos()).todos;

            console.log(this.todos);
            this.renderView(this.todos);
        };
    }

    async renderView(todos: []) {
        console.log('Render View');

        const todosList: HTMLUListElement = document.getElementById(
            'todos-list'
        ) as HTMLUListElement;

        const html = todos.reduce((prev, next)=>{
          return `
          ${prev}<h3>${next.title}</h3>
          <p>${next.description}<p>
          `;
        },'');


        todosList.innerHTML = html;
    }
}

export { TodosControllerClient };
