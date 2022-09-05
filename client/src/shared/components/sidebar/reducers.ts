import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../stores"

export type SidebarState = {
	isCollapsed: boolean;
};

const initialState: SidebarState = {
	isCollapsed: false,
}

export const sidebarSlice = createSlice({
	name: "SidebarReducer",
	initialState,
	reducers: {
		changeSidebarState: (state, action: PayloadAction<boolean>) => {
			state.isCollapsed = action.payload
		},
	},
})

export const { changeSidebarState } = sidebarSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSidebarStore = (state: RootState) => state

export const sidebarReducer = sidebarSlice.reducer