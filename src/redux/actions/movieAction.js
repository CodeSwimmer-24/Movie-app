import {ActionTypes} from "../contants/actions-type";

export const setMovies = (movies) => {
    return{
        type:ActionTypes.SET_MOVIES,
        payload:movies,
    };
};

export const selectedMovies = (movie) => {
    return{
        type:ActionTypes.SELECTED_MOVIES,
        payload: movie,
    }
}

