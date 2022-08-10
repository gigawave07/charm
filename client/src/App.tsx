import "antd/dist/antd.css";
import Capability from "./pages/homepage/components/Capability";
import Overview from "./pages/homepage/components/Overview";
import Projects from "./pages/homepage/components/Projects";

function App() {
	return (
		<div className="App">
			<Overview />
			<Capability />
			<Projects />
		</div>
	);
}

export default App;
