import Joi from "joi";
import { SecureNotes } from "@prisma/client";

export const noteSchema = Joi.object<SecureNotes>({
    title: Joi.string().max(50).required(),
    note: Joi.string().max(1000).required(),
});