import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/homepage";
import { Intro, Services, Work } from "./index";

const HomepageRoute = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />}>
				<Route path="" element={<Navigate to="/Intro" />} />
				<Route path="Intro" element={<Intro />} />
				<Route path="Services" element={<Services />} />
				<Route path="Work" element={<Work />} />
			</Route>
		</Routes>
	);
};

export default HomepageRoute;