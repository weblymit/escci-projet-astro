import React from "react";
import TitleSection from "./TitleSection";
import { dataCardComponent } from "../data/dataCardsComponent";
import CardComponent from "./cards/CardComponent";

export default function SectionComponent() {
	return (
		<section className='bg-blue-100 py-20 px-20'>
			<TitleSection
				title='Components'
				subtile='Most used widgets'
				description='Lorem, ipsum dolor sit amet consectetur adipisicing elit'
			/>
			<div className='grid grid-cols-3 gap-4 pt-16'>
				{dataCardComponent.map((item, index) => (
					<CardComponent
						key={index}
						url_img={item.ficon}
						title={item.title}
						description={item.content}
					/>
				))}
			</div>
		</section>
	);
}
