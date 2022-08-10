import { useCallback } from "react";
import { Row } from "antd";

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
				<p className={"heading__first-part"}>{first}</p>
				<p className={"heading__second-part"}>{second}</p>
			</span>
		),
		[]
	);
	const makeContent = useCallback(({ specializedFields, slogan, introduction, conclusion }: ContentProps) => {
		return (
			<>
				{specializedFields && (
					<Row>
						<span className={"specialized-fields"}>{specializedFields}</span>
					</Row>
				)}
				<Row>{makeSlogan(slogan)}</Row>
				<Row>
					<p className={"introduction"}>{introduction}</p>
				</Row>
				<Row>
					<span className={"conclusion"}>{conclusion}</span>
				</Row>
			</>
		);
	}, []);

	return {
		makeContent,
		makeSlogan,
	};
}
