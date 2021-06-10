//=|*Imports*|=//
import { prop } from '@typegoose/typegoose';

//=|*Exports*|=//=>todoController.ts
export class Todo {
    @prop({ required: true, unique: true })
    public title?: string;
    @prop()
    public description?: string;
    @prop()
    public category?: string;
}
