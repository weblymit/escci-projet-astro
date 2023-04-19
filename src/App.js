import Hero from "./components/Hero";
import Navbar from "./components/navigation/Navbar";

function App() {
	return (
		<div className='pt-5'>
			<Navbar />
			<Hero />
			<main></main>
		</div>
	);
}

export default App;
