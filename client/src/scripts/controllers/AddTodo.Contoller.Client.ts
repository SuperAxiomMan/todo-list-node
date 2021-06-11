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
        const categorySelection = document.getElementById('category-select-list');
        categorySelection.innerHTML ='';
        const categories = (await APIRest.getAllCat()).categories;

        categories.forEach(category => {
            const option = document.createElement('option');
            option.text = category.title;
            option.value = category._id;
            categorySelection.add(option);
        });

        Views.displayView('view-add-todo');
        this.addformListener();
 
    }

    async addformListener(){
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