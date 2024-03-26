import { Link } from 'react-router-dom'

type Props = {}

const Notfound = (props: Props) => {
	return (
		<div className='tw-w-100 tw-h-screen tw-flex tw-justify-start tw-items-center tw-p-48'>
			<h1 className='tw-text-7xl tw-font-semibold'>
				404 <br />
				<p className='tw-text-4xl'>Oops !, Not Found ...</p>
				<br />
				<Link className='tw-text-xl tw-px-4 tw-py-2 tw-border tw-border-solid hover:tw-bg-zinc-900 hover:tw-text-white' to='/'>
					Back to home
				</Link>
			</h1>
		</div>
	)
}

export default Notfound
