import { AnyAction, createListenerMiddleware } from "@reduxjs/toolkit"
import { loadedItems, thunks } from "./reducer"
import { getLogger } from "loglevel"
import { Character } from "@server/modules/characters/models"
import { RootState } from "../../../../stores"
import { characterApi } from "./api"

const logger = getLogger("team build")

const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
	type: thunks.requestLoadItems.type,
	effect: async (action: AnyAction, listenerApi) => {
		logger.log("fetch items")

		listenerApi.cancelActiveListeners
		const items = await characterApi.exec(characterApi.getAll)
		listenerApi.dispatch(loadedItems(items))
	}
})

listenerMiddleware.startListening({
	type: thunks.deleteAllItems.type,
	effect: async (action: AnyAction, listenerApi) => {
		logger.log("delete items")

		listenerApi.cancelActiveListeners
		const items = await characterApi.exec(characterApi.deleteAll)
		listenerApi.dispatch(loadedItems(items))
	}
})

listenerMiddleware.startListening({
	type: thunks.createItem.type,
	effect: async (action: AnyAction, listenerApi) => {
		logger.log("create items")

		listenerApi.cancelActiveListeners
		const item = (await characterApi.exec(characterApi.create, action.payload)) as unknown as Character
		const state = listenerApi.getState()
		const items = (state as RootState).teamBuild.items.concat(item)
		listenerApi.dispatch(loadedItems(items))
	}
})

export default listenerMiddleware