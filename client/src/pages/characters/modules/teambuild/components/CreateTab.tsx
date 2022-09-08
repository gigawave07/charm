import { Button, Col, Form, Input, Row } from "antd"
import { useForm, Controller } from "react-hook-form"
import styled, { css } from "styled-components"
import { Character } from "@server/modules/characters/models"
import { useAppDispatch } from "../../../../../stores"
import { thunks } from "../reducer"

const StyleError = styled.span<{
	hasError: boolean
}>`
	${({ hasError }) =>
		hasError &&
		css`
			color: #f5222d;
		`}
`
const StyleInput = styled(Input)<{
	hasError: boolean
}>`
	${({ hasError }) =>
		hasError &&
		css`
			border-color: #f5222d;

			&:focus,
			&:hover {
				border-color: #f5222d;
				box-shadow: 0 0 0 2px #f5222d33;
			}
		`}
`
const CreateTab = () => {
	const dispatch = useAppDispatch()

	const {
		register,
		handleSubmit,
		control,
		watch,
		formState: { errors },
	} = useForm<Character>()

	const onSubmit = (data: Character) => {
		console.log(data)
		dispatch(thunks.createItem(data))
	}

	return (
		<Row>
			<Col offset={3} span={12}>
				<Form onSubmitCapture={handleSubmit(onSubmit)}>
					<Form.Item>
						<Controller
							name="name"
							control={control}
							rules={{ required: true }}
							render={({ field }) => <StyleInput {...field} placeholder="Character name" hasError={!!errors.name} />}
						/>
						{errors.name && <StyleError hasError={!!errors.name}>{"Character name is required"}</StyleError>}
					</Form.Item>
					<Form.Item>
						<Input.TextArea autoSize={{ minRows: 3, maxRows: 5 }} placeholder="Description" {...register("skill")} />
					</Form.Item>
					<Form.Item>
						<Input placeholder="image" {...register("img")} />
					</Form.Item>
					<Form.Item>
						<Button htmlType="submit">Log in</Button>
					</Form.Item>
				</Form>
			</Col>
		</Row>
	)
}

export default CreateTab