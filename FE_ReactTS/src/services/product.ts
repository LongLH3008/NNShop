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

export const getProductById = async (id: string) => {
	try {
		const response = await instance.get(`/products/${id}`)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export const getNewProducts = async (): Promise<Product[]> => {
	try {
		const { data } = await instance.get('/products')
		const filter = data.data.filter((pd: Product) => pd?.featured == true)
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
	id: string
}

export const getRelatedProducts = async (prod: prod) => {
	try {
		const { data } = await instance.get(`/products`)
		const related = await data.data.filter((pd: Product) => pd.category?._id == prod.category && pd._id != prod.id)
		return related.splice(0, 4)
	} catch (error) {
		console.log(error)
	}
}
