import { RightCircleOutlined } from "@ant-design/icons";
import { Col, List, Row } from "antd";
import { useMemo } from "react";

type ItemRender = {
	title?: string;
	category?: string;
};

const cateBrand: ItemRender[] = [
	{ title: "BRAND" },
	{ category: "Brand Strategy" },
	{ category: "Logo & Name" },
	{ category: "Identity & Collateral" }
];

const cateDevelopment: ItemRender[] = [
	{ title: "DEVELOPMENT" },
	{ category: "eCommerce" },
	{ category: "Web Development" },
	{ category: "Mobile Apps" }
];

const cateMarketing: ItemRender[] = [{ title: "MARKETING" }, { category: "Digital" }, { category: "Market Research" }];

const Capability = () => {
	const capabilityContent = useMemo(() => {
		const slogan = (
			<span>
				<p className={"heading__first-part"}>What are</p>
				<p className={"heading__second-part"}>we capable of</p>
			</span>
		);
		const introduction = (
			<p className={"introduction"}>
				By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create
				innovative, sustainable marketing that enhances brand experience and user engagement.
			</p>
		);
		const conclusion = <span className={"conclusion"}>Our process</span>;
		return (
			<>
				<Row>{slogan}</Row>
				<Row>{introduction}</Row>
				<Row>{conclusion}</Row>
			</>
		);
	}, []);

	const itemRenderer = (item: ItemRender) => {
		const isTitle = !!item.title;
		return (
			<List.Item className={isTitle ? "font-bold text-base" : "text-sm"}>
				<span className={"cate-item"}>{isTitle ? item.title : item.category} </span>
				{!isTitle && (
					<span className={"cate-item__hover-icon"}>
						<RightCircleOutlined
							style={{
								color: "#506473",
								verticalAlign: "middle"
							}}
						/>
					</span>
				)}
			</List.Item>
		);
	};

	const capabilityCategory = useMemo(() => {
		return (
			<>
				<Row>
					<Col span={10}>
						<List itemLayout="horizontal" dataSource={cateBrand} renderItem={itemRenderer} />
					</Col>
					<Col span={10}>
						<List itemLayout="horizontal" dataSource={cateMarketing} renderItem={itemRenderer} />
					</Col>
				</Row>
				<Row>
					<Col span={10}>
						<List itemLayout="horizontal" dataSource={cateDevelopment} renderItem={itemRenderer} />
					</Col>
				</Row>
			</>
		);
	}, []);

	return (
		<div className={"capability-content"}>
			<Row>
				<Col span={12}>
					<Row>
						<Col span={5} />
						<Col span={12} className={"grid gap-10 content-center capability-content"}>
							{capabilityContent}
						</Col>
					</Row>
				</Col>
				<Col span={12} className={"grid gap-10 content-center capability-content"}>
					{capabilityCategory}
				</Col>
			</Row>
		</div>
	);
};

export default Capability;
