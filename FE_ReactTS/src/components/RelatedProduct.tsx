import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getRelatedProducts } from '@/services/product'
import ProductComponent from './Product'
import { Product } from '@/interfaces/Products'

type prop = {
	category: string | any
	id: number | string | any
}

const RelatedProduct: React.FC<prop> = ({ category, id }) => {
	const {
		data: relatedProducts,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['PRODUCT_KEY'],
		queryFn: () => getRelatedProducts({ category, id }),
	})

	if (isLoading) return <p>... Loading</p>
	if (isError) return <p>... Error</p>

	return (
		<section className='product'>
			<div className='container'>
				<div className='text-center'>
					<h4 className='text-3xl text-zinc-700 mb-16'>Related Product</h4>
				</div>
				<div className='product__list'>
					{relatedProducts?.map((pd: Product, index: number) => <ProductComponent key={index} product={pd} />)}{' '}
				</div>
			</div>
		</section>
	)
}

export default RelatedProduct
