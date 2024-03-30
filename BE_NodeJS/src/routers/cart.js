import { Router } from "express";
import { addItemToCart, getCartByUserId, removeItemFromCart, updateItemFromCart } from "../controllers/cart";

const router = Router();

router.get("/cart/:userId", getCartByUserId);
router.post("/cart", addItemToCart);
router.put("/cart", updateItemFromCart);
router.delete("/cart", removeItemFromCart);

export default router;
