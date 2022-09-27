import { PlusOutlined } from "@ant-design/icons"
import { Modal, Upload, UploadFile } from "antd"
import React, {
	useState
} from "react"
import { RcFile } from "antd/es/upload"
import { setImageUpload } from "../reducer"
import { useAppDispatch } from "../../../../../stores"
import { UploadChangeParam } from "antd/lib/upload/interface"
import { get, isEmpty } from "lodash"

const getBase64 = (file: RcFile) =>
	new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.readAsDataURL(file)

		reader.onload = () => resolve(reader.result)

		reader.onerror = (error) => reject(error)
	})

const UploadImage = () => {
	const dispatch = useAppDispatch()
	const [previewOpen, setPreviewOpen] = useState(false)
	const [previewImage, setPreviewImage] = useState<string>("")
	const [previewTitle, setPreviewTitle] = useState<string>("")
	const [fileList, setFileList] = useState<UploadFile[]>([])

	const handleCancel = () => setPreviewOpen(false)

	const handlePreview = async (file: UploadFile) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj as RcFile) as string | undefined
			console.log(file.preview)
			dispatch(setImageUpload(file.preview))
		}
		setPreviewImage(file.url || file.preview || "")
		setPreviewOpen(true)
		setPreviewTitle(file.name || file.url?.substring(file.url.lastIndexOf("/") + 1) || "")
	}

	const handleChange = async ({ fileList, file }: UploadChangeParam) => {
		if (isEmpty(fileList)) {
			setFileList([])


			dispatch(setImageUpload(""))
			return
		}
		const img64 = await getBase64(fileList[0].originFileObj!) as string
		if (file.status != "uploading") {
			dispatch(setImageUpload(img64))
		}
		setFileList(fileList)
	}

	const uploadButton = (
		<div>
			<PlusOutlined />
			<div
				style={{
					marginTop: 8
				}}
			>
				Upload
			</div>
		</div>
	)
	return (
		<>
			<Upload
				action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
				listType="picture-card"
				fileList={fileList}
				onPreview={handlePreview}
				onChange={handleChange}
			>
				{fileList.length >= 1 ? null : uploadButton}
			</Upload>
			<Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
				<img
					alt="example"
					style={{
						width: "100%"
					}}
					src={previewImage}
				/>
			</Modal>
		</>
	)
}

export default UploadImage