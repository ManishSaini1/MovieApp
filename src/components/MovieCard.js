import React from 'react';
import { addFavourite , unFavourite} from '../actions';

class MovieCard extends React.Component
{
    handleFavouriteClick=()=>
    {
        // console.log("In calling Favourite function",console.log(this.props.dispatch));
        // console.log('Movie card', this.props.movie);
        const {movie}= this.props;
        console.log("in aDding Fav" ,this.props);
        this.props.dispatch(addFavourite(movie));
        
    }
    handleUnFavouriteClick=()=>
    {
        const {movie}= this.props;
        this.props.dispatch(unFavourite(movie));
    }
    render()
    {
        const {movie, isFavourite}= this.props;
        return(
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="plot">{movie.title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                    <div className="rating">{movie.imdbRating}</div>
                    {
                        isFavourite
                        ?<button className="unfavourite-btn" onClick={this.handleUnFavouriteClick}>UnFavourite</button>
                        :<button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite</button>
                    }
                    </div>
                </div>
            </div>
        )
    }
}
export default MovieCard;