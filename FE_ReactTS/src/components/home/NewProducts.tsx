import React from 'react'
import ProductComponent from '../Product'
import { useQuery } from '@tanstack/react-query'
import { getNewProducts } from '@/services/product'

const NewProductsComponent: React.FC = () => {
	const {
		data: newProducts,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['PRODUCT_KEY'],
		queryFn: getNewProducts,
	})

	if (isLoading) return <p>... Loading</p>
	if (isError) return <p>... Error</p>

	return (
		<section className='product'>
			<div className='container'>
				<div className='product__title'>
					<h4>New</h4>
				</div>
				<div className='product__list'>{newProducts?.map((pd, index) => <ProductComponent key={index} product={pd} />)} </div>
			</div>
		</section>
	)
}

export default NewProductsComponent
