import { Card } from "antd";
import { Button } from "antd/lib/radio";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../stores";
import { requestLoadItems } from "./reducer";

const { Meta } = Card;
type CardViewProps = { img: string; name: string; description: string };
const CardView = ({ img, name, description }: CardViewProps) => (
	<Card
		hoverable
		className="m-3"
		cover={
			<img style={{ objectFit: "cover", height: 300, width: 300 }} alt="example" src={`/resources/images/${img}`} />
		}
	>
		<Meta title={name} description={description} />
	</Card>
);

export const TeamBuild = () => {
	const dispatch = useAppDispatch();

	const handler = () => {
		dispatch(requestLoadItems);
	};

	const items = useAppSelector(state => state.teamBuild.items)?.map(i => ({
		img: i,
		name: i.split(".")[0],
		description: i,
	}));
	return (
		<div className="flex">
			<Button onClick={handler}>Click</Button>
			{items.map(i => (
				<CardView key={i.img} {...i} />
			))}
		</div>
	);
};