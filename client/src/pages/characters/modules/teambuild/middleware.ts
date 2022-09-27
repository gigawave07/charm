import { AnyAction, createListenerMiddleware } from "@reduxjs/toolkit"
import { loadedItems, thunks } from "./reducer"
import { getLogger } from "loglevel"
import { RootState } from "../../../../stores"
import {  CharacterService } from "./service"

const logger = getLogger("team build")

const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
	type: thunks.requestLoadItems.type,
	effect: async (action: AnyAction, listenerApi) => {
		logger.log("fetch items")

		listenerApi.cancelActiveListeners
		const items = await CharacterService.getAll()
		listenerApi.dispatch(loadedItems(items))
	}
})

listenerMiddleware.startListening({
	type: thunks.deleteAllItems.type,
	effect: async (action: AnyAction, listenerApi) => {
		logger.log("delete items")

		listenerApi.cancelActiveListeners
		const items = await CharacterService.deleteAll()
		listenerApi.dispatch(loadedItems(items))
	}
})

listenerMiddleware.startListening({
	type: thunks.createItem.type,
	effect: async (action: AnyAction, listenerApi) => {
		logger.log("create items")

		listenerApi.cancelActiveListeners
		const teamBuildState = (listenerApi.getState() as RootState).teamBuild
		const img = teamBuildState.imageUpload
		const item = (await CharacterService.create({ ...action.payload, img }))
		const items = teamBuildState.items.concat(item)
		listenerApi.dispatch(loadedItems(items))
	}
})

export default listenerMiddleware