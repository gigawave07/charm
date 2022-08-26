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
			state.items = action.payload;
		},
		hideAllItems: (state: Draft<TeamBuildState>) => {
			state.items = [];
		},
		deleteAllItems: (state: Draft<TeamBuildState>) => {
			state.items = [];
		},
	},
});

export const thunks = (() => ({
	requestLoadItems: createAction("teamBuild/requestLoadItems")(),
	deleteAllItems: createAction("teamBuild/deleteAllItems")(),
}))();

export const { loadedItems, hideAllItems } = teamBuildSlice.actions;

export const selectTeamBuildStore = (state: RootState) => state.teamBuild;

export const teamBuildReducer = teamBuildSlice.reducer;