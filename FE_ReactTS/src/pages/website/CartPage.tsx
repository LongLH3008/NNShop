import removeIcon from '@/assets/icons/trash.svg'
import testImg from '@/assets/images/test_image.png'
import ServicesComponent from '@/components/Services'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { prodsInCart } from '@/interfaces/Cart'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

type Props = {}

const CartPage = (props: Props) => {
	const queryClient = useQueryClient()
	const [user] = useLocalStorage('user', {})
	const userId = user?._id

	const handleIncrease = useMutation({
		mutationFn: async (productId: any) => {
			const { data } = await axios.post(`http://localhost:8080/api/v1/cart/increase`, {
				userId,
				productId,
			})
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['cart', userId],
			})
		},
	})

	const handleDecrease = useMutation({
		mutationFn: async (productId: any) => {
			const { data } = await axios.post(`http://localhost:8080/api/v1/cart/decrease`, {
				userId,
				productId,
			})
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['cart', userId],
			})
		},
	})

	const {
		data: cart,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['cart', userId],
		queryFn: async () => {
			const { data } = await axios.get(`http://localhost:8080/api/v1/cart/${userId}`)
			console.log(data.data)
			return data.data
		},
	})

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
							{cart?.map((item: prodsInCart, index: number) => (
								<li key={index} className='infocart__listitem'>
									<div className='img'>
										<div className='infocart__imageitem'>
											<img src={item.productId?.thumbnail ?? testImg} alt='' />
										</div>
									</div>
									<p className='infocart__nameitem name'>{item.productId?.title}</p>
									<p className='infocart__priceitem price'>{item.productId?.price} $</p>
									<div className='quantity'>
										<div className='infocart__quantityitem'>
											<span className='minus' onClick={() => handleDecrease.mutate(item.productId._id)}>
												-
											</span>
											<span className='quanityproduct'>{item.quantity}</span>
											<span className='plus' onClick={() => handleIncrease.mutate(item.productId._id)}>
												+
											</span>
										</div>
									</div>
									<p className='infocart__subtotalitem subtotal'>{Math.ceil(item.quantity * item.productId.price)} $</p>
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
