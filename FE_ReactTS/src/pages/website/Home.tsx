import FooterComponent from '@/components/Footer'
import HeaderComponent from '@/components/Header'
import BannerComponent from '@/components/home/Banner'
import BlogComponent from '@/components/home/Blog'
import NewProductsComponent from '@/components/home/NewProducts'
import ServicesComponent from '@/components/Services'
import ShopComponent from '@/components/home/Shop'

const Home: React.FC = () => {
	return (
		<>
			<BannerComponent />
			<NewProductsComponent />
			<ShopComponent />
			<BlogComponent />
			<ServicesComponent />
		</>
	)
}
export default Home
