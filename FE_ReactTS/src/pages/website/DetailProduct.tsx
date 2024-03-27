import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getProductById } from '@/services/product.ts'
import fbIcon from '@/assets/icons/fb.png'
import linkeinIcon from '@/assets/icons/linkein.png'
import twitterIcon from '@/assets/icons/twitter.png'
import starLogo from '@/assets/icons/star.png'
import halfStarLogo from '@/assets/icons/half_star.png'
import RelatedProduct from '@/components/RelatedProduct'

type Props = {}

const DetailProduct = (props: Props) => {
	const { id } = useParams()
	const { data: product, isLoading } = useQuery({
		queryKey: ['PRODUCT_KEY', id],
		queryFn: async () => await getProductById(id as string),
	})

	const handleCalcPrice = (price: number, discountPercent: number | undefined | null) => {
		if (typeof discountPercent == 'number' && discountPercent > 0) {
			return price - Math.floor((price * discountPercent) / 100)
		} else {
			return price
		}
	}

	const images = product?.images

	if (isLoading) return <p>...Loading</p>
	return (
		<>
			<section className='detailproduct'>
				<div className='container'>
					<div className='detailproduct__main'>
						<div className='detailproduct__images'>
							<ul className='detailproduct__thumbnails'>
								{images?.map((image: string, index: number) => (
									<li key={index} className='detailproduct__thumbitems'>
										<img src={image} alt='' />
									</li>
								))}
							</ul>
							<div className='detailproduct__showingImage'>
								<img src={product?.thumbnail} alt='' />
							</div>
						</div>
						<div className='detailproduct__info'>
							<div className='detailproduct__mainInfo'>
								<p className='detailproduct__name'>{product.title}</p>
								<div className='detailproduct__price'>
									<span className='product__price'>{handleCalcPrice(product.price, product.discountPercentage)} $</span>
									{product.discountPercentage && product.discountPercentage > 0 ? (
										<span className='product__saleprice'>{product.price} $</span>
									) : (
										''
									)}
								</div>
								<div className='detailproduct__vote'>
									<div className='detailproduct__stars'>
										<img src={starLogo} className='detailproduct__star' alt='' />
										<img src={starLogo} className='detailproduct__star' alt='' />
										<img src={starLogo} className='detailproduct__star' alt='' />
										<img src={starLogo} className='detailproduct__star' alt='' />
										<img src={halfStarLogo} className='detailproduct__star' alt='' />
									</div>
									<span className='detailproduct__totalvote'> 5 Customer Review </span>
								</div>
								<p className='detailproduct__introduce'>{product.description}</p>
								<div className='detailproduct__sizes'>
									<p>Size</p>
									<div className='detailproduct__sizebtns'>
										<span style={{ background: '#b88e2f', color: '#fff' }} className='detailproduct__sizeItem'>
											L
										</span>
										<span className='detailproduct__sizeItem'>XL</span>
										<span className='detailproduct__sizeItem'>XS</span>
									</div>
								</div>
								<div className='detailproduct__colors'>
									<p>Color</p>
									<div className='detailproduct__colorbtns'>
										<div className='detailproduct__colorItem'>
											<span style={{ background: '#816dfa' }} className='__circle' />
										</div>
										<div className='detailproduct__colorItem'>
											<span style={{ background: '#000000' }} className='__circle' />
										</div>
										<div className='detailproduct__colorItem'>
											<span style={{ background: '#b88e2f' }} className='__circle' />
										</div>
									</div>
								</div>
								<div className='detailproduct__action'>
									<div className='detailproduct__changeAmount'>
										<span className='minus'>-</span>
										<span className='detailproduct__amount'>1</span>
										<span className='plus'>+</span>
									</div>
									<div className='detailproduct__add_compare'>
										<button className='detailproduct__addtocart'>Add To Cart</button>
										<button className='detailproduct__compare'>+ Compare</button>
									</div>
								</div>
							</div>
							<div className='__crossline' />
							<ul className='detailproduct__type'>
								<li>
									<p>SKU</p>
									<span>:</span>
									<span>SS001</span>
								</li>
								<li>
									<p>Category</p>
									<span>:</span>
									<span>Sofas</span>
								</li>
								<li>
									<p>Tags</p>
									<span>:</span>
									<span>Sofa, Chair, Home, Shop</span>
								</li>
								<li>
									<p>Share</p>
									<span>:</span>
									<span className='__social'>
										<img src={fbIcon} alt='' />
										<img src={linkeinIcon} alt='' />
										<img src={twitterIcon} alt='' />
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			{/* End Detail product  */}
			<section className='moreinfo'>
				<div className='container'>
					<div className='moreinfo__containlist'>
						<div className='moreinfo__list'>
							<span style={{ color: '#000' }} className='moreinfo__desc'>
								Description
							</span>
							<span className='moreinfo__additional'>Additional Information</span>
							<span className='moreinfo__review'>Reviews [5]</span>
						</div>
					</div>
					<div className='moreinfo__showing'>
						<p className=''>
							Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look
							and sound of Marshall, unplugs the chords, and takes the show on the road.
							<br />
							<br />
							Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of
							the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a
							clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine
							tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
						</p>
					</div>
					<div className='moreinfo__showingImage'>
						<span className='__img'>
							<img src='../assets/images/test_image.png' alt='' />
						</span>
						<span className='__img'>
							<img src='../assets/images/test_image.png' alt='' />
						</span>
					</div>
				</div>
			</section>
			<div className='__crossline_detailpage' />
			{/* End More Info */}
			<RelatedProduct cate={product?.category} />
			<div className='__crosslinefooter' />
			{/* End Related Product */}
		</>
	)
}
export default DetailProduct
