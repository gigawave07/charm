import { RightCircleOutlined } from "@ant-design/icons"
import { Col, List, Row } from "antd"
import { useMemo } from "react"
import useHomePage, { ContentProps } from "../../hooks/useHomePage"
import { StyleCateItem, StyleCateItemHoverIcon, StyleCol, StyleListItem, StyleWrapper } from "./styles"

type ItemRender = {
	title?: string;
	category?: string;
};

const cateBrand: ItemRender[] = [
	{ title: "BRAND" },
	{ category: "Brand Strategy" },
	{ category: "Logo & Name" },
	{ category: "Identity & Collateral" },
]

const cateDevelopment: ItemRender[] = [
	{ title: "DEVELOPMENT" },
	{ category: "eCommerce" },
	{ category: "Web Development" },
	{ category: "Mobile Apps" },
]

const cateMarketing: ItemRender[] = [{ title: "MARKETING" }, { category: "Digital" }, { category: "Market Research" }]

const capabilityContent: ContentProps = {
	conclusion: "Our process",
	introduction:
		"By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.",
	slogan: ["What are", "we capable of"],
}

const Capability = () => {
	const { makeContent } = useHomePage()
	const itemRenderer = (item: ItemRender) => {
		const isTitle = !!item.title
		return (
			<StyleListItem isTitle={isTitle}>
				<StyleCateItem>{isTitle ? item.title : item.category}</StyleCateItem>
				{!isTitle && (
					<StyleCateItemHoverIcon>
						<RightCircleOutlined
							style={{
								color: "#506473",
								verticalAlign: "middle",
							}}
						/>
					</StyleCateItemHoverIcon>
				)}
			</StyleListItem>
		)
	}

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
		)
	}, [])

	return (
		<StyleWrapper>
			<Row>
				<Col span={12}>
					<Row>
						<StyleCol offset={5} span={12}>
							{makeContent(capabilityContent)}
						</StyleCol>
					</Row>
				</Col>
				<StyleCol span={12}>{capabilityCategory}</StyleCol>
			</Row>
		</StyleWrapper>
	)
}

export default Capability
