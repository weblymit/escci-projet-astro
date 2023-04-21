export default function CardFeature({ icon, title, description }) {
	return (
		<div className='flex space-x-4 '>
			{icon}
			<div className='max-w-md'>
				<p className='font-bold text-2xl pb-2'>{title}</p>
				<p className='font-light'>{description}</p>
			</div>
		</div>
	);
}
