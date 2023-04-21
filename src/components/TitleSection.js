export default function TitleSection({ title, subtile, description }) {
	return (
		<div className='text-center'>
			<p className='uppercase text-blue-500 text-sm'>{title}</p>
			<p className='font-bold text-3xl pb-2'>{subtile}</p>
			<p className='font-light'>{description}</p>
		</div>
	);
}
