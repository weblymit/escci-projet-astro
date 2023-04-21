import React from "react";
export default function CardComponent({ title, description, url_img }) {
	return (
		<div className='bg-white p-4 shadow-lg rounded-md'>
			<div className='flex items-center space-x-3 pb-2'>
				<img src={url_img} alt='' className='w-6' />
				<p className='font-bold text-lg'>{title}</p>
			</div>
			<p className='font-light text-sm'>{description}</p>
		</div>
	);
}
