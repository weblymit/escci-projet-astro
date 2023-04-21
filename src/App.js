import Hero from "./components/Hero";
import SectionFeatures from "./components/SectionFeatures";
import SectionInsideTemplate from "./components/SectionInsideTemplate";
import SectionComponent from "./components/SectionComponent";
import Navbar from "./components/navigation/Navbar";
import SectionStep from "./components/SectionStep";

function App() {
	return (
		<div className='pt-5'>
			<Navbar />
			<Hero />
			<main>
				<SectionFeatures />
				{/* <SectionInsideTemplate /> */}
				<SectionStep />
				<SectionComponent />
			</main>
		</div>
	);
}

export default App;
