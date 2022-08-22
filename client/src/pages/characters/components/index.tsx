import { Outlet } from "react-router-dom";
import React from "react";
import { Sidebar } from "../../../shared/components";
import { Col, Row } from "antd";
import { useAppSelector } from "../../../stores";

export const Characters = () => {
	const isCollapsed = useAppSelector(state => state.sidebar.isCollapsed);

	return (
		<Row>
			<Col span={isCollapsed ? 2 : 4}>
				<Sidebar />
			</Col>
			<Col span={isCollapsed ? 22 : 20}>
				<Outlet />
			</Col>
		</Row>
	);
};

export default Characters;
export { default as CharactersOverview } from "../components/overview";
export { default as CharactersManagement } from "../components/management";