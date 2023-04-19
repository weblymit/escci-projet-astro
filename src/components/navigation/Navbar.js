import { HiOutlineSun, HiOutlineRss } from "react-icons/hi";
import Button from "../button/Button";

export default function Navbar() {
	return (
		<nav className='flex justify-between items-center px-20'>
			{/* logo */}
			<div className='flex space-x-2'>
				<img src='img/rocket.png' alt='' className='w-5' />
				<p className='font-black text-xl'>AstroWind</p>
			</div>
			{/* item nav */}
			<ul className='flex space-x-8'>
				<li>Landing</li>
				<li>Pages</li>
				<li>Widgets</li>
				<li>Blog</li>
			</ul>
			{/* icons */}
			<div className='flex space-x-4 items-center'>
				<HiOutlineSun />
				<HiOutlineRss />
				<Button title='Download' />
			</div>
		</nav>
	);
}
