import { BsInfoSquare } from "react-icons/bs";
import TitleSection from "./TitleSection";
import CardFeature from "./cards/CardFeature";
import { dataCards } from "../data/dataCardsFeature";

export default function SectionFeatures() {
	return (
		<section className='py-20'>
			<div className='bg-blue-100 py-6 flex justify-center space-x-5'>
				<BsInfoSquare className='text-2xl' />
				<p>Philosophie : Simplicité, Bonnes pratiques et haute performance.</p>
			</div>
			<div className='py-20 px-20'>
				<TitleSection
					title='Features'
					subtile='Ce que vous obtenez avec AstroWind'
					description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error impedit ab fugiat.'
				/>
			</div>
			<div className='px-20 pb-12'>
				<div className='grid grid-cols-2 gap-y-8'>
					{dataCards.map((item, index) => (
						<CardFeature
							key={index}
							icon={item.icon}
							title={item.title}
							description={item.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
