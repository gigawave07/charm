import { AnyAction, createListenerMiddleware } from "@reduxjs/toolkit";
import { loadedItems, requestLoadItems } from "./reducer";

export const fetchItems = async () => {
	const data = await fetch("http://localhost:4000/fetchTeamBuild", { method: "POST" });
	return data.json();
};

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
	actionCreator: requestLoadItems,
	effect: async (action: AnyAction, listenerApi) => {
		console.log("fetch items");

		listenerApi.cancelActiveListeners;
		const items = await fetchItems();
		listenerApi.dispatch(loadedItems(items));
	},
});

export default listenerMiddleware;