import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
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
		requestLoadItems: state => {
			state.loading = !state.loading;
		},
		loadedItems: (state: Draft<TeamBuildState>, action: PayloadAction<string[]>) => {
			console.log(action);
			state.items = action.payload;
		},
		hideAllItems: (state: Draft<TeamBuildState>) => {
			state.items = [];
			console.log(state.items);
		},
	},
});

export const { requestLoadItems, loadedItems, hideAllItems } = teamBuildSlice.actions;

export const selectTeamBuildStore = (state: RootState) => state;

export const teamBuildReducer = teamBuildSlice.reducer;