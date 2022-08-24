import { createAction, createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../stores";

export type TeamBuildState = {
	items: string[];
	loading: boolean;
};

const initialState: TeamBuildState = {
	items: [],
	loading: false,
};

export const teamBuildSlice = createSlice({
	name: "teamBuildReducer",
	initialState,
	reducers: {
		loadedItems: (state: Draft<TeamBuildState>, action: PayloadAction<string[]>) => {
			console.log(action);
			state.items = action.payload;
		},
		hideAllItems: (state: Draft<TeamBuildState>) => {
			state.items = [];
			console.log(state.items);
		},
		requestLoadItems: state => {
			state.loading = false;
		},
	},
});

export const thunk = (function a() {
	return { requestLoadItems: createAction("requestLoadItems")() };
})();

export const { loadedItems, hideAllItems, requestLoadItems } = teamBuildSlice.actions;

export const selectTeamBuildStore = (state: RootState) => state;

export const teamBuildReducer = teamBuildSlice.reducer;