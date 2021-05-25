//=|*Imports*|=//
import { getModelForClass } from '@typegoose/typegoose';
import { Request, Response } from 'express';
import { Todo } from '../../../models/TodoModel';


class TodoController {
    static model = getModelForClass(Todo)

    static findAll = async (req: Request, res: Response) => {

        return res.json({todos: await TodoController.model.find({})});
    };
}
//=|*Exports*|=//=>app.router.ts
export { TodoController };
