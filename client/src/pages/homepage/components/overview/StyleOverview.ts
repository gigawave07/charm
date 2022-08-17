import styled from "styled-components";
import { Col } from "antd";
import tw from "twin.macro";

export const StyleOverview = styled.div`
	height: 1000px;
	margin-top: -100px;
`;
export const StyleColOverview = styled(Col)`
	${tw`grid gap-10 content-center`}
	height: 920px;
`;
export const StyleColOverviewBackground = styled(Col)`
	height: 1000px;
`;
export const StyleOverviewBackgroundImg = styled.img`
	display: inline-block;
	object-fit: cover;
	object-position: center;
	width: 100%;
	flex-shrink: 0;
`;
export const StyleOverviewBackground = styled.div`
	overflow: hidden;
	height: 100%;
`;
export const StyleSlider = styled.div<{
	transLateVal: number;
	transition: boolean;
}>`
	white-space: nowrap;
	height: 100%;
	display: flex;
	transform: ${({ transLateVal }) => `translateX(${transLateVal}%)`};
	${({ transition }) => transition && `transition: transform 1s ease-in-out`};
`;