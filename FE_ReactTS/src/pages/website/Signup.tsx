import removeIcon from '@/assets/icons/cancer.svg'
import { toast } from '@/components/ui/use-toast'
import { joiResolver } from '@hookform/resolvers/joi'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Joi from 'joi'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

type Props = {}

const signupSchema = Joi.object({
	email: Joi.string()
		.email({ tlds: { allow: false } })
		.min(3)
		.required(),
	password: Joi.string().min(6).required(),
	confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
		'any.only': '"password" does not match',
	}),
})

const SignUp = (props: Props) => {
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm({
		// resolver: joiResolver(signupSchema),
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
	})

	const { mutate } = useMutation({
		mutationFn: async (formData: { email: string; password: string; confirmPassword: string }) => {
			try {
				const newData = {
					email: formData.email,
					password: formData.password,
				}
				const { data } = await axios.post(`http://localhost:8080/api/v1/auth/signup`, newData)
				const { user } = data
				return user
			} catch (error: any) {
				throw error.response.data
			}
		},
		onSuccess: () => {
			toast({
				variant: 'success',
				title: 'Sign Up Success',
				duration: 3000,
			})
			navigate('/signin')
		},
		onError: (error: any) => {
			error.err.map(({ path, message }: any) => {
				path && setError(path, { message })
				console.log({ path, message })
			})
		},
	})
	const onSubmit = (formData: { email: string; password: string; confirmPassword: string }) => {
		mutate(formData)
	}
	return (
		<section className='signup'>
			<form action='#' onSubmit={handleSubmit(onSubmit)}>
				<Link to={'/'} className='cancer'>
					<img src={removeIcon} alt='' />
				</Link>
				<div className='title'>
					<p className=''>Register</p>
				</div>
				<div className='signin__username forminput'>
					<label htmlFor='email'>Email</label>
					<input type='text' id='email' {...register('email')} />
				</div>
				{errors.email && <span className='text-red-500'>{errors.email.message}</span>}
				<div className='signin__password forminput'>
					<label htmlFor='password'>Password</label>
					<input type='password' id='password' {...register('password')} />
				</div>
				{errors.password && <span className='text-red-500'>{errors.password.message}</span>}
				<div className='signin__password forminput'>
					<label htmlFor='confirmPassword'>Confirm Password</label>
					<input type='password' id='confirmPassword' {...register('confirmPassword')} />
				</div>
				{errors.confirmPassword && <span className='text-red-500'>{errors.confirmPassword.message}</span>}
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
