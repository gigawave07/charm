import { Navbar } from "../index";
import { Outlet } from "react-router-dom";
import React from "react";

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
