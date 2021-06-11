import { getModelForClass } from '@typegoose/typegoose';
import { Request, Response } from 'express';
import { UsersModel } from '../../../models/UsersModel';

export class UsersController{
    static model = getModelForClass(UsersModel);

    static findAll = async (req: Request, res: Response) => {
        return res.json({users: await UsersController.model.find({})});
    };

    static findOne = async (req:Request, res:Response) => {
        const {id} = req.params;
        return res.json({users: await UsersController.model.findOne({_id:id})});
    }

    static create = async (req:Request, res:Response) => {
        console.log(JSON.stringify(req.body));
        return res.json(await UsersController.model.register(req.body, req.body.password));
    }
    static update = async(req:Request, res:Response) => {
        const {id} = req.params;
        return res.json(await UsersController.model.updateOne({_id:id}, req.body));
    }
    static delete = async(req:Request, res:Response) => {
        const {id} = req.params;
        return res.json(await UsersController.model.deleteOne({_id:id}));
    }
}