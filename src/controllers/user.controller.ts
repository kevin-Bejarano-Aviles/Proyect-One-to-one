import { Request, Response } from "express";
import { logger } from '../shared/infra/logger';
import { UserDTO } from '../interfaces/bodyInterfaces';
import { createUser } from '../metodos/userMethods';


export const newUser = async(req:Request,res:Response) => {
    try {
        const {name,last_name} = req.body as UserDTO;

        await createUser(name,last_name);

        return res.status(201).json({
            msg: 'User created'
        });

    } catch (error) {
        logger.error(error as string);
    }
}