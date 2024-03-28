import instance from '@/configs/axios'
import { Product } from '@/interfaces/Products'

export const getAllProducts = async (): Promise<Product[]> => {
	try {
		const response = await instance.get('/products')
		console.log(response.data)

		return response.data
	} catch (error) {
		return []
	}
}

export const getProductById = async (id: number | string) => {
	try {
		const response = await instance.get(`/products/${id}`)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export const getNewProducts = async (): Promise<Product[]> => {
	try {
		const response = await instance.get('/products')
		const filter = response.data.filter((pd: Product) => pd?.featured == true)
		return filter
	} catch (error) {
		return []
	}
}

export const addProduct = async (product: Product) => {
	try {
		const response = await instance.post('/products', product)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

type prod = {
	category: string
	id: number | string
}

export const getRelatedProducts = async (prod: prod) => {
	try {
		const response = await instance.get(`/products`)
		const related = await response.data.filter((pd: Product) => pd.category === prod.category && pd.id != prod.id)
		console.log(related)
		return related.splice(0, 4)
	} catch (error) {
		console.log(error)
	}
}
