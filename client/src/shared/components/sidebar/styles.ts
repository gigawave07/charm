import Sider from "antd/lib/layout/Sider";
import styled from "styled-components";

export const StyleSider = styled(Sider)`
	.ant-menu-item {
		margin: 15px 0;
	}

	.ant-layout-sider,
	.ant-layout-sider-children {
		background: white;
	}

	.ant-layout-sider-trigger {
		color: crimson;
		background: ghostwhite;
	}
`;