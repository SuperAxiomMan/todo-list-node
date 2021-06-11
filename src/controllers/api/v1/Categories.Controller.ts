//=|*Imports*|=//
import { getModelForClass } from '@typegoose/typegoose';
import { Request, Response } from 'express';
import { CategoriesModel } from '../../../models/CategoriesModel';


//=|*Exports*|=//=>app.router.ts
export class CategoriesController {
    static model = getModelForClass(CategoriesModel)

    static findAll = async (req: Request, res: Response) => {
        return res.json({categories: await CategoriesController.model.find({})});
    };

    static findOne = async (req:Request, res:Response) => {
        const {id} = req.params;
        return res.json({categories: await CategoriesController.model.findOne({_id:id})});
    }

    static create = async (req:Request, res:Response) => {
        return res.json(await CategoriesController.model.create(req.body));
    }
    static update = async(req:Request, res:Response) => {
        const {id} = req.params;
        return res.json(await CategoriesController.model.updateOne({_id:id}, req.body));
    }
    static delete = async(req:Request, res:Response) => {
        const {id} = req.params;
        return res.json(await CategoriesController.model.deleteOne({_id:id}));
    }

}


