import styled from "styled-components";
import { Col } from "antd";

type StyleNavbarProps = {
	visible: boolean;
};
type StyleDivOverviewBackground = {
	index: number;
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
export const StyleColOverview = styled(Col).attrs({
	className: "grid gap-10 content-center",
})`
	height: 920px;
`;
export const StyleColNavbarWrapper = styled(Col).attrs({
	className: "flex justify-center",
})`
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
`;
export const StyleOverviewBackground = styled.div`
	overflow: hidden;
`;
export const StyleSlider = styled.div<StyleDivOverviewBackground>`
	white-space: nowrap;
	transition: ease 1000ms;
	height: 100%;
	transform: ${({ index }) => `translate3d(${-index * 100}%, 0, 0)`};
`;