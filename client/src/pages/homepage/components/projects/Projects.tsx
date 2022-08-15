import { Col, Menu, Row } from "antd";
import React from "react";
import "./Project.css";
import useHomePage from "../../hooks/useHomePage";
import styled from "styled-components";
import tw from "twin.macro";

const slogan = ["Some of our", "recent projects"];
const labels = ["All", "Branding", "Web Design", "Digital Marketing"];

const StyleWrapper = styled.div`
	${tw`grid gap-10 content-center`}
	height: 1000px;
	background-image: url("./resources/images/Christina.gif");
	background-size: cover;
	background-position: center;
`;
const StyleInnerContainer = styled.div`
	background: rgba(255, 255, 255, 0.8);
	height: 900px;
	margin: 0 50px;
	padding: 50px 0;
`;

const Projects = () => {
	const { makeSlogan } = useHomePage();
	const items = labels.map((item, i) => ({ label: item, key: `item-${i}` }));
	return (
		<StyleWrapper>
			<StyleInnerContainer>
				<Row>
					<Col span={12}>
						<Row>
							<Col offset={5}>{makeSlogan(slogan)}</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col span={12}>
						<Row className={"mb-3"}>
							<Col offset={5}>
								<Menu items={items} mode="horizontal" />
							</Col>
						</Row>
					</Col>
					<Col />
				</Row>
			</StyleInnerContainer>
		</StyleWrapper>
	);
};

export default Projects;
