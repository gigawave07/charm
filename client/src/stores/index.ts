import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { sidebarReducer } from "../shared/components/sidebar/reducers";
import listenerMiddleware from "../pages/characters/components/teambuild/middleware";
import { teamBuildReducer } from "../pages/characters/components/teambuild/reducer";

export const store = configureStore({
	reducer: {
		sidebar: sidebarReducer,
		teamBuild: teamBuildReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;