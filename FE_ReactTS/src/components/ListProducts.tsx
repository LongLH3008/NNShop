import { Product } from '@/interfaces/Products'
import ProductComponent from './Product'

type Props = {
	category: string
	data: Product[]
	keyword: string
}

const ListProducts = (prop: Props) => {
	const { category, keyword, data } = prop

	let products =
		category !== ''
			? data.filter((pd) => pd.title?.includes(keyword) && pd.category === category)
			: data.filter((pd) => pd.title?.includes(keyword))

	return (
		<section className='product'>
			<div className='container'>
				{products.length > 0 ? (
					<div className='product__list'>
						{products?.map((pd: Product, index: number) => <ProductComponent key={index} product={pd} />)}{' '}
					</div>
				) : (
					<p>
						There is no data products with {category !== '' ? +category : ''} {keyword !== '' ? 'keyword ' + keyword : ''} :(
					</p>
				)}
			</div>
		</section>
	)
}

export default ListProducts
