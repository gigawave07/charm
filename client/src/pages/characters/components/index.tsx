import { Link, Outlet } from "react-router-dom";
import React from "react";

export const Characters = () => {
	return (
		<>
			<div>
				Characters <Link to={`Overview`}>Overview</Link> | <Link to={`Management`}>Management</Link>
			</div>
			<Outlet />
		</>
	);
};

export default Characters;
export { default as CharactersOverview } from "../components/overview";
export { default as CharactersManagement } from "../components/management";