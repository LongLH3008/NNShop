import React from 'react'
import iconTrophy from '@/assets/images/trophy 1.png'
import iconWarranty from '@/assets/images/guarantee.png'
import iconShip from '@/assets/images/shipping.png'
import iconCustomerSupport from '@/assets/images/customer-support.png'

type Props = {}

const ServicesComponent = (props: Props) => {
	return (
		<section className='services'>
			<div className='services__item'>
				<img className='services__imageItem' src={iconTrophy} />
				<div className='sevices__infoItem'>
					<h4 className='services__name'>High Quality</h4>
					<span className='services__desc'>crafted from top materials</span>
				</div>
			</div>
			<div className='services__item'>
				<img className='services__imageItem' src={iconWarranty} />
				<div className='sevices__infoItem'>
					<h4 className='services__name'>Warranty Protection</h4>
					<span className='services__desc'>Over 2 years</span>
				</div>
			</div>
			<div className='services__item'>
				<img className='services__imageItem' src={iconShip} />
				<div className='sevices__infoItem'>
					<h4 className='services__name'>Free Shipping</h4>
					<span className='services__desc'>Order over 150 $</span>
				</div>
			</div>
			<div className='services__item'>
				<img className='services__imageItem' src={iconCustomerSupport} />
				<div className='sevices__infoItem'>
					<h4 className='services__name'>24 / 7 Support</h4>
					<span className='services__desc'>Dedicated support</span>
				</div>
			</div>
		</section>
	)
}

export default ServicesComponent
