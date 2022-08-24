import { Card, Row } from "antd";
import { Button } from "antd/lib/radio";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../stores";
import { hideAllItems, requestLoadItems } from "./reducer";

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

	const loadAllItems = () => {
		dispatch(requestLoadItems);
	};

	const hideItems = () => {
		dispatch(hideAllItems);
	};

	const items = useAppSelector(state => state.teamBuild.items)?.map(i => ({
		img: i,
		name: i.split(".")[0],
		description: i,
	}));

	return (
		<div>
			<Row>
				<Button onClick={loadAllItems}>Load all items</Button>
				<Button onClick={hideItems}>Hide all items</Button>
			</Row>
			<div className="flex">
				{items.map(i => (
					<CardView key={i.img} {...i} />
				))}
			</div>
		</div>
	);
};