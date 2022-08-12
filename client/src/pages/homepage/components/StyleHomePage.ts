import styled from "styled-components";

export const StyleFirstPart = styled.p`
	text-align: left;
	font: normal normal bold 48px/57px ITC Avant Garde Gothic Pro;
	letter-spacing: 0px;
	color: #19293a;
`;
export const StyleSecondPart = styled.p`
	text-align: left;
	font: normal normal bold 48px/57px ITC Avant Garde Gothic Pro;
	letter-spacing: 0px;
	color: #506473;
`;
export const StyleSpecializedField = styled.span`
	text-align: left;
	font: normal normal 600 16px/72px Open Sans;
	letter-spacing: 0.8px;
	color: #c0345e;
	opacity: 0.75;
`;
export const StyleIntro = styled.p`
	text-align: left;
	font: normal normal normal 21px/38px Open Sans;
	letter-spacing: 0px;
	color: #506473;
	opacity: 1;
`;
export const StyleConclusion = styled.span`
	text-align: left;
	font: normal normal 600 20px/27px Open Sans;
	letter-spacing: 0px;
	color: #19293a;
	opacity: 1;

	&:after {
		content: "";
		display: block;
		margin: auto;
		height: 3px;
		width: 0;
		top: 5px;
		background: transparent;
		transition: all 0.3s;
	}

	&:hover:after {
		width: 100%;
		background: red;
	}
`;