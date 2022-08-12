import { Col, Menu, Row } from "antd";
import React from "react";
import styled from "styled-components";
import useHomePage from "../../useHomePage";

const slogan = ["Some of our", "recent projects"];
const labels = ["All", "Branding", "Web Design", "Digital Marketing"];

const StyleWrapper = styled.div.attrs({
	className: "grid gap-10 content-center",
})`
	height: 1000px;
`;
const Projects = () => {
	const { makeSlogan } = useHomePage();
	const items = labels.map((item, i) => ({ label: item, key: `item-${i}` }));
	return (
		<StyleWrapper>
			<Row>
				<Col span={12}>
					<Row>
						<Col span={5} />
						<Col>{makeSlogan(slogan)}</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col span={12}>
					<Row>
						<Col span={5} />
						<Col>
							<Menu items={items} mode="horizontal" />
						</Col>
					</Row>
				</Col>
			</Row>
		</StyleWrapper>
	);
};

export default Projects;