import styled from "styled-components";
import { Col } from "antd";

export const StyleColNavbarWrapper = styled(Col)`
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
export const Styles = styled.div<{
	visible: boolean;
}>`
	position: fixed;
	transition: top 0.3s;
	top: ${({ visible }) => (visible ? "0" : "-60px")};
	z-index: 2;
`;
export const StyleLogoImage = styled.img`
	height: 80px;
`;