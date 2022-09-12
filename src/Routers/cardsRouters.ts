import { Router } from "express";

import { validateSchema } from "../Middlewares/schemaValidation.js";
import { cardSchema } from "../Schemas/cardsSchemas.js";
import * as cardControllers from "../Controllers/cardsControllers.js";
import { validateToken } from "../Middlewares/authValidations.js";

export const cardRouter = Router();

cardRouter.use(validateToken);
cardRouter.post("/card", validateSchema(cardSchema), cardControllers.create);
cardRouter.get("/cards", cardControllers.get);
cardRouter.get("/card/:id", cardControllers.getById);
cardRouter.delete("/card/:id", cardControllers.deleteById);