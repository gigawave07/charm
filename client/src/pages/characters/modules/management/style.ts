import styled from "styled-components"
import { Col } from "antd"

export const StyleCardWrapper = styled.div`
	width: 300px;
	height: 300px;
	float: left;
	padding: 10px 10px;
`

export const StyleCardImg = styled.img`
	width: 100%;
	height: 100%;

	&:hover {
		transform: translate(10px, -10px);
		cursor: pointer;
	}
`
export const StyleColCardManagement = styled(Col)`
	margin: 0 0 0 10px;
`