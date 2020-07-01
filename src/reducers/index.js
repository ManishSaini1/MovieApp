import {ADD_MOVIES, 
        ADD_FAVOURITE, 
        UN_FAVOURITE,
        SET_SHOW_FAVOURITES,
        ADD_SEARCH_RESULT,
        ADD_MOVIE_TO_LIST} 
     from '../actions';
import {combineReducers} from 'redux';
const initialMoviesState=
{
    list  :[],
    favourites: [],
    showFavourites :false
}
export  function movies(state=initialMoviesState,action)
{
    // if(action.type===ADD_MOVIES)
    // {
    //     return  {...state,
    //         list  : action.movies
    //     }

    // }
    // return state;
    console.log("IN Reducer Favourite");

    switch(action.type)
    {
        case ADD_MOVIES:
            return{
                ...state, 
                list :action.movies
            }
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites : [action.movies, ...state.favourites]
            }  
        case UN_FAVOURITE:
            const filteredArray= state.favourites.filter(
                movies => movies.Title !==action.movies.Title);
            console.log(" here in reducers", state.favourites)
            console.log('Action movie title', action.movies);
            return{
                ...state, 
                favourites :filteredArray

            }  
        case SET_SHOW_FAVOURITES:
            console.log("HEre in reducerssss", action.value);
            return {
                ...state,
                showFavourites :action.value
            }
        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
                list:[action.movie, ...state.list]

            }    
            default:
                return state;
    }
}
const initialSearchState=
{
    result: {},
    searchResult : false,
}
export function search(state= initialSearchState,action)
{
    switch(action.type)
    {
        case ADD_SEARCH_RESULT  :
            return{
                ...state,
                result :action.movie,
                searchResult : true
            }
        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
                searchResult: false

            }   
             default:
            return state;
    }
}
// const initialRootState =
// {
//     movies : initialMoviesState,
//     search : initialSearchState
// }
// export default function rootReducer(state= initialRootState, action)
// {
//     return{
//         movies  :movies(state.movies, action),
//         search  : search(movies.search, action)
//     }
// }
export default combineReducers(
{
    movies,
    search
});