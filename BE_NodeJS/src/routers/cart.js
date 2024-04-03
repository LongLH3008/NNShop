import { Router } from "express";
import {
	addItemToCart,
	decreaseQuantity,
	getCartByUserId,
	increaseQuantity,
	removeItemFromCart,
	updateItemFromCart,
} from "../controllers/cart";

const router = Router();

router.get("/cart/:userId", getCartByUserId);
router.post("/cart", addItemToCart);
router.post("/cart/increase", increaseQuantity);
router.post("/cart/decrease", decreaseQuantity);
router.put("/cart", updateItemFromCart);
router.delete("/cart", removeItemFromCart);

export default router;
