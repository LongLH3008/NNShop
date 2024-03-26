import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const LayoutAdmin = (props: Props) => {
	return (
		<div className='grid grid-cols-2'>
			<aside>Aside</aside>
			<Outlet />
		</div>
	)
}

export default LayoutAdmin
