import { combineReducers } from "redux";
import { movieReducer,selectedMovies} from "./reducer";

const reducers = combineReducers ({
    allMovies : movieReducer,
    movie: selectedMovies,
});

export default reducers;