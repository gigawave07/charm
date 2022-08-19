import styled, { keyframes } from "styled-components";

const giro = keyframes`
  0% {
    transform: rotateX(-45deg) rotateY(0deg);
  }
  50% {
    transform: rotateX(45deg) rotateY(360deg);
  }
  100% {
    transform: rotateX(-45deg) rotateY(720deg);
  }
`;
export const StyleCube = styled.div`
	height: 290px;
	width: 290px;

	transform-style: preserve-3d;

	transform: rotateX(-30deg) rotateY(-30deg);

	margin: 150px auto;

	animation: ${giro} 20s infinite linear;
`;
export const StyleCard = styled.div`
	height: 290px;
	width: 290px;
	position: absolute;
	border: 5px solid #ccc;
	opacity: 0.7;
	transition: 0.2s;

	&:nth-child(1) {
		transform: translateZ(150px);
	}

	&:nth-child(2) {
		transform: rotateY(180deg) translateZ(144px);
	}

	&:nth-child(3) {
		transform: rotateY(-90deg) translateZ(144px);
	}

	&:nth-child(4) {
		transform: rotateY(90deg) translateZ(144px);
	}

	&:nth-child(5) {
		transform: rotateX(90deg) translateZ(144px);
	}

	&:nth-child(6) {
		transform: rotateX(-90deg) translateZ(150px);
	}
`;
export const StyleCardImg = styled.img`
	width: 290px;
	height: 290px;
`;
