import { Card } from "antd";
import React from "react";
import { images } from "../../../../shared/data";

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
	const items = images.map(i => ({
		img: i,
		name: i.split(".")[0],
		description: i,
	}));
	return (
		<div className="flex">
			{items.map(i => (
				<CardView key={i.img} {...i} />
			))}
		</div>
	);
};