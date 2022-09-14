import axios from "axios"

const serverHost = "http://localhost:4000/api"

export class ApiModule {
	url(moduleName: string, path: string) {
		return `${serverHost}/${moduleName}` + path
	}
	exec(url: string, data?: any) {
		return axios({
			method: "POST",
			url,
			data
		}).then(r => r.data)
	}
}