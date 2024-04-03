export type prodsInCart = {
	productId: {
		_id: number
		title: string
		price: number
		discountPercentage?: number
		discountedPrice?: number
		thumbnail?: string
	}
	quantity: number
}

export type Carts = {
	id: number
	products: prodsInCart[]
	total: number
	discountedTotal: number
	userId: number
	totalProducts: number
	totalQuantity: number
}
