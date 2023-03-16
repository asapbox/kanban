import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface ITaskFormVisibility {
  isVisible: boolean;
}

const initialState: ITaskFormVisibility = {
  isVisible: false,
};

export const taskFormVisibility = createSlice({
  name: "taskFormVisibility",
  initialState,
  reducers: {
    showForm: (state) => {
      state.isVisible = true;
    },

    hideForm: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showForm, hideForm } = taskFormVisibility.actions;

export const selectIsVisible = (state: RootState) =>
  state.taskFormVisibility.isVisible;

export default taskFormVisibility.reducer;
