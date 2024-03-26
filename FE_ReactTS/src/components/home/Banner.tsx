import React from 'react'

type Props = {}

const BannerComponent = (props: Props) => {
	return (
		<div className='header__banner'>
			<img src='https://picsum.photos/id/8/1440/500' alt='banner' />
		</div>
	)
}

export default BannerComponent
