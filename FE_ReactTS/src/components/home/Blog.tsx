import React from 'react'

type Props = {}

const BlogComponent = (props: Props) => {
	return (
		<section className='blog'>
			<div className='container'>
				<div className='blog__title'>
					<h3>BLOG</h3>
				</div>
				<div className='blog__list'>
					<div className='blog__item'>
						<div className='blog__imageItem'>
							<img src='https://picsum.photos/id/22/605/250' alt='' />
						</div>
						<div className='blog__info'>
							<h3 className='blog__name'>THE ULTIMATE SOFA BUYING GUIDE</h3>
							<p className='blog__desc'>
								The versatility of our living space is more crucial than ever. But buying a sofa might be a difficult undertaking.
								Your needs and the size of your living area will determine everything, However, don’t worry, were are here to help
							</p>
							<div className='blog__about'>
								<button>
									ABOUT <i className='fa-solid fa-arrow-right'></i>
								</button>
							</div>
						</div>
					</div>
					<div className='blog__item'>
						<div className='blog__imageItem'>
							<img src='https://picsum.photos/id/6/605/250' alt='' />
						</div>{' '}
						<div className='blog__info'>
							<h3 className='blog__name'>THE ULTIMATE SOFA BUYING GUIDE</h3>
							<p className='blog__desc'>
								The versatility of our living space is more crucial than ever. But buying a sofa might be a difficult undertaking.
								Your needs and the size of your living area will determine everything, However, don’t worry, were are here to help
							</p>
							<div className='blog__about'>
								<button>
									ABOUT <i className='fa-solid fa-arrow-right'></i>
								</button>
							</div>
						</div>
					</div>
					<div className='blog__item'>
						<div className='blog__imageItem'>
							<img src='https://picsum.photos/id/4/605/250' alt='' />
						</div>{' '}
						<div className='blog__info'>
							<h3 className='blog__name'>THE ULTIMATE SOFA BUYING GUIDE</h3>
							<p className='blog__desc'>
								The versatility of our living space is more crucial than ever. But buying a sofa might be a difficult undertaking.
								Your needs and the size of your living area will determine everything, However, don’t worry, were are here to help
							</p>
							<div className='blog__about'>
								<button>
									ABOUT <i className='fa-solid fa-arrow-right'></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlogComponent
