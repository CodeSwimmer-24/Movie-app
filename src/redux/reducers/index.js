import { combineReducers } from "redux";
import { movieReducer } from "./reducer";

const reducers = combineReducers ({
    allMovies : movieReducer,
});

export default reducers;