import React from "react";
import Navbar from "../../navbar";
import { Outlet } from "react-router-dom";

const HomePage = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default HomePage;