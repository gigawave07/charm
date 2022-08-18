import { Outlet } from "react-router-dom";
import React from "react";
import { Sidebar } from "../../../shared/components";

export const Characters = () => {
	return (
		<div className={"flex"}>
			<Sidebar />
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default Characters;
export { default as CharactersOverview } from "../components/overview";
export { default as CharactersManagement } from "../components/management";