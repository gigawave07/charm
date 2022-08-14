import { Col, Menu, Row } from "antd";
import React from "react";
import styled from "styled-components";
import useHomePage from "../../useHomePage";
import tw from "twin.macro";

const slogan = ["Some of our", "recent projects"];
const labels = ["All", "Branding", "Web Design", "Digital Marketing"];

const StyleWrapper = styled.div`
	${tw`grid gap-10 content-center`}
	height: 1000px;
	background-image: url("./resources/images/Christina.gif");
	background-size: cover;
`;
const Projects = () => {
	const { makeSlogan } = useHomePage();
	const items = labels.map((item, i) => ({ label: item, key: `item-${i}` }));
	return (
		<StyleWrapper>
			<Row>
				<Col span={12}>
					<Row>
						<Col offset={5}>{makeSlogan(slogan)}</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col span={12}>
					<Row>
						<Col offset={5}>
							<Menu items={items} mode="horizontal" />
						</Col>
					</Row>
				</Col>
			</Row>
		</StyleWrapper>
	);
};

export default Projects;
