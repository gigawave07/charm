import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { StyleSider } from "./styles";
import { useAppDispatch, useAppSelector } from "../../../stores";
import { changeSidebarState } from "./reducers";
import Sider from "antd/lib/layout/Sider";

const createItem = (item: string, img: string) => {
	return {
		label: <Link to={`${item}`}>{item}</Link>,
		key: `${item}`,
		icon: <img src={`/resources/images/${img}-icon.png`} alt="overview" style={{ height: "100%" }} />,
	};
};
const items = [
	createItem("Overview", "maho"),
	createItem("Management", "kasumi"),
	createItem("Analysis", "tsumugi"),
	createItem("TeamBuild", "chloe"),
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