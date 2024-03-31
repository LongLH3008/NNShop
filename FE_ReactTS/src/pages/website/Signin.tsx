import removeIcon from '@/assets/icons/cancer.svg'
import loginFbIcon from '@/assets/icons/facebook-f.svg'
import loginGgIcon from '@/assets/icons/google.svg'
import { useToast } from '@/components/ui/use-toast'
import { useMutation } from '@tanstack/react-query'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useLocalStorage } from '@/hooks/useLocalStorage'

type Props = {}

const signinSchema = Joi.object({
	email: Joi.string().required(),
	password: Joi.string().min(6).required(),
})

const SignIn = (props: Props) => {
	const [, setUser] = useLocalStorage('user', {})
	const navigate = useNavigate()
	const { toast } = useToast()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: joiResolver(signinSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const { mutate } = useMutation({
		mutationFn: async (formData: { email: string; password: string }) => {
			const { data } = await axios.post(`http://localhost:8080/api/v1/auth/signin`, formData)
			const { user } = data
			return user
		},
		onSuccess: (user) => setUser(user),
		onError: (error) => console.log(error),
	})

	const onSubmit = (formData: { email: string; password: string }) => {
		mutate(formData)
	}

	return (
		<section className='signin'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Link to={'/'} className='cancer'>
					<img src={removeIcon} alt='' />
				</Link>
				<div className='title'>
					<p className=''>Login</p>
				</div>
				<div className='signin__username forminput'>
					<label htmlFor='username'>Username</label>
					<input type='text' id='username' {...register('email')} />
				</div>
				{errors.email && <span className='text-red-500'>{errors.email.message}</span>}
				<div className='signin__password forminput'>
					<label htmlFor='password'>Password</label>
					<input type='password' id='password' {...register('password')} />
				</div>
				{errors.password && <span className='text-red-500'>{errors.password.message}</span>}
				<div className='submit'>
					<button type='submit' className=''>
						Login
					</button>
				</div>
				<div className='signin__connectsocial'>
					<div className='__connectfb'>
						<div className='logo'>
							<img src={loginFbIcon} alt='' />
						</div>
						<p>Facebook</p>
					</div>
					<div className='__connectgg'>
						<div className='logo'>
							<img src={loginGgIcon} alt='' />
						</div>
						<p>Google</p>
					</div>
				</div>
				<div className='switchsignup'>
					<p>
						Dont have account ? <Link to='/signup'>Register now</Link>
					</p>
				</div>
			</form>
		</section>
	)
}

export default SignIn
