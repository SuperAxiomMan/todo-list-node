import { APIRest } from '../../services/apiRest';
import { Views } from '../../services/Views';

export class LoginController{

    loginForm : HTMLFormElement;

    execute(){
        
        return () => {
          this.renderView();
          this.addformListener();
        };
    }

    async addformListener(){
        this.loginForm = document.getElementById('userLoginForm') as HTMLFormElement;
        this.loginForm.addEventListener('submit', this.loginUser.bind(this));
    }

    async loginUser(e){
    e.preventDefault();
    const {loginMail, loginPWD } = this.loginForm.elements;
    
    const apiCall = await APIRest.logUser({email:loginMail.value, password: loginPWD.value});


    // console.log(apiCall);

}


     async renderView(){
        Views.displayView('view-login-user');
    }
}