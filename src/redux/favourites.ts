import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Character from "../types/Character";

export interface FavouritesState {
  value: Character[];
}

const initialState: FavouritesState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    add: (state: FavouritesState, action: PayloadAction<Character>) => {
      state.value.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((c) => c.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = counterSlice.actions;

export default counterSlice.reducer;
