type prodsInCart = {
	id: number
	title: string
	price: number
	quantity: number
	total: number
	discountPercentage: number
	discountedPrice: number
	thumbnail: string
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
