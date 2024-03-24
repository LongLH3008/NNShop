import express from "express";
import { createProd, deleteProdById, getProdById, getProds, updateProdById } from "../controllers/products";

const router = express.Router();

router.get("/products", getProds);
router.post("/products", createProd);
router.get("/products/:id", getProdById);
router.put("/products/:id", updateProdById);
router.delete("/products/:id", deleteProdById);

export default router;
