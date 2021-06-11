import { APIRest } from '../../services/apiRest';
import { Views } from '../../services/Views';
import { frontRouter } from '../Router';

/* eslint-disable no-console */
export class AddCatController{
    addCatForm : HTMLFormElement;
    execute(){
       
        return () => {
          this.renderView();
        };
    }

    async renderView(){
  
        // const categorySelection = document.getElementById('category');
        // categorySelection.innerHTML ='Test Cat';
        Views.displayView('view-add-category');
        this.loadFormView();
 
    }
    async loadFormView(){

        
        this.addCatForm = document.getElementById('addCatForm') as HTMLFormElement;

        this.addCatForm.addEventListener('submit', this.addCat.bind(this));
        console.log('loaded form view');
 
    }
    async addCat(e){
        e.preventDefault();
        const {catTitle, catDescription} = this.addCatForm.elements;
        const apiCall = await APIRest.addCat({
            title:catTitle.value,
            description:catDescription.value
        });
        console.log({catTitle, catDescription});
        if (apiCall) {
            frontRouter.navigate('/categories');
            
        }else{
            console.log('api call failure');
        }
    }
}