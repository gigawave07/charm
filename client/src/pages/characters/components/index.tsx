import { Outlet } from "react-router-dom";
import React from "react";
import { Sidebar } from "../../../shared/components";
import { Col, Row } from "antd";

export const Characters = () => {
	return (
		<Row>
			<Col span={3}>
				<Sidebar />
			</Col>
			<Col span={21}>
				<Outlet />
			</Col>
		</Row>
	);
};

export default Characters;
export { default as CharactersOverview } from "../components/overview";
export { default as CharactersManagement } from "../components/management";