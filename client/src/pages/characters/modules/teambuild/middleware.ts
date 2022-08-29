import { AnyAction, createListenerMiddleware } from "@reduxjs/toolkit";
import { loadedItems, thunks } from "./reducer";

export const fetchItems = async () => {
	const data = await fetch("http://localhost:4000/api/characters/getAllCharacters", { method: "POST" });
	return data.json();
};

export const deleteItems = async () => {
	const data = await fetch("http://localhost:4000/api/characters/deleteAllCharacters", { method: "POST" });
	return data.json();
};

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
	type: thunks.requestLoadItems.type,
	effect: async (action: AnyAction, listenerApi) => {
		console.log("fetch items");

		listenerApi.cancelActiveListeners;
		const items = await fetchItems();
		listenerApi.dispatch(loadedItems(items));
	},
});

listenerMiddleware.startListening({
	type: thunks.deleteAllItems.type,
	effect: async (action: AnyAction, listenerApi) => {
		console.log("delete items");

		listenerApi.cancelActiveListeners;
		const items = await deleteItems();
		listenerApi.dispatch(loadedItems(items));
	},
});

export default listenerMiddleware;