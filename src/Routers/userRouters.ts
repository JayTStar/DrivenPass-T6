import { Router } from "express";

import { validateSchema } from "../Middlewares/schemaValidation.js";
import * as userSchema from "../Schemas/userSchemas.js";
import * as userController from "../Controllers/userControllers.js";
import {validateToken} from "../Middlewares/authValidations.js";

export const userRouter = Router();

userRouter.use(validateToken);
userRouter.post("/sign-up", validateSchema(userSchema.signUpSchema), userController.signup);
userRouter.post("/sign-in", validateSchema(userSchema.signInSchema), userController.signin);
userRouter.get("/info", validateToken, userController.getUserInfo);