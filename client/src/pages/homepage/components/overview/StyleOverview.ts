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
`;
export const StyleColOverview = styled(Col)`
	${tw`grid gap-10 content-center`}
	height: 920px;
`;
export const StyleColNavbarWrapper = styled(Col)`
	${tw`flex justify-center`}

	height: 1000px;
	border: 1px solid #707070;
	opacity: 1;

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
	}
`;
export const StyleLogoImage = styled.img`
	height: 80px;
`;
export const StyleOverviewBackgroundImg = styled.img`
	display: inline-block;
	height: 100%;
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