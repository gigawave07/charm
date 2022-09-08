import { AnyAction, createListenerMiddleware } from "@reduxjs/toolkit"
import { loadedItems, thunks } from "./reducer"
import { getLogger } from "loglevel"
import axios from "axios"
import { Character } from "@server/modules/characters/models"
import { RootState } from "../../../../stores"

const logger = getLogger("team build")
export const fetchItems = async () => {
	const data = await fetch("http://localhost:4000/api/characters/getAllCharacters", { method: "POST" })
	return data.json()
}

export const deleteItems = async () => {
	const data = await fetch("http://localhost:4000/api/characters/deleteAllCharacters", { method: "POST" })
	return data.json()
}

export const createItem = async (data: Character) => {
	return axios({
		method: "POST",
		url: "http://localhost:4000/api/characters/createCharacter",
		data,
	}).then(r => r.data)
}

const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
	type: thunks.requestLoadItems.type,
	effect: async (action: AnyAction, listenerApi) => {
		logger.log("fetch items")

		listenerApi.cancelActiveListeners
		const items = await fetchItems()
		listenerApi.dispatch(loadedItems(items))
	},
})

listenerMiddleware.startListening({
	type: thunks.deleteAllItems.type,
	effect: async (action: AnyAction, listenerApi) => {
		logger.log("delete items")

		listenerApi.cancelActiveListeners
		const items = await deleteItems()
		listenerApi.dispatch(loadedItems(items))
	},
})

listenerMiddleware.startListening({
	type: thunks.createItem.type,
	effect: async (action: AnyAction, listenerApi) => {
		logger.log("create items")

		listenerApi.cancelActiveListeners
		const item = (await createItem(action.payload)) as unknown as Character
		const state = listenerApi.getState()
		const items = (state as RootState).teamBuild.items.concat(item)
		listenerApi.dispatch(loadedItems(items))
	},
})

export default listenerMiddleware