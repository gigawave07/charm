import { Button, Form, Input } from "antd"
import { useForm, Controller } from "react-hook-form"
import styled, { css } from "styled-components"

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
	&:focus {
		${({ hasError }) =>
			hasError &&
			css`
				border-color: #f5222d;
				box-shadow: 0 0 0 2px #f5222d33;
			`}
	}
`
type CreateCharacterFormData = {
	name: string
	description?: string
	img?: string
}
const CreateTab = () => {
	const {
		register,
		handleSubmit,
		control,
		watch,
		formState: { errors },
	} = useForm<CreateCharacterFormData>()

	const onSubmit = (data: any) => console.log(data)

	return (
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
				<Input placeholder="Description" {...register("description")} />
			</Form.Item>
			<Form.Item>
				<Input placeholder="image" {...register("img")} />
			</Form.Item>
			<Form.Item>
				<Button htmlType="submit">Log in</Button>
			</Form.Item>
		</Form>
	)
}

export default CreateTab