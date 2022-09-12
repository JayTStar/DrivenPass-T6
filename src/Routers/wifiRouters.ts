import { Router } from "express";

import { validateSchema } from "../Middlewares/schemaValidation.js";
import { wifiSchema } from "../Schemas/wifiSchemas.js";
import * as wifiControllers from "../Controllers/wifiControllers.js";

export const wifiRouter = Router();

wifiRouter.post("/wifi", validateSchema(wifiSchema), wifiControllers.create);
wifiRouter.get("/wifi", wifiControllers.get);
wifiRouter.get("/wifi/:id", wifiControllers.getById);
wifiRouter.delete("/wifi/:id", wifiControllers.deleteById);