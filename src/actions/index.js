// Action types
export const ADD_MOVIES= "ADD_MOVIES";
export const ADD_FAVOURITE= "ADD_FAVOURITE";
export const UN_FAVOURITE= "UN_FAVOURITE";
export const SET_SHOW_FAVOURITES= "SET-SHOW-FAVOURITES";
export const ADD_SEARCH_RESULT="ADD_SEARCH_RESULT";
export const ADD_MOVIE_TO_LIST="ADD_MOVIE_TO_LIST";

// Action Crerators
export function addMovies(movies) {
    return{
        type: ADD_MOVIES,
        movies  
    }
  }
  export function addFavourite(movies) {
    console.log("IIn favourite action");
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
  export function addMovieToList(movie)
  {
    return{
      type: ADD_MOVIE_TO_LIST,
      movie
    }
  }
  export  function  handleMovieSearch (movie)
  {
    const url =`http://www.omdbapi.com/?apikey=1b089ee0&t=${movie}`;
    console.log("HErer in fetchin URL");
   console.log(fetch(url));

    return function(dispatch)
    {
      fetch(url)
      .then(response => response.json())
      .then(movie=>
        {
            console.log("movie",movie);
            dispatch (addMovieSearchResult(movie));
        });
    }
  }
  export function addMovieSearchResult(movie)
  {return{
    type : ADD_SEARCH_RESULT,
    movie
  }

  }