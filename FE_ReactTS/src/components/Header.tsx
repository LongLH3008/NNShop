import React from 'react'
import logo from '../assets/images/logo.svg'
import infoIcon from '../assets/icons/mdi_account-alert-outline.png'
import searchIcon from '../assets/icons/akar-icons_search.png'
import heartIcon from '../assets/icons/akar-icons_heart.png'
import cartIcon from '../assets/icons/ant-design_shopping-cart-outlined.png'
import { Link, NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const HeaderComponent: React.FC = () => {
	return (
		<section className='header'>
			<div className='container'>
				<div className='navbar tw-flex tw-justify-between tw-items-center flex-nowrap'>
					<div className='navbar__logo tw-flex tw-justify-start tw-items-center flex-nowrap'>
						<img src={logo} alt='Logo' />
						<h3 className='navbar__brand'>Furniro</h3>
					</div>
					<Nav className='navbar__main tw-flex tw-justify-between tw-items-center flex-nowrap'>
						<NavLink className='tw-px-5 tw-py-2 hover:tw-bg-yellow-600 hover:tw-text-white' to='/'>
							Home
						</NavLink>
						<NavLink className='tw-px-5 tw-py-2 hover:tw-bg-yellow-600 hover:tw-text-white' to='/shop'>
							Shop
						</NavLink>

						<NavLink className='tw-px-5 tw-py-2 hover:tw-bg-yellow-600 hover:tw-text-white' to='/about'>
							About
						</NavLink>

						<NavLink className='tw-px-5 tw-py-2 hover:tw-bg-yellow-600 hover:tw-text-white' to='/contact'>
							Contact
						</NavLink>
					</Nav>
					<Nav className='navbar__features'>
						<Link className='hover:tw-bg-yellow-600 tw-p-3 tw-rounded-full' to='/infouser'>
							<img src={infoIcon} alt='' />
						</Link>
						<Link className='hover:tw-bg-yellow-600 tw-p-3 tw-rounded-full' to='/search'>
							<img src={searchIcon} alt='' />
						</Link>
						<Link className='hover:tw-bg-yellow-600 tw-p-3 tw-rounded-full' to='/favorite'>
							<img src={heartIcon} alt='' />
						</Link>
						<Link className='hover:tw-bg-yellow-600 tw-p-3 tw-rounded-full' to='/cart'>
							<img src={cartIcon} alt='' />
						</Link>
					</Nav>
				</div>
			</div>
		</section>
	)
}

export default HeaderComponent
