import React from 'react'
import HeaderComponent from '../Header'
import { Outlet } from 'react-router-dom'
import FooterComponent from '../Footer'
type Props = {}

const Layout = (props: Props) => {
	return (
		<>
			<HeaderComponent />
			<Outlet />
			<FooterComponent />
		</>
	)
}

export default Layout
