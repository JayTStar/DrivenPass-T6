import { Router } from "express";

import { userRouter } from "./userRouters.js";
import { credentialRouter } from "./credentialRouters.js";
import { noteRouter } from "./notesRouter.js";
import { cardRouter } from "./cardsRouters.js";
import { wifiRouter } from "./wifiRouters.js";

export const router = Router();

router.use(userRouter);
router.use(credentialRouter);
router.use(noteRouter);
router.use(cardRouter);
router.use(wifiRouter);