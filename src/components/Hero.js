import React from "react";
import ButtonWithIcon from "./button/ButtonWithIcon";
import Button from "./button/Button";

export default function Hero() {
	return (
		<div className='px-20 text-center '>
			<h1 className='font-bold text-4xl pt-20'>
				Des templates gratuites pour créer votre site web <br />
				avec <span className='text-purple-600 '>Astro 3.0</span> + Tailwind CSS
			</h1>
			<p className='pt-8 mx-56 text-lg font-light'>
				<span className='font-semibold'>AstroWind</span> est
				gratuit.customizable et prêt à mettre en production pour Astro 2.0 +
				Tailwind CSS. Adapaté pour les Startups, petite entreprise, applicaition
				Sass, Portfolio pro, Marketing websites; Landing Pages & Blogs
			</p>
			<div className='pt-7 flex justify-center space-x-5'>
				<ButtonWithIcon
					title='Get template'
					bgColor='bg-blue-700'
					textColor='text-white'
				/>
				<Button title='Learn more' />
			</div>
			<div className='pt-10'>
				<img src='img/1.png' alt=' hero astro' />
			</div>
		</div>
	);
}
