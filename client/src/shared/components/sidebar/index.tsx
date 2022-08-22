import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { StyleSider } from "./styles";
import { useAppDispatch, useAppSelector } from "../../../stores";
import { changeSidebarState } from "./reducers";
import Sider from "antd/lib/layout/Sider";

const items = [
	{
		label: <Link to={`Overview`}>Overview</Link>,
		key: "Overview",
		icon: <img src="/resources/images/maho-icon.png" alt="overview" style={{ height: "100%" }} />,
	},
	{
		label: <Link to={`Management`}>Management</Link>,
		key: "Management",
		icon: <img src="/resources/images/kasumi-icon.png" alt="overview" style={{ height: "100%" }} />,
	},
	{
		label: <Link to={`Analysis`}>Analysis</Link>,
		key: "Analysis",
		icon: <img src="/resources/images/tsumugi-icon.png" alt="overview" style={{ height: "100%" }} />,
	},
];
const Sidebar = () => {
	const dispatch = useAppDispatch();
	const isCollapsed = useAppSelector(state => state.sidebar.isCollapsed);

	return (
		<StyleSider>
			<Sider collapsible collapsed={isCollapsed} onCollapse={(value: boolean) => dispatch(changeSidebarState(value))}>
				<img src="/resources/images/characters-menu.jpg" alt={"menu"} />
				<Menu theme="light" defaultSelectedKeys={["1"]} mode="inline" items={items} />
			</Sider>
		</StyleSider>
	);
};

export default Sidebar;