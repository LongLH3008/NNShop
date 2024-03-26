import { Route, Routes } from 'react-router-dom'
import Home from './pages/website/Home'
import Notfound from './pages/website/404notfound'
import Layout from './components/layouts/Layout'
import DetailProduct from './pages/website/DetailProduct'
import LayoutAdmin from './components/layouts/LayoutAdmin'
import ProductManagement from './pages/admin/product'
import AddProduct from './pages/admin/product/add'
import EditProduct from './pages/admin/product/edit'
import ShopPage from './pages/website/Shop'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' index element={<Home />}></Route>
					<Route path='shop' element={<ShopPage />}></Route>
					<Route path='about' element={<Home />}></Route>
					<Route path='contact' element={<Home />}></Route>
					<Route path='products/:id' element={<DetailProduct />}></Route>
				</Route>
				<Route path='*' element={<Notfound />} />
				<Route path='admin' element={<LayoutAdmin />}>
					<Route path='products' element={<ProductManagement />} />
					<Route path='product/add' element={<AddProduct />} />
					<Route path='product/:id/edit' element={<EditProduct />} />
				</Route>
			</Routes>
		</>
	)
}

export default App