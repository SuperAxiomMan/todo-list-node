//=|*Imports*|=//
import { prop } from '@typegoose/typegoose';

//=|*Exports*|=//=>Categories.Controller.ts
export class CategoriesModel {
    @prop({ required: true, unique: true })
    public title?: string;
    @prop()
    public description?: string;
}
