import { Router } from "express";

import {validateSchema} from "../Middlewares/schemaValidation.js"
import { credentialSchema } from "../Schemas/credentialSchemas.js";
import * as credentialController from "../Controllers/credentialControllers.js";

export const credentialRouter = Router();

credentialRouter.post("/credential",validateSchema(credentialSchema),credentialController.create);
credentialRouter.get("/credentials", credentialController.get);
credentialRouter.get("/credential/:id", credentialController.getById);
credentialRouter.delete("/credential/:id", credentialController.deleteById);