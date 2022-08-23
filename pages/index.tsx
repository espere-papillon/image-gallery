import Image from 'next/image';

export default function Gallery() {
	return (
		<div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
			<div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
				<BlurImage />
			</div>
		</div>
	)
}

function BlurImage() {
	return (
		<a href="#" className='group'>
			<div className='aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200'>
				<Image src="https://bit.ly/placeholder-img" alt="" layout='fill' objectFit='cover' className='group-hover:opacity-75' />
			</div>
			<h3 className='mt-4 text-sm text-gray-700'>Marina</h3>
			<p className='mt-1 text-lg font-medium text-gray-900'>text</p>
		</a>
	)
}