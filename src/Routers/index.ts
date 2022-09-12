import { Router } from "express";

import { userRouter } from "./userRouters.js";
import { credentialRouter } from "./credentialRouters.js";

export const router = Router();

router.use(userRouter);
router.use(credentialRouter);