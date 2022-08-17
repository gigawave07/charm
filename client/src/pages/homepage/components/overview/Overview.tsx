import React, { ReactElement } from "react";
import useHomePage, { ContentProps } from "../../hooks/useHomePage";
import { OverviewBackground } from "./OverviewBackground";
import { StyleColOverview, StyleColOverviewBackground, StyleOverview } from "./StyleOverview";
import { Row } from "antd";

const overviewData: ContentProps = {
	specializedFields: "BRAND, DEV, ECOM, MARKETING",
	slogan: ["We unleash", "business potential"],
	introduction:
		"We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.",
	conclusion: "Let's talk",
};

const Overview = (): ReactElement => {
	const { makeContent } = useHomePage();

	return (
		<>
			<StyleOverview>
				<Row>
					<StyleColOverview offset={2} span={8}>
						{makeContent(overviewData)}
					</StyleColOverview>
					<StyleColOverviewBackground offset={2} span={12}>
						<OverviewBackground />
					</StyleColOverviewBackground>
				</Row>
			</StyleOverview>
		</>
	);
};

export default Overview;
