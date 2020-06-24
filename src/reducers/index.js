import {ADD_MOVIES, ADD_FAVOURITE, UN_FAVOURITE} from '../actions';
const initialMoviesState=
{
    list  :[],
    favourites: []
}
export default function movies(state=initialMoviesState,action)
{
    // if(action.type===ADD_MOVIES)
    // {
    //     return  {...state,
    //         list  : action.movies
    //     }

    // }
    // return state;

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
            default:
                return state;
    }
}