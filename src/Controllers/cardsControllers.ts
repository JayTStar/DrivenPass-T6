import { Request, response, Response } from "express";

import * as cardServices from "../Services/cardsServices.js";
import {CreateCardData} from "../Repositories/cardsRepositories.js"

type CardData = Omit<CreateCardData, "id">

export async function create(req: Request, res: Response) {
    const cardData: CardData  = req.body;
    const userId: number = res.locals.tokenData.userId;

    await cardServices.create({...cardData, userId});

    res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
    const userId: number = res.locals.tokenData.userId;

    const cards = await cardServices.get(userId);

    res.send(cards);
}

export async function getById(req: Request, res: Response) {
    const userId: number = res.locals.tokenData.userId;
    const id: number = parseInt(req.params.id);

    const card = await cardServices.getById(userId, id);

    res.send(card);
}

export async function deleteById(req: Request, res: Response) {
    const userId: number = res.locals.tokenData.userId;
    const id: number = parseInt(req.params.id);
    console.log(id);

    await cardServices.deleteById(id, userId);

    res.sendStatus(200);
}