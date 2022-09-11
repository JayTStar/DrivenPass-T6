import { Request, Response, NextFunction } from "express";

import * as userService from "../Services/userServices.js";

export async function signup(req: Request, res: Response, next: NextFunction){
    const user = req.body; 

    await userService.singup(user);

    res.sendStatus(201);
}