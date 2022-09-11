import Joi from "joi";

export const signUpSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});

export const signInSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});