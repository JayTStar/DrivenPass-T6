import Joi from "joi";
import { Credentials } from "@prisma/client";

export const credentialSchema = Joi.object<Credentials>({
    password: Joi.string().required(),
    title: Joi.string().required(),
    username: Joi.string().required(),
    url: Joi.string().uri().required()
})