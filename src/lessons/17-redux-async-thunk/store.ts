import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import { getTodo, Todo } from "../6-fetch";

interface TodoState {
  status: "uninitialized" | "loading" | "succeeded" | "failed";
  todo: Todo | null;
  error: Error | null;
}

const initialState: TodoState = {
  status: "uninitialized",
  todo: null,
  error: null,
};

export const fetchTodo = createAsyncThunk<Todo, undefined, { rejectValue: Error }>(
  "todos/fetchTodo",
  async (_, { rejectWithValue }) => {
    try {
      const todo = await getTodo();
      return todo;
    } catch {
      return rejectWithValue(new Error("Failed to fetch"));
    }
  }
);

export const getIsLoaded = (state: TodoState) => state.status === "succeeded";

export const getIsLoading = (state: TodoState) => state.status === "loading";

export const getIsFailed = (state: TodoState) => state.status === "failed";

export const getTodoData = (state: TodoState) => state.todo;

export const getError = (state: TodoState) => state.error;

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Use `extraReducers` to handle actions that were generated
    // _outside_ of the slice, such as thunks or in other slices
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.status = "loading";
      })
      // Pass the generated action creators to `.addCase()`
      .addCase(fetchTodo.fulfilled, (state, action) => {
        // Same "mutating" update syntax thanks to Immer
        state.status = "succeeded";
        state.todo = action.payload;
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        state.status = "failed";
        state.todo = null;
        state.error = action.payload ?? new Error("Unknown error");
      });
  },
});

export default todoSlice.reducer;

export const store = configureStore({
  reducer: todoSlice.reducer,
});

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector = useSelector.withTypes<RootState>();
