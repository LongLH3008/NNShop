import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Product } from '@/interfaces/Products'
import { useForm } from 'react-hook-form'

type Props = {}

const AddProduct = (props: Props) => {
	const form = useForm({
		defaultValues: {
			name: '',
			price: 0,
		},
	})

	const onSubmit = (product: Product) => {
		console.log(product)
	}

	return (
		<div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor='name'>Name</FormLabel>
								<FormControl>
									<Input {...field} id='name' />
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
					<Button className='bg-zinc-700 border-zinc-700 border hover:bg-white hover:text-zinc-700' type='submit'>
						Add
					</Button>
				</form>
			</Form>
		</div>
	)
}

export default AddProduct
