import { NextFunction, Request, Response } from "express";

export function handleError(error: {type: string, message: string}, req: Request, res: Response, next: NextFunction) {
    console.log(error);

    switch(error.type){
        case "badRequest": 
            res.status(400).send(error.message);
            break;
        case "unauthorized":
            res.status(401).send(error.message);
            break;
        case "notFound":
            res.status(404).send(error.message);
            break;
        case "conflict":
            res.status(409).send(error.message);
            break;
        case "unprocessableEntity":
            res.status(422).send(error.message);
            break;
        default: 
            res.status(500).send(error.message);
    }
}
