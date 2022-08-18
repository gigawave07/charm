import { Outlet } from "react-router-dom";
import React from "react";
import { Navbar } from "../../shared/components";

const HomePage = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default HomePage;

export { default as Overview } from "./components/overview/Overview";
export { default as Capability } from "./components/capability/Capability";
export { default as Projects } from "./components/projects/Projects";
