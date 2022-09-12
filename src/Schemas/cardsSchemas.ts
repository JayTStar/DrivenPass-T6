import { Cards } from "@prisma/client";
import Joi from "joi";

export const cardSchema = Joi.object<Cards>({
    number: Joi.string().pattern(/^[0-9]+$/).required(),
    name: Joi.string().required(),
    cvv: Joi.string().length(3).pattern(/[0-9]{3}/).required(),
    expirationDate: Joi.string().pattern(/^[0-9]{2}\/[0-9]{2}$/).required(),
    password: Joi.string().required(),
    isVirtual: Joi.boolean().required(),
    type: Joi.string().valid("credit", "debit", "both").required(),
    title: Joi.string().required(),
});