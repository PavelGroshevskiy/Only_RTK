import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/postSlice";

const rootReducer = combineReducers({
  postReducer,
});

export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore["dispatch"];
