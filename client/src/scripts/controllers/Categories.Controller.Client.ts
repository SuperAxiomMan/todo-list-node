/* eslint-disable no-console */
import { APIRest } from '../../services/apiRest';
import { Views } from '../../services/Views';

export class CatControllerClient {
    categories: any;

    execute() {
        return async () => {
            this.categories = (await APIRest.getAllCat()).categories;

            console.log(this.categories);
            this.renderView(this.categories);
        };
    }

    async findAllCat(){
        this.categories = (await APIRest.getAllCat()).categories;

        console.log(this.categories);
        this.renderView(this.categories);
    }

    async listenDeleteBtns(){
        const deleteCatBtns = [...document.querySelectorAll('.delete-cat')];
        deleteCatBtns.forEach(btn => {
            btn.addEventListener('click', this.deleteCat.bind(this));
        });
    }

    async deleteCat(event){
        console.log(this);
        event.preventDefault();
        const catID = event.target.dataset.catId;
        
        const apiCall = await APIRest.deleteCat(catID);

        if (apiCall) {
          
           this.findAllCat();
        }
    }



    async renderView(categories: []) {


        const catList: HTMLUListElement = document.getElementById('categories-list') as HTMLUListElement;

        catList.innerHTML = '';
        
        const html = `
        <div class="container">
            <div class="row mt-5">
                <div class="nav flex-column nav-pills" id="v-pills-tab col-4" role="tablist" aria-orientation="vertical">
                <a class="btn btn-success mb-2" href="/categories/add">Add +</a>
                    ${categories.map(cat =>`<a class="nav-link" id="v-pills-${cat._id}-tab" data-toggle="pill" href="#v-pills-${cat._id}" role="tab" aria-controls="v-pills-${cat._id}" aria-selected="false">${cat.title}</a>`).join('')}
                </div>
                <div class="tab-content col-8" id="v-pills-tabContent">
                    ${categories.map(cat =>`
                    <div class="tab-pane fade bg-light p-5 rounded" id="v-pills-${cat._id}" role="tabpanel" aria-labelledby="v-pills-${cat._id}-tab">
                    ${cat.description}
                        <div class="text-right mt-5">
                        <button type="button" class="btn btn-secondary">Edit</button>
                        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#delete-${cat._id}">Delete</button>
                        </div>
                    </div>
                    `).join('')}
                </div>
            </div>
            ${categories.map(cat =>`
            <div class="modal fade" data-backdrop="false" id="delete-${cat._id}" tabindex="-1" role="dialog" aria-labelledby="deleteCatEntryConfirmation" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="deleteCatEntryConfirmation">Delete this entry ?</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button class="btn btn-danger delete-cat" data-cat-id="${cat._id}">Delete Cat</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `).join('')}
        `;
        
        catList.innerHTML = html;
        this.listenDeleteBtns();
        Views.displayView('view-categories-list');
    }
}
