import Hero from "./components/Hero";
import SectionFeatures from "./components/SectionFeatures";
import SectionInsideTemplate from "./components/SectionInsideTemplate";
import Navbar from "./components/navigation/Navbar";

function App() {
	return (
		<div className='pt-5'>
			<Navbar />
			<Hero />
			<main>
				<SectionFeatures />
				<SectionInsideTemplate />
			</main>
		</div>
	);
}

export default App;
