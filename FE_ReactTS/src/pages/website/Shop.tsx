import React, { useEffect, useState } from 'react'
import { Product } from '@/interfaces/Products'
import filterIcon from '@/assets/icons/filtering.png'
import gridIcon from '@/assets/icons/grid.png'
import listIcon from '@/assets/icons/Vector.png'
import ListProducts from '@/components/ListProducts'

type Category = {
	name: string
}

type data = {
	products: Product[]
	categories: Category[]
}

const ShopPage = () => {
	const [data, setData] = useState<data>({ products: [], categories: [] })
	const [display, setDisplay] = useState('h-0')
	const [activeCate, setActiveCate] = useState('')
	const [filter, setFilter] = useState({ category: '', keyword: '' })

	const chooseCate =
		(cate: string): React.MouseEventHandler<HTMLLIElement> =>
		() => {
			setFilter({ category: cate, keyword: filter.keyword })
			setActiveCate(cate)
		}

	const searchKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
		let kw = event.target.value
		setFilter({ category: filter.category, keyword: kw })
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(`http://localhost:3000/products`)
				const res2 = await fetch(`http://localhost:3000/categories`)
				const data: Product[] = await res.json()
				const data2: Category[] = await res2.json()
				setData({ products: data, categories: data2 })
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
					<span className='__filtering' onMouseEnter={() => setDisplay(display === 'h-0' ? 'h-56 pb-10' : 'h-0')}>
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
						{filter.category !== '' ? (
							<p>
								Showing products of <strong className='__indexResults'>{filter.category}</strong>
							</p>
						) : (
							'All'
						)}
					</span>
				</div>
				<div className='filter__byKeyword'>
					<p>Show</p>
					<span className=''>{filter.category ? filter.category : 'All'}</span>
					<p>Short by</p>
					<input className='__inputFilKeyword' type='text' placeholder='Search ...' onChange={searchKeyword} />
				</div>
			</div>
			<div className={'bg-[#f9f1e9] shadow-sm mb-30 overflow-hidden border-zinc-200 px-24 ' + display} onMouseLeave={() => setDisplay('h-0')}>
				<ul className='overscrollHidden h-48 overflow-y-scroll'>
					{data.categories.map((c, index) => (
						<li
							key={index}
							className={activeCate == c.name ? 'bg-zinc-500 text-white p-2' : 'p-2 cursor-pointer hover:text-white hover:bg-zinc-400'}
							onClick={chooseCate(c.name)}
						>
							{c.name}
						</li>
					))}
					<li className='p-2 cursor-pointer hover:text-white hover:bg-zinc-400' onClick={chooseCate('')}>
						All
					</li>
				</ul>
			</div>
			<ListProducts data={data.products} category={filter.category} keyword={filter.keyword} />
		</>
	)
}

export default ShopPage
