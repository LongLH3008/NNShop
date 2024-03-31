import ServicesComponent from '@/components/Services'
import React from 'react'
import removeIcon from '@/assets/icons/trash.svg'
import testImg from '@/assets/images/test_image.png'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { prodsInCart } from '@/interfaces/Cart'

type Props = {}

const CartPage = (props: Props) => {
	const [user] = useLocalStorage('user', {})
	const userId = user?._id

	const { data, isLoading, isError } = useQuery({
		queryKey: ['cart', userId],
		queryFn: async () => {
			const { data } = await axios.get(`http://localhost:8080/api/v1/cart/${userId}`)
			return data
		},
	})

	console.log(data)

	if (isLoading) return <p>...Loading</p>
	if (isError) return <p>...Error</p>

	return (
		<>
			<section className='header'>
				<div className='header__subbanner'>
					<img src='https://picsum.photos/id/1/1440/500' alt='banner' />
				</div>
			</section>
			<section className='infocart'>
				<div className='container'>
					<div className='infocart__info'>
						<ul className='infocart__list'>
							<ul className='infocart__listheader'>
								<li className='img'></li>
								<li className='name'>Product</li>
								<li className='price'>Price</li>
								<li className='quantity'>Quantity</li>
								<li className='subtotal'>Subtotal</li>
								<li className='remove'></li>
							</ul>
							{data.data.map((item: prodsInCart, index: number) => (
								<li key={index} className='infocart__listitem'>
									<div className='img'>
										<div className='infocart__imageitem'>
											<img src={item.thumbnail ?? testImg} alt='' />
										</div>
									</div>
									<p className='infocart__nameitem name'>Asgaard sofa</p>
									<p className='infocart__priceitem price'>25.000.000đ</p>
									<div className='quantity'>
										<div className='infocart__quantityitem'>
											<span className='minus'>-</span>
											<span className='quanity'>1</span>
											<span className='plus'>+</span>
										</div>
									</div>
									<p className='infocart__subtotalitem subtotal'>25.000.000đ</p>
									<div className='remove'>
										<div className='infocart__removeitem'>
											<img src={removeIcon} alt='' />
										</div>
									</div>
								</li>
							))}
						</ul>
						<form method='' action='#' className='infocart__checkout'>
							<h3 className='infocart__titletotal'>Cart Totals</h3>
							<div className='__crosslinecheckout'></div>
							<div className='infocart__subtotalcart'>
								<p>Subtotal</p>
								<span>25.000.000đ</span>
							</div>
							<div className='infocart__totalcart'>
								<p>Total</p>
								<span>25.000.000đ</span>
							</div>
							<div className='__crosslinecheckout'></div>
							<button>Check Out</button>
						</form>
					</div>
				</div>
			</section>
			<ServicesComponent />
		</>
	)
}

export default CartPage
