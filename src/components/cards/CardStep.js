export default function CardStep({ icon, title, description, step }) {
	return (
		<div className='flex space-x-4'>
			<div className='flex flex-col items-center'>
				<div className='text-2xl'>{icon}</div>
				{/* {step === "Ready!" ? "" : <div className='bg-gray-300 h-full w-[1px]'></div>} */}
				{step !== "Ready!" && (
					<div className='bg-gray-300 h-full w-[1px]'></div>
				)}
			</div>
			<div className='pb-8'>
				<p className='text-2xl pb-2'>
					<span className='font-bold'>{step}</span>
					{title}
				</p>
				<p className='font-light'>{description}</p>
			</div>
		</div>
	);
}
