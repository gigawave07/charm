import styled from "styled-components";
import { Col } from "antd";
import tw from "twin.macro";

type StyleNavbarProps = {
	visible: boolean;
};
type StyleSliderProps = {
	transLateVal: number;
	transition: boolean;
};
export const StyleNavbar = styled.div<StyleNavbarProps>`
	position: fixed;
	transition: top 0.3s;
	top: ${({ visible }) => (visible ? "0" : "-60px")};
	z-index: 2;
`;
export const StyleOverview = styled.div`
	height: 1000px;
	margin-top: -100px;
`;
export const StyleColOverview = styled(Col)`
	${tw`grid gap-10 content-center`}
	height: 920px;
`;
export const StyleColNavbarWrapper2 = styled(Col)`
	& .ant-menu {
		background: transparent;
	}

	& .ant-menu-horizontal {
		border-bottom: none;
		color: white;
		line-height: 80px;
	}

	& .ant-menu-title-content {
		font-size: 20px;
		font-weight: bold;

		& a {
			-webkit-text-stroke: 0.5px whitesmoke;
			color: crimson;
		}
	}
`;
export const StyleColOverviewBackground = styled(Col)`
	height: 1000px;
`;
export const StyleLogoImage = styled.img`
	height: 80px;
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
export const StyleSlider = styled.div<StyleSliderProps>`
	white-space: nowrap;
	height: 100%;
	display: flex;
	transform: ${({ transLateVal }) => `translateX(${transLateVal}%)`};
	${({ transition }) => transition && `transition: transform 1s ease-in-out`};
`;