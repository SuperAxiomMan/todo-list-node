/* eslint-disable no-console */
import { APIRest } from '../../services/apiRest';
import { Views } from '../../services/Views';
import { frontRouter } from '../Router';

export class AddCatController{
    addCatForm : HTMLFormElement;
    execute(){
        return () => {
          this.renderView();
        };
    }

    async renderView(){
        Views.displayView('view-add-category');
        this.addformListener();
    }

    async addformListener(){
        this.addCatForm = document.getElementById('addCatForm') as HTMLFormElement;
        this.addCatForm.addEventListener('submit', this.addCat.bind(this));
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