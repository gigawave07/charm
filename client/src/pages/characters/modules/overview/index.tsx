import React, { useState } from "react"
import { Col, Row } from "antd"
import { StyleCard, StyleCardImg, StyleCube } from "./styles"

const CharactersOverview = () => {
	const [cards, setCards] = useState([
		"Christina.png",
		"Hatsune.jpg",
		"ChristmasChristina.png",
		"Kokkoro.jpg",
		"img2.jpg",
		"Maho.jpg",
	])

	return (
		<Row>
			<Col offset={10}>
				<StyleCube>
					{cards.map((card, index) => (
						<StyleCard key={index}>
							<a href={"#"}>
								<StyleCardImg src={`/resources/images/${card}`} alt="logo" />
							</a>
						</StyleCard>
					))}
				</StyleCube>
			</Col>
		</Row>
	)
}
export default CharactersOverview