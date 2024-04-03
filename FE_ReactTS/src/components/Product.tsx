import React from 'react'
import iconShare from '@/assets/icons/gridicons_share.png'
import iconCompare from '@/assets/icons/compare-svgrepo-com 1.png'
import iconLike from '@/assets/icons/Heart.png'
import { Product } from '@/interfaces/Products'
import { Link } from 'react-router-dom'

interface ProductProps {
	product: Product
}

const ProductComponent: React.FC<ProductProps> = ({ product }) => {
	const handleCalcPrice = (price: number, discountPercent: number | undefined | null) => {
		let res = 0
		if (typeof discountPercent == 'number' && discountPercent > 0) {
			return (res = price - Math.floor((price * discountPercent) / 100))
		} else {
			return (res = price)
		}
	}

	return (
		<div className='product__item'>
			<div style={{ backgroundColor: '#e97171' }} className='product__status'>
				<p>- {product.discountPercentage ? Math.floor(product.discountPercentage) : ''} %</p>
			</div>
			<div className='product__imageItem'>
				<img src={product.thumbnail} alt='' className='' />
			</div>
			<div className='product__infoItem'>
				<p className='product__nameItem'>{product.title}</p>
				<p className='product__cateItem'>{product.category?.name}</p>
				<div className='product__priceItem'>
					<span className='product__price'>{handleCalcPrice(product.price, product.discountPercentage)} $</span>
					{product.discountPercentage && product.discountPercentage > 0 ? (
						<span className='product__saleprice'>{product.price} $</span>
					) : (
						''
					)}
				</div>
			</div>
			<div className='product__feature'>
				<div className='__btns'>
					<Link to={`/cart/${product._id}`} className='__addtocart'>
						Add to cart
					</Link>
					<Link to={`/products/${product._id}`} className='__view'>
						View product
					</Link>
					<div className='__more'>
						<span className='__share'>
							<img src={iconShare} alt='' /> Share
						</span>
						<span className='__compare'>
							<img src={iconCompare} alt='' />
						</span>
						<span className='__like'>
							<img src={iconLike} alt='' /> Like
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductComponent
