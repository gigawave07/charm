import style from "styled-components";
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
export const StyleWrapper = style.div`
  ${capabilityStyle}
  .ant-list-item {
    justify-content: flex-start !important;
  }
`;

export const StyleCol = styled(Col).attrs({
	className: "grid gap-10 content-center",
	span: 12,
})`
	${capabilityStyle}
`;

export const StyleCateItem = style.span``;
export const StyleCateItemHoverIcon = style.span`
	visibility: hidden;
  padding: 0 5px;
`;
export const StyleListItem = styled(List.Item)`
	${({ isTitle }: StyleListItemProps) => (isTitle ? tw`font-bold text-base` : tw`text-sm`)}
	${StyleCateItemHoverIcon} {
		visibility: hidden;
		padding: 0 5px;
	}

	${StyleCateItem}:hover + ${StyleCateItemHoverIcon} {
		visibility: visible;
	}
`;