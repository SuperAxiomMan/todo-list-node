import { getModelForClass } from '@typegoose/typegoose';
import { NextFunction, Request, Response } from 'express';
import { UsersModel } from '../models/UsersModel';
import passport from 'passport';

export class PassportConfig{
    static model = getModelForClass(UsersModel);

    static config = (req:Request, res:Response, next:NextFunction)=>{
        passport.initialize();
        passport.use(PassportConfig.model.createStrategy());
        next();
    }
}