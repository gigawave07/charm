import React, { ReactElement, useEffect, useState } from "react";
import useHomePage, { ContentProps } from "../../useHomePage";
import { OverviewBackground } from "./OverviewBackground";
import { StyleColNavbarWrapper, StyleColOverview, StyleLogoImage, StyleNavbar, StyleOverview } from "./StyleOverview";
import { Col, Menu, Row } from "antd";
import { Link } from "react-router-dom";

const overviewData: ContentProps = {
	specializedFields: "BRAND, DEV, ECOM, MARKETING",
	slogan: ["We unleash", "business potential"],
	introduction:
		"We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.",
	conclusion: "Let's talk",
};
const labels = ["Services", "Work", "About", "Blog", "Contact"];

const Overview = (): ReactElement => {
	const items = labels.map((item, i) => ({ label: item, key: `item-${i}`, path: `/${item}` }));
	const { makeContent } = useHomePage();

	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const handleScroll = () => {
		const currentScrollPos = window.pageYOffset;
		setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
		setPrevScrollPos(currentScrollPos);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos, visible, handleScroll]);

	return (
		<StyleOverview>
			<Row>
				<Col span={12}>
					<Row>
						<Col offset={2}>
							<StyleLogoImage src="/resources/images/logo.png" alt="logo" />
						</Col>
					</Row>
					<Row>
						<StyleColOverview offset={5} span={12}>
							{makeContent(overviewData)}
						</StyleColOverview>
					</Row>
				</Col>
				<StyleColNavbarWrapper span={12}>
					<StyleNavbar visible={visible}>
						<Menu mode="horizontal">
							{items.map(({ label, path }) => (
								<Menu.Item key={path}>
									<Link to={`${path}`}>{label}</Link>
								</Menu.Item>
							))}
						</Menu>
					</StyleNavbar>
					<OverviewBackground />
				</StyleColNavbarWrapper>
			</Row>
		</StyleOverview>
	);
};

export default Overview;
