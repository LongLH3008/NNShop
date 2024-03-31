import Cart from "../models/cart.js";

export const addItemToCart = async (req, res) => {
	const { userId, productId, quantity } = req.body;
	try {
		let cart = await Cart.findOne({ userId });
		if (!cart) {
			cart = new Cart({ userId, products: [] });
		}
		const existProduct = cart.products.findIndex((item) => item.productId.toString() == productId);
		if (existProduct !== -1) {
			cart.products[existProduct].quantity += quantity;
		} else {
			cart.products.push({ productId, quantity });
		}
		const data = await cart.save();
		res.status(200).json({
			message: "Added to cart",
			data,
		});
	} catch (error) {
		res.status(500).json({
			error,
		});
	}
};

export const getCartByUserId = async (req, res) => {
	try {
		const { userId } = req.params;
		const cart = await Cart.findOne({ userId }).populate("products.productId");
		const data = [...cart.products];
		res.status(200).json({
			// data: data.products,
			data,
		});
	} catch (error) {
		res.status(500).json({
			error,
		});
	}
};

export const removeItemFromCart = async (req, res) => {
	try {
		const { userId, productId } = req.body;
		let cart = await Cart.findOne({ userId }).populate("products.productId");
		if (!cart) {
			return res.status(401).json({
				message: "Cart not found",
			});
		}
		cart.products = cart.products.filter((c) => c.productId && c.productId._id.toString() !== productId);
		await cart.save();

		const data = {
			products: cart.products.map((c) => ({
				productId: c.productId._id,
				name: c.productId.title,
				quantity: c.quantity,
			})),
		};

		res.status(200).json({
			data,
		});
	} catch (error) {
		res.status(500).json({
			error,
		});
	}
};

export const updateItemFromCart = async (req, res) => {
	const { userId, productId, quantity } = req.body;
	try {
		let cart = await Cart.findOne({ userId });
		if (!cart) {
			return res.status(401).json({
				message: "Cart not found",
			});
		}
		const existProduct = cart.products.findIndex((item) => item.productId.toString() == productId);
		if (existProduct !== -1) {
			cart.products[existProduct].quantity = quantity;
		} else {
			return res.status(401).json({
				message: "Product not found",
			});
		}
		await cart.save();
		const data = {
			products: cart.products.map((c) => ({
				productId: c.productId._id,
				name: c.productId.title,
				quantity: c.quantity,
			})),
		};
		res.status(200).json({
			message: "Added to cart",
			data,
		});
	} catch (error) {
		res.status(500).json({
			error,
		});
	}
};
