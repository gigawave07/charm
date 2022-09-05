import React, { ReactElement } from "react"
import useHomePage, { ContentProps } from "../../hooks/useHomePage"
import { OutlineBackground } from "./OutlineBackground"
import { StyleColOverview, StyleColOutlineBackground, Styles } from "./styles"
import { Row } from "antd"

const overviewData: ContentProps = {
	specializedFields: "BRAND, DEV, ECOM, MARKETING",
	slogan: ["We unleash", "business potential"],
	introduction:
		"We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.",
	conclusion: "Let's talk",
}

const Overview = (): ReactElement => {
	const { makeContent } = useHomePage()

	return (
		<>
			<Styles>
				<Row>
					<StyleColOverview offset={2} span={8}>
						{makeContent(overviewData)}
					</StyleColOverview>
					<StyleColOutlineBackground offset={2} span={12}>
						<OutlineBackground />
					</StyleColOutlineBackground>
				</Row>
			</Styles>
		</>
	)
}

export default Overview
