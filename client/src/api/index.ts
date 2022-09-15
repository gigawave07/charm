import axios from "axios"

const serverHost = "http://localhost:4000/api"

export function url(moduleName: string, path: string) {
	return `${serverHost}/${moduleName}` + path
}

export function sendRequest(url: string, data?: any) {
	try {
		return axios({
			method: "POST",
			url,
			data
		}).then(r => r.data)
	} catch (error: any) {
		if (!error.response) return console.log(error)

		const { status, data } = error.response

		if ([401, 403, 404, 422, 500].includes(status)) {
			console.log(error.response, data.errors.body[0])
			throw data.errors.body[0]
		}

		console.dir(error)
	}
}