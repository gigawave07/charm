import { Card, Row } from "antd"
import { Button } from "antd/lib/radio"
import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../../stores"
import { hideAllItems, selectTeamBuildStore, thunks } from "../reducer"
import styled from "styled-components"
import { Character } from "@server/modules/characters/models"

const { Meta } = Card

const StyleCardWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const CardView = ({ img, name, skill }: Character) => (
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

	useEffect(() => {
		loadAllItems()
	}, [])

	const items = useAppSelector(selectTeamBuildStore).items
	return (
		<div>
			<Row>
				<Button onClick={loadAllItems}>Load all items</Button>
				<Button onClick={hideItems}>Hide all items</Button>
				<Button onClick={deleteItems}>Delete all items</Button>
			</Row>
			<StyleCardWrapper>
				{items.map(i => (
					<CardView key={i.name} {...i} />
				))}
			</StyleCardWrapper>
		</div>
	)
}

export default OverviewTab