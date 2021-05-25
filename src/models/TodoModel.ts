//=|*Imports*|=//
import { prop } from '@typegoose/typegoose';

class Todo {
    @prop({ required: true, unique: true })
    public title?: string;
    @prop()
    public description?: string;
}


//=|*Exports*|=//=>todoController.ts
export { Todo };
