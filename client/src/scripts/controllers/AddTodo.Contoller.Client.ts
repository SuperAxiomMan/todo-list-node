
import { APIRest } from '../../services/apiRest';
import { Views } from '../../services/Views';
import { frontRouter } from '../Router';

/* eslint-disable no-console */
export class AddTodoController{
    addTodoForm : HTMLFormElement;
    execute(){
       
        return () => {
          this.renderView();
        };
    }

    async renderView(){
  
        // const categorySelection = document.getElementById('category');
        // categorySelection.innerHTML ='Test Cat';
        Views.displayView('add_todo');
        this.loadFormView();
 
    }
    async loadFormView(){

        
        this.addTodoForm = document.getElementById('addTodoForm') as HTMLFormElement;

        this.addTodoForm.addEventListener('submit', this.addTodo.bind(this));
        console.log('loaded form view');
 
    }
    async addTodo(e){
        e.preventDefault();
        const {title, description, category} = this.addTodoForm.elements;
        const apiCall = await APIRest.addTodo({
            title:title.value,
            description:description.value,
            category: category.value
        });
        console.log({title, description, category});
        if (apiCall) {
            frontRouter.navigate('/todos');
        }else{
            console.log('api call failure');
        }
    }
}