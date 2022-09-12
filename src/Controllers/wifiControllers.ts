import { Request, Response } from "express";
import { CreateWifiData } from "../Repositories/wifiRepositories.js";

import * as wifiServices from "../Services/wifiServices.js";

type WifiBody = Omit<CreateWifiData,"userId">;

export async function create(req: Request, res: Response) {
    const wifiData: WifiBody = req.body;
    const userId: number = res.locals.tokenData.userId;

    await wifiServices.create({ ...wifiData, userId });

    res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
    const userId: number = res.locals.tokenData.userId;

    const wifi = await wifiServices.get(userId);

    res.send(wifi);
}

export async function getById(req: Request, res: Response) {
    const userId: number = res.locals.tokenData.userId;
    const id: number = parseInt(req.params.id);

    const wifi = await wifiServices.getById(userId, id);

    res.send(wifi);
}

export async function deleteById(req: Request, res: Response) {
    const userId: number = res.locals.tokenData.userId;
    const id: number = parseInt(req.params.id);

    await wifiServices.deleteById(userId, id);

    res.sendStatus(200);
}