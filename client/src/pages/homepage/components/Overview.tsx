import { Col, Menu, Row } from "antd";
import { ReactElement, useEffect, useState } from "react";
import useHomePage, { ContentProps } from "../useHomePage";

const overviewData: ContentProps = {
	specializedFields: "BRAND, DEV, ECOM, MARKETING",
	slogan: ["We unleash", "business potential"],
	introduction:
		"We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.",
	conclusion: "Let's talk",
};
const Overview = (): ReactElement => {
	const labels = ["Services", "Work", "About", "Blog", "Contact"];
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

	return (
		<div className={"overview"}>
			<Row>
				<Col span={12}>
					<Row>
						<Col span={2} />
						<Col>
							<img src="/resources/images/logo.png" alt="logo" className={"logo-img"} />
						</Col>
					</Row>
					<Row>
						<Col span={5} />
						<Col span={12} className={"grid gap-10 content-center overview-content"}>
							{makeContent(overviewData)}
						</Col>
					</Row>
				</Col>
				<Col span={12} className={"flex justify-center nav-bar-wrapper"}>
					<div className={"nav-bar"} style={{ top: visible ? "0" : "-60px" }}>
						<Menu items={items} mode="horizontal" />
					</div>
					<img src="/resources/images/Spaniel01_gradient.png" alt="logo" className={"overview-bg-img"} />
				</Col>
			</Row>
		</div>
	);
};

export default Overview;
