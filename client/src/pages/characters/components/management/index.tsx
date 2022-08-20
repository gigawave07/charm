import { Row, Col } from "antd";
import styled from "styled-components";
import React, { useState } from "react";

const StyleCardWrapper = styled.div`
	width: 300px;
	height: 300px;
	float: left;
	padding: 10px 10px;
	`;

const StyleCardImg = styled.img`
	width: 100%;
	height: 100%;
	&:hover{
	 transform: translate(10px, -10px);
	 cursor: pointer}
`;
const StyleColCardManagement = styled(Col)`
	margin: 0px 0px 0px 10px
	`;

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