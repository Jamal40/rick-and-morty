import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import favoritesReducer from "./favourites";
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: favoritesReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof favoritesReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
