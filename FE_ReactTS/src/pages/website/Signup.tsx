import removeIcon from '@/assets/icons/cancer.svg'
import { Link } from 'react-router-dom'

type Props = {}

const SignUp = (props: Props) => {
	return (
		<section className='signup'>
			<form action='#'>
				<Link to={'/'} className='cancer'>
					<img src={removeIcon} alt='' />
				</Link>
				<div className='title'>
					<p className=''>Register</p>
				</div>
				<div className='signin__username forminput'>
					<label htmlFor='username'>Username</label>
					<input type='text' id='username' />
				</div>
				<div className='signin__password forminput'>
					<label htmlFor='password'>Password</label>
					<input type='password' id='password' />
				</div>
				<div className='signin__password forminput'>
					<label htmlFor='repassword'>RePassword</label>
					<input type='password' id='repassword' />
				</div>
				<div className='submit'>
					<button type='submit'>Register</button>
				</div>
				<div className='switchsignup'>
					<p>
						<Link to='/signin'>Login</Link>
					</p>
				</div>
			</form>
		</section>
	)
}

export default SignUp
