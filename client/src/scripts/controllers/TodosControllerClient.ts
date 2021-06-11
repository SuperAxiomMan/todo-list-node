/* eslint-disable no-console */
import { APIRest } from '../../services/apiRest';
import { Views } from '../../services/Views';

export class TodosControllerClient {
    todos: any;

    execute() {
        return async () => {
            this.todos = (await APIRest.getAllTodos()).todos;

            console.log(this.todos);
            this.renderView(this.todos);
        };
    }

    async findAll(){
        this.todos = (await APIRest.getAllTodos()).todos;

        console.log(this.todos);
        this.renderView(this.todos);
    }

    async listenDeleteBtns(){
        const deleteTodoBtns = [...document.querySelectorAll('.delete-todo')];
        deleteTodoBtns.forEach(btn => {
            btn.addEventListener('click', this.deleteTodo.bind(this));
        });
    }

    async deleteTodo(event){
        console.log(this);
        event.preventDefault();
        const todoID = event.target.dataset.todoId;
        
        const apiCall = await APIRest.deleteTodo(todoID);

        if (apiCall) {
          
           this.findAll();
        }
    }



    async renderView(todos: []) {


        const todosList: HTMLUListElement = document.getElementById('todos-list') as HTMLUListElement;

        todosList.innerHTML = '';
        
        const html = `
        <div class="container">
            <div class="row mt-5">
                <div class="nav flex-column nav-pills" id="v-pills-tab col-4" role="tablist" aria-orientation="vertical">
                <a class="btn btn-success mb-2" href="/todos/add">Add +</a>
                    ${todos.map(todo =>`<a class="nav-link" id="v-pills-${todo._id}-tab" data-toggle="pill" href="#v-pills-${todo._id}" role="tab" aria-controls="v-pills-${todo._id}" aria-selected="false">${todo.title}</a>`).join('')}
                </div>
                <div class="tab-content col-8" id="v-pills-tabContent">
                    ${todos.map(todo =>`
                    <div class="tab-pane fade bg-light p-5 rounded" id="v-pills-${todo._id}" role="tabpanel" aria-labelledby="v-pills-${todo._id}-tab">
                    ${todo.description}
                        <div class="text-right mt-5">
                        <button type="button" class="btn btn-secondary">Edit</button>
                        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#delete-${todo._id}">Delete</button>
                        </div>
                    </div>
                    `).join('')}
                </div>
            </div>
            ${todos.map(todo =>`
            <div class="modal fade" data-backdrop="false" id="delete-${todo._id}" tabindex="-1" role="dialog" aria-labelledby="deleteTodoEntryConfirmation" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="deleteTodoEntryConfirmation">Delete this entry ?</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button class="btn btn-danger delete-todo" data-todo-id="${todo._id}">Delete Todo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `).join('')}
        `;
        
        todosList.innerHTML = html;
        this.listenDeleteBtns();
        Views.displayView('view-todos-list');
    }
}
