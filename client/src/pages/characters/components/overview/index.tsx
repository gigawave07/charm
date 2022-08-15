import React, { useState } from "react";
import { Col, Row } from "antd";
import styled from "styled-components";

const StyleCardImg = styled.img`
	width: 290px;
	height: 290px;
`;

const CharactersOverview = () => {
	const [cards, setCards] = useState([
		"Christina.png",
		"Hatsune.jpg",
		"ChristmasChristina.png",
		"Kokkoro.jpg",
		"img2.jpg",
		"Maho.jpg",
	]);

	return (
		<Row>
			<Col offset={10}>
				<div className={"cube-wrapper"}>
					<div className={"cube"}>
						{cards.map((card, index) => (
							<div key={index} className={"card"}>
								<a href={"#"}>
									<StyleCardImg src={`/resources/images/${card}`} alt="logo" />
								</a>
							</div>
						))}
					</div>
				</div>
			</Col>
		</Row>
	);
};
export default CharactersOverview;