import { Request, Response, NextFunction } from "express";

import * as userService from "../Services/userServices.js";
import { UserData } from "../Repositories/userRepositories.js";

export async function signup(req: Request, res: Response, next: NextFunction){
    const user: UserData = req.body; 

    await userService.singup(user);

    res.sendStatus(201);
}

export async function signin(req: Request, res: Response) {
    const user: UserData = req.body;

    const token = await userService.signin(user);

    res.send(token);
}

export async function getUserInfo(req: Request, res: Response) {
    const id: number = res.locals.tokenData.userId;

    const userInfo = await userService.getUserInfo(id);

    res.send(userInfo);
}