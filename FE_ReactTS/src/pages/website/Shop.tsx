import React, { ChangeEventHandler, useEffect, useState } from 'react'
import { Product } from '@/interfaces/Products'
import filterIcon from '@/assets/icons/filtering.png'
import gridIcon from '@/assets/icons/grid.png'
import listIcon from '@/assets/icons/Vector.png'
import ListProducts from '@/components/ListProducts'

type Props = {}

const ShopPage = (props: Props) => {
	const [products, setProducts] = useState<Product[]>([])
	const [display, setDisplay] = useState('h-0')
	const [filter, setFilter] = useState({ category: '', keyword: '' })

	const chooseCate =
		(cate: string): React.MouseEventHandler<HTMLLIElement> =>
		() => {
			setFilter({ category: cate, keyword: '' })
		}

	const searchKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
		let kw = event.target.value
		setFilter({ category: '', keyword: kw })
	}

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
					<span className='__filtering' onMouseEnter={() => setDisplay(display === 'h-0' ? 'h-56' : 'h-0')}>
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
					<input className='__inputFilKeyword' type='text' placeholder='Default' onChange={searchKeyword} />
				</div>
			</div>
			<div className={'bg-[#f9f1e9] shadow-sm mb-30 overflow-hidden border-zinc-200 px-24 ' + display} onMouseLeave={() => setDisplay('h-0')}>
				<ul>
					<li className='cursor-pointer hover:text-zinc-700 hover:bg-red-600' onClick={chooseCate('smartphones')}>
						smartphones
					</li>
					<li className='cursor-pointer hover:text-zinc-700 hover:bg-red-600' onClick={chooseCate('smartphones222')}>
						smartphones222
					</li>
					<li className='cursor-pointer hover:text-zinc-700 hover:bg-red-600' onClick={chooseCate('smartphones33')}>
						smartphones33
					</li>
					<li className='cursor-pointer hover:text-zinc-700 hover:bg-red-600' onClick={chooseCate('smartphones4')}>
						smartphones4
					</li>
					<li className='cursor-pointer hover:text-zinc-700 hover:bg-red-600' onClick={chooseCate('smartphones0')}>
						smartphones0
					</li>
				</ul>
			</div>
			<ListProducts data={products} category={filter.category} keyword={filter.keyword} />
		</>
	)
}

export default ShopPage
