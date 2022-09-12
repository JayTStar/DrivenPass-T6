import { Router } from "express";

import { validateSchema } from "../Middlewares/schemaValidation.js";
import { noteSchema } from "../Schemas/notesSchemas.js";
import * as noteControllers from "../Controllers/notesControllers.js";
import { validateToken } from "../Middlewares/authValidations.js";

export const noteRouter = Router();

noteRouter.use(validateToken);
noteRouter.post("/note", validateSchema(noteSchema), noteControllers.create);
noteRouter.get("/notes", noteControllers.get);
noteRouter.get("/note/:id", noteControllers.getById);
noteRouter.delete("/note/:id", noteControllers.deleteById);