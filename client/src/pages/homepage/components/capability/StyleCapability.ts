import styled, { css } from "styled-components";
import { Col, List } from "antd";
import tw from "twin.macro";

type StyleListItemProps = {
	isTitle: boolean;
};

const capabilityStyle = css`
	height: 600px;
	background-color: #edeff1;
`;
export const StyleWrapper = styled.div`
	${capabilityStyle}
	.ant-list-item {
		justify-content: flex-start !important;
	}
`;

export const StyleCol = styled(Col)`
	${tw`grid gap-10 content-center`}
	${capabilityStyle}
`;

export const StyleCateItem = styled.span``;
export const StyleCateItemHoverIcon = styled.span`
	visibility: hidden;
	padding: 0 5px;
`;
export const StyleListItem = styled(List.Item)<StyleListItemProps>`
	${({ isTitle }) => (isTitle ? tw`font-bold text-base` : tw`text-sm`)}
	${StyleCateItem}:hover + ${StyleCateItemHoverIcon} {
		visibility: visible;
	}
`;