import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITaskModel } from "models/taskModel";
import { removeTaskById } from "utils/utils";
import type { RootState } from "../store";

export interface ITasks {
  tasks: ITaskModel[];
}

const initialState: ITasks = {
  tasks: [],
};

export const taskActions = createSlice({
  name: "taskActions",
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<ITaskModel>) => {
      state.tasks.push(action.payload);
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      removeTaskById(state.tasks, action.payload);
    },

    // showForm: (state) => {
    //   state.isVisible = true;
    // },

    // hideForm: (state) => {
    //   state.isVisible = false;
    // },
  },
});

export const { createTask, deleteTask } = taskActions.actions;

export const selectTasks = (state: RootState) => state.taskAction.tasks;

export default taskActions.reducer;
