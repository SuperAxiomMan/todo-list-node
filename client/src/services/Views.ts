export class Views{

    static viewID = ['todos', 'add_todo'];
    static displayView(id){
        Views.viewID.forEach(view=>{document.getElementById(view).classList.add('d-none');});
        document.getElementById(id).classList.remove('d-none');
    }

}