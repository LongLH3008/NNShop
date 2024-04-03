// Cho thông tin dữ liệu như file lab_2.json.
// Hãy khai báo kiểu dữ liệu với từ khoá "type" cho các dữ liệu bao gồm:

// product, products, cart, carts, user, users

export type Product = {
	_id: number | string
	title: string
	featured: boolean
	description: string
	price: number
	discountPercentage?: number
	rating?: number
	stock?: number
	brand?: string
	category?: {
		_id: string
		name: string
		slug?: string
	}
	thumbnail?: string
	images?: string[]
}
