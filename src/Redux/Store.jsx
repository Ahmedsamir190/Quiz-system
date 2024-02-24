import { createStore, applyMiddleware } from "redux";
import { dataReducers } from "./reducers/quizReducer";

export const store = createStore(dataReducers);
