import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskActions from "./reducers/taskActions";
import taskFormVisibility from "./reducers/taskFormVisibility";

const rootReducers = combineReducers({
  taskFormVisibility: taskFormVisibility,
  taskAction: taskActions,
});

export const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
