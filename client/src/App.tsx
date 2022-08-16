import "antd/dist/antd.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homepage";
import Services from "./routes/Services";
import Work from "./routes/Work";

function App() {
	return (
		<div className="App">
			{/*<HomePage />*/}
			<Routes>
				<Route path="/" element={<HomePage />}>
					<Route path="Services" element={<Services />} />
					<Route path="Work" element={<Work />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
