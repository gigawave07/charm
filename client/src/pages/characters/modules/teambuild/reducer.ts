import { createAction, createSlice, Draft, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../../stores"
import { Character } from "@server/modules/characters/models"

export type TeamBuildState = {
	items: Character[]
	loading: boolean,
	imageUpload: any
}

const initialState: TeamBuildState = {
	items: [] as Character[],
	loading: false,
	imageUpload: "",
}

export const teamBuildSlice = createSlice({
	name: "teamBuildReducer",
	initialState,
	reducers: {
		loadedItems: (state: Draft<TeamBuildState>, action: PayloadAction<Character[]>) => {
			state.items = action.payload
		},
		hideAllItems: (state: Draft<TeamBuildState>) => {
			state.items = []
		},
		setImageUpload: (state: Draft<TeamBuildState>, action: PayloadAction<string | undefined>) => {
			state.imageUpload = action.payload
		},
	},
})

export const thunks = (() => ({
	requestLoadItems: createAction("teamBuild/requestLoadItems")(),
	deleteAllItems: createAction("teamBuild/deleteAllItems")(),
	createItem: createAction<Character>("teamBuild/createCharacter"),
}))()

export const { loadedItems, hideAllItems, setImageUpload } = teamBuildSlice.actions

export const selectTeamBuildStore = (state: RootState) => state.teamBuild

export const teamBuildReducer = teamBuildSlice.reducer