import { Outlet } from "react-router-dom"
import React from "react"
import { Sidebar } from "../../../shared/components"
import { Col, Row } from "antd"
import { useAppSelector } from "../../../stores"

export const Characters = () => {
	const isCollapsed = useAppSelector(state => state.sidebar.isCollapsed)

	return (
		<Row>
			<Col span={isCollapsed ? 1 : 3}>
				<Sidebar />
			</Col>
			<Col span={isCollapsed ? 23 : 21}>
				<Outlet />
			</Col>
		</Row>
	)
}

export default Characters
export { default as CharactersOverview } from ".//overview"
export { default as CharactersManagement } from ".//management"