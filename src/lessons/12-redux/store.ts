import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

interface AppState {
  value: string;
}

const initialState: AppState = {
  value: "",
};

export const selectValue = (state: AppState): string => state.value;

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    receivedValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { receivedValue } = appSlice.actions;

export const store = configureStore({ reducer: appSlice.reducer });

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector = useSelector.withTypes<RootState>();
