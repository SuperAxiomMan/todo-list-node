/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
import { APIRest } from '../../services/apiRest';
import { Views } from '../../services/Views';
import { frontRouter } from '../Router';

export class RegisterController{
    userRegisterForm : HTMLFormElement;

    execute() {
        return () => {
            this.renderView();
            this.addformListener();
        };
    }

    async addformListener(){
        this.userRegisterForm = document.getElementById('userRegisterForm') as HTMLFormElement;
        this.userRegisterForm.addEventListener('submit', this.addUser.bind(this));
    }


    async addUser(e){
        e.preventDefault();

        const {userMail, userPWD, userRePWD} = this.userRegisterForm.elements;
        // console.log(userMail.value);
        // console.log(userPWD.value);
        // console.log(userRePWD.value);

        if (userPWD.value === userRePWD.value) {
            const apiCall = await APIRest.addUser({
                email:userMail.value,
                password:userPWD.value
            });
            // console.log(apiCall);
            apiCall?frontRouter.navigate('/todos'):console.log('error');

        } else{
          console.log('not working');      
        } 
    }
    
    async renderView(){
        Views.displayView('view-register-user');
    }
}