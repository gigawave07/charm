import { Col, Menu, Row } from "antd";
import React, { ReactElement, useEffect, useState } from "react";
import useHomePage, { ContentProps } from "../../useHomePage";
import {
	StyleColNavbarWrapper,
	StyleColOverview,
	StyleLogoImage,
	StyleNavbar,
	StyleOverview,
	StyleOverviewBackground,
	StyleOverviewBackgroundImg,
	StyleSlider,
} from "./StyleOverview";

const overviewData: ContentProps = {
	specializedFields: "BRAND, DEV, ECOM, MARKETING",
	slogan: ["We unleash", "business potential"],
	introduction:
		"We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.",
	conclusion: "Let's talk",
};
const labels = ["Services", "Work", "About", "Blog", "Contact"];
const images = ["Christina.png", "ChristmasChristina.png"];
const imageSlideDelay = 3 * 1000;

const Overview = (): ReactElement => {
	const items = labels.map((item, i) => ({ label: item, key: `item-${i}` }));
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

	const [index, setIndex] = React.useState(0);
	const timeoutRef = React.useRef(0);

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	React.useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() => setIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)),
			imageSlideDelay
		);
		return () => resetTimeout();
	}, [index]);

	return (
		<StyleOverview>
			<Row>
				<Col span={12}>
					<Row>
						<Col span={2} />
						<Col>
							<StyleLogoImage src="/resources/images/logo.png" alt="logo" />
						</Col>
					</Row>
					<Row>
						<Col span={5} />
						<StyleColOverview span={12}>{makeContent(overviewData)}</StyleColOverview>
					</Row>
				</Col>
				<StyleColNavbarWrapper span={12}>
					<StyleNavbar visible={visible}>
						<Menu items={items} mode="horizontal" />
					</StyleNavbar>
					<StyleOverviewBackground>
						<StyleSlider index={index}>
							{images.map((_, index) => (
								<StyleOverviewBackgroundImg key={index} src={`/resources/images/${images[index]}`} alt="logo" />
							))}
						</StyleSlider>
					</StyleOverviewBackground>
				</StyleColNavbarWrapper>
			</Row>
		</StyleOverview>
	);
};

export default Overview;
