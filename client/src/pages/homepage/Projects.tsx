import { Col, Menu, Row } from "antd";
import React from "react";

const Projects = () => {
	const labels = ["All", "Branding", "Web Design", "Digital Marketing"];
	const items = labels.map((item, i) => ({ label: item, key: `item-${i}` }));

	const slogan = (
		<span>
			<p className={"heading__first-part"}>Some of our</p>
			<p className={"heading__second-part"}>recent projects</p>
		</span>
	);
	return (
		<div className={"grid gap-10 content-center projects"}>
			<Row>
				<Col span={12}>
					<Row>
						<Col span={5} />
						<Col>{slogan}</Col>
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
		</div>
	);
};

export default Projects;
