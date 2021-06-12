export class Views{

    static viewID = ['view-todos-list', 'view-add-todo', 'view-categories-list', 'view-add-category', 'view-register-user', 'view-login-user'];
    static displayView(id){
        Views.viewID.forEach(view=>{document.getElementById(view).classList.add('d-none');});
        document.getElementById(id).classList.remove('d-none');
    }

}