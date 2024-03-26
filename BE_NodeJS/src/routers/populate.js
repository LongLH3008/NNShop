import { Router } from "express";
import { demoPopulate } from "../controllers/populate";

const router = Router();

router.post("/populate", demoPopulate);

export default router;
