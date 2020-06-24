import React from 'react';
import Navbar from './navbar';
import MovieCard from './MovieCard';
import data from '../data';
import {addMovies, setShowFavourties} from '../actions'
// import movies from '../reducers';

class App extends React.Component {

  componentDidMount()
      {
        const {store}= this.props;
    store.subscribe(()=>
    {
      console.log("Uodated");
      this.forceUpdate();
    })
        store.dispatch(addMovies(data));
      }
      isMovieFavourite =(movie) =>
      {
        const {favourites}= this.props.store.getState();
        const index= favourites.indexOf(movie);
        if(index!==-1)
        {
          return true;
        }
        return false;
      }
      onChangeTab=(value)=>
      {
        console.log("here in on change tAb", value);
          this.props.store.dispatch(setShowFavourties(value));
      }
   render()
  {
      const {list, favourites, showFavourites}= this.props.store.getState();
      console.log("HEre in App.js", showFavourites);
      const displayMovies= showFavourites ? favourites : list;

      console.log('Render');
      console.log(this.props.store.getState());
    
      return ( 
        <div className="App">
          <Navbar />
          <div className='main'>
            <div className='tabs'>
              <div className={`tab ${showFavourites ? '' :'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
              <div className={`tab ${showFavourites ? 'active-tabs' :''}`} onClick={()=> this.onChangeTab(true)}>Favourites</div>
            </div>
            <div className='list'>
              {displayMovies.map((movie, index)=>
                (
                    <MovieCard 
                       movie={movie}
                       key={`movie-${index}`}
                       dispatch={this.props.store.dispatch} 
                       isFavourite= {this.isMovieFavourite(movie)}
                       />
                      
              ))}
            </div>
            {displayMovies.length===0 ? <div className="no-movies">No Movies to Display!</div> : null }
          </div>


          
            </div>
      );
          }
}

export default App;
