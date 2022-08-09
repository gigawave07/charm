import "antd/dist/antd.css";
import Capability from "./pages/homepage/Capability";
import Overview from "./pages/homepage/Overview";
import Projects from "./pages/homepage/Projects";

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
