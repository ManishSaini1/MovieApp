// Action types
export const ADD_MOVIES= "ADD_MOVIES";
// Action Crerators
export function addMovies(movies) {
    return{
        type: ADD_MOVIES,
        movies: movies
    }
  }