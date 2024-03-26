import React, { useEffect, useState } from 'react'
import ProductComponent from '@/components/Product'
import { Product } from '@/interfaces/Products'
import filterIcon from '@/assets/icons/filtering.png'
import gridIcon from '@/assets/icons/grid.png'
import listIcon from '@/assets/icons/Vector.png'

type Props = {}

const ShopPage = (props: Props) => {
	const [products, setProducts] = useState<Product[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(`http://localhost:3000/products`)
				const data: Product[] = await res.json()
				setProducts(data)
			} catch (err) {
				console.log(err)
			}
		}
		fetchData()
	}, [])

	return (
		<>
			<section className='header'>
				<div className='header__subbanner'>
					<img src='https://picsum.photos/id/1/1440/500' alt='banner' />
				</div>
			</section>
			<div className='filter'>
				<div className='filter__byChoose'>
					<span className='__filtering'>
						<img src={filterIcon} alt='' />
						<p>Filter</p>
					</span>
					<span className='__gridfil'>
						<img src={gridIcon} alt='' />
					</span>
					<span className='__listfil'>
						<img src={listIcon} alt='' />
					</span>
					<span className='__resultOption'>
						<p>
							Showing <span className='__indexResults'>1 - 16</span> of <span className='__totalResult'>32</span>
						</p>
					</span>
				</div>
				<div className='filter__byKeyword'>
					<p>Show</p>
					<span className='__resultsShowing'>16</span>
					<p>Short by</p>
					<input className='__inputFilKeyword' type='text' placeholder='Default' />
				</div>
			</div>
			<section className='product'>
				<div className='container'>
					<div className='product__list'>{products?.map((pd, index) => <ProductComponent key={index} product={pd} />)} </div>
				</div>
			</section>
		</>
	)
}

export default ShopPage
