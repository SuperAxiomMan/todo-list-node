/* eslint-disable no-console */
import { getModelForClass } from '@typegoose/typegoose';
import { NextFunction, Request, Response } from 'express';
import { UsersModel } from '../../../models/UsersModel';

export class Authcontroller{
    static model = getModelForClass(UsersModel);

    static login = async (req:Request, res:Response, next:NextFunction) => {
        console.log(req.body);
        

        try {
        const user = await Authcontroller.model.authenticate()(req.body.email, req.body.password);

        console.log(user);

        res.json(user);

        } catch (e) {
            console.log(e);
        }

        
  
    }
}