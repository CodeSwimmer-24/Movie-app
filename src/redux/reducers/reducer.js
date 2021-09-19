import { ActionTypes } from "../contants/actions-type";

const initialState = {
    movies: [],
}


export const movieReducer = (state = initialState,{type,payload}) => {
    
    switch(type){
      case ActionTypes.SET_MOVIES:
          return{...state, movies: payload}
          default:
              return state;
    };
};


export const selectedMovies = (state={},{type,payload}) => {
    switch(type){
        case ActionTypes.SELECTED_MOVIES:
            return{...state,...payload};
            default:
            return    state;
    };
};