import { Router } from "express";
import { createCate, deleteCateById, getCateById, getCates, updateCateById } from "../controllers/category";

const router = Router();

router.get("/category", getCates);
router.post("/category", createCate);
router.get("/category/:id", getCateById);
router.put("/category/:id", updateCateById);
router.delete("/category/:id", deleteCateById);

export default router;
