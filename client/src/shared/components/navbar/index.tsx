import { Col, Menu, Row } from "antd";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { StyleColNavbarWrapper, StyleLogoImage, StyleNavbar } from "./StyleNavbar";

const labels = ["Characters", "Work", "About", "Blog", "Contact"];

const Navbar = () => {
	const items = labels.map((item, i) => ({ label: item, key: `item-${i}`, path: `/${item}` }));

	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const handleScroll = () => {
		const currentScrollPos = window.scrollY;
		setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
		setPrevScrollPos(currentScrollPos);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos, visible, handleScroll]);

	return (
		<Row>
			<Col offset={2} span={12}>
				<Link to="/">
					<div>
						<StyleLogoImage src="/resources/images/logo.png" alt="logo" />
					</div>
				</Link>
			</Col>
			<StyleColNavbarWrapper>
				<StyleNavbar visible={visible}>
					<Menu mode="horizontal">
						{items.map(({ label, path }) => (
							<Menu.Item key={path}>
								<Link to={`${path}`}>{label}</Link>
							</Menu.Item>
						))}
					</Menu>
				</StyleNavbar>
			</StyleColNavbarWrapper>
		</Row>
	);
};

export default Navbar;