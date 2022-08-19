import { useCallback } from "react";
import { Row } from "antd";
import { StyleConclusion, StyleFirstPart, StyleIntro, StyleSecondPart, StyleSpecializedField } from "../styles";

export type ContentProps = {
	specializedFields?: string;
	slogan: string[];
	introduction: string;
	conclusion: string;
};
export default function useHomePage() {
	const makeSlogan = useCallback(
		([first, second]: string[]) => (
			<span>
				<StyleFirstPart>{first}</StyleFirstPart>
				<StyleSecondPart>{second}</StyleSecondPart>
			</span>
		),
		[]
	);
	const makeContent = useCallback(({ specializedFields, slogan, introduction, conclusion }: ContentProps) => {
		return (
			<>
				{specializedFields && (
					<Row>
						<StyleSpecializedField>{specializedFields}</StyleSpecializedField>
					</Row>
				)}
				<Row>{makeSlogan(slogan)}</Row>
				<Row>
					<StyleIntro>{introduction}</StyleIntro>
				</Row>
				<Row>
					<StyleConclusion>{conclusion}</StyleConclusion>
				</Row>
			</>
		);
	}, []);

	return {
		makeContent,
		makeSlogan,
	};
}
