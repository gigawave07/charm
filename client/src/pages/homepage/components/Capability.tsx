import style from "styled-components";
import styled, { css } from "styled-components";
import { RightCircleOutlined } from "@ant-design/icons";
import { Col, List, Row } from "antd";
import { useMemo } from "react";
import useHomePage, { ContentProps } from "../useHomePage";

type ItemRender = {
	title?: string;
	category?: string;
};

const cateBrand: ItemRender[] = [
	{ title: "BRAND" },
	{ category: "Brand Strategy" },
	{ category: "Logo & Name" },
	{ category: "Identity & Collateral" },
];

const cateDevelopment: ItemRender[] = [
	{ title: "DEVELOPMENT" },
	{ category: "eCommerce" },
	{ category: "Web Development" },
	{ category: "Mobile Apps" },
];

const cateMarketing: ItemRender[] = [{ title: "MARKETING" }, { category: "Digital" }, { category: "Market Research" }];

const capabilityContent: ContentProps = {
	conclusion: "Our process",
	introduction:
		"By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.",
	slogan: ["What are", "we capable of"],
};

const capabilityStyle = css`
	height: 600px;
	background-color: #edeff1;
`;
const StyleWrapper = style.div`
  ${capabilityStyle}
  .ant-list-item {
    justify-content: flex-start !important;
  }
`;

const StyleCol = styled(Col).attrs({
	className: "grid gap-10 content-center",
	span: 12,
})`
	${capabilityStyle}
`;

const Capability = () => {
	const { makeContent } = useHomePage();
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
								verticalAlign: "middle",
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
		<StyleWrapper>
			<Row>
				<Col span={12}>
					<Row>
						<Col span={5} />
						<StyleCol>{makeContent(capabilityContent)}</StyleCol>
					</Row>
				</Col>
				<StyleCol>{capabilityCategory}</StyleCol>
			</Row>
		</StyleWrapper>
	);
};

export default Capability;
