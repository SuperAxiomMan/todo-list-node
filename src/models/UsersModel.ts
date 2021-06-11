//=|*Imports*|=//
import { plugin, prop, Ref } from '@typegoose/typegoose';
import passportLocal from 'passport-local-mongoose';
import { TodoModel } from './TodoModel';


@plugin(passportLocal, {
    usernameField:'email'
})
class UsersModel {
   @prop ({required:true, unique:true})
   public email?:string;
   @prop ({ref: () =>TodoModel})
   public todos?:Ref<TodoModel>[];
}

export {UsersModel};
