import { Card, Row } from "antd"
import { Button } from "antd/lib/radio"
import React from "react"
import { useAppDispatch, useAppSelector } from "../../../../../stores"
import { hideAllItems, selectTeamBuildStore, thunks } from "../reducer"

const { Meta } = Card
type CardViewProps = { img: string; name: string; skill: string };

const CardView = ({ img, name, skill }: CardViewProps) => (
	<Card
		hoverable
		className="m-3"
		cover={<img style={{ objectFit: "cover", height: 300, width: 300 }} alt="example" src={img} />}
	>
		<Meta title={name} description={skill} />
	</Card>
)

const OverviewTab = () => {
	const dispatch = useAppDispatch()

	const loadAllItems = () => {
		dispatch(thunks.requestLoadItems)
	}

	const hideItems = () => {
		dispatch(hideAllItems())
	}

	const deleteItems = () => {
		dispatch(thunks.deleteAllItems)
	}

	const items = useAppSelector(selectTeamBuildStore).items
	return (
		<div>
			<Row>
				<Button onClick={loadAllItems}>Load all items</Button>
				<Button onClick={hideItems}>Hide all items</Button>
				<Button onClick={deleteItems}>Delete all items</Button>
			</Row>
			<div className="flex">
				{items.map(i => (
					<CardView key={i.img} {...i} />
				))}
			</div>
		</div>
	)
}

export default OverviewTab