// Action types
export const ADD_MOVIES= "ADD_MOVIES";
export const ADD_FAVOURITE= "ADD_FAVOURITE";
export const UN_FAVOURITE= "UN_FAVOURITE";
export const SET_SHOW_FAVOURITES= "SET-SHOW-FAVOURITES";

// Action Crerators
export function addMovies(movies) {
    return{
        type: ADD_MOVIES,
        movies  
    }
  }
  export function addFavourite(movies) {
    return{
        type: ADD_FAVOURITE,
        movies
    } 
  }
  export function unFavourite(movies) {
      console.log(" here in actions", movies);
    return{
        type: UN_FAVOURITE,
        movies  
    }
  }
  export function setShowFavourties(value) {
      console.log("Here in actions", value);
    return{
        type: SET_SHOW_FAVOURITES,
        value
    }
  }
  