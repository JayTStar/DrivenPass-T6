import { Wifi } from "@prisma/client";
import Joi from "joi";

export const wifiSchema = Joi.object<Wifi>({
    title: Joi.string().required(),
    name: Joi.string().required(),
    password: Joi.string().required(),
});