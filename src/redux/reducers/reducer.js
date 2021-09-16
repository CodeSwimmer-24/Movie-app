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
    }
}