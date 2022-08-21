import { Row } from "antd";
import React, { useState } from "react";
import { StyleCardImg, StyleCardWrapper, StyleColCardManagement } from "./style";

const CharactersManagement = () => {

	const [cards] = useState([
		"Christina.png",
		"Hatsune.jpg",
		"ChristmasChristina.png",
		"Kokkoro.jpg",
		"img2.jpg",
		"Maho.jpg"]);

	return (
		<Row>
			<StyleColCardManagement>
				{cards.map((card, index) => (
					<StyleCardWrapper key={index}>
						<StyleCardImg src={`/resources/images/${card}`} alt="logo" />
					</StyleCardWrapper>
				))}
			</StyleColCardManagement>
		</Row>
	);
};
export default CharactersManagement;