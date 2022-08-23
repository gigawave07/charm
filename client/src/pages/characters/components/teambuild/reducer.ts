import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../stores";

export type TeamBuildState = {
	items: string[];
};

const initialState: TeamBuildState = {
	items: [],
};

export const teamBuildSlice = createSlice({
	name: "teamBuildReducer",
	initialState,
	reducers: {
		requestLoadItems: state => {
			state.items = [];
		},
		loadedItems: (state: Draft<TeamBuildState>, action: PayloadAction<string[]>) => {
			console.log(action);
			state.items = action.payload;
		},
	},
});

export const { requestLoadItems, loadedItems } = teamBuildSlice.actions;

export const selectTeamBuildStore = (state: RootState) => state;

export const teamBuildReducer = teamBuildSlice.reducer;