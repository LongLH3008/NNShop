import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Product } from '@/interfaces/Products'
import { SubmitHandler, useForm } from 'react-hook-form'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import { useMutation } from '@tanstack/react-query'
import { addProduct } from '@/services/product'
import { Checkbox } from '@/components/ui/checkbox'
import { useToast } from '@/components/ui/use-toast'

type Props = {
	id: number
	title: string
	featured: boolean
	description: string
	price: number
	discountPercentage?: number
	rating?: number
	stock?: number
	brand?: string
	category?: string
	thumbnail?: string
	images?: string[]
}

const productSchema = Joi.object({
	title: Joi.string().required(),
	price: Joi.number().required(),
	category: Joi.string().required(),
	discountPercentage: Joi.number().required().max(100),
	brand: Joi.string().required(),
	featured: Joi.boolean(),
})

const AddProduct = () => {
	const { toast } = useToast()
	const form = useForm({
		resolver: joiResolver(productSchema),
		defaultValues: {
			title: '',
			price: 0,
			category: '',
			discountPercentage: 0,
			brand: '',
			featured: false,
		},
	})

	const mutation = useMutation({
		mutationFn: async (product: Product) => {
			const { data } = await addProduct(product)
			return data
		},
		onSuccess: () => {
			form.reset()
			toast({
				title: 'Add Product Success !',
				variant: 'success',
			})
		},
	})

	const onSubmit: SubmitHandler<Props> = (product: Product) => {
		console.log(product)
		mutation.mutate(product)
	}

	return (
		<div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
					<FormField
						control={form.control}
						name='title'
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor='title'>Title</FormLabel>
								<FormControl>
									<Input {...field} id='title' />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					></FormField>
					<FormField
						control={form.control}
						name='price'
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor='price'>Price</FormLabel>
								<FormControl>
									<Input {...field} id='price' />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					></FormField>
					<FormField
						control={form.control}
						name='discountPercentage'
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor='discountPercentage'>Discount</FormLabel>
								<FormControl>
									<Input {...field} id='discountPercentage' />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					></FormField>
					<FormField
						control={form.control}
						name='category'
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor='category'>Category</FormLabel>
								<FormControl>
									<Input {...field} id='category' />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					></FormField>
					<FormField
						control={form.control}
						name='brand'
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor='brand'>Brand</FormLabel>
								<FormControl>
									<Input {...field} id='brand' />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					></FormField>
					<FormField
						control={form.control}
						name='featured'
						render={({ field }) => (
							<FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
								<FormControl>
									<input type='checkbox' checked={field.value} onChange={field.onChange} />
									{/* <Checkbox className='border-black ' checked={field.value} onCheckedChange={field.onChange} /> */}
								</FormControl>
								<FormLabel htmlFor='featured'>Featured</FormLabel>
								<FormMessage />
							</FormItem>
						)}
					></FormField>
					<Button className='bg-zinc-700 border-zinc-700 border hover:bg-white hover:text-zinc-700' type='submit'>
						Add
					</Button>
				</form>
			</Form>
		</div>
	)
}

export default AddProduct
