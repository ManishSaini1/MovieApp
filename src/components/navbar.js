import React from 'react';
import {handleMovieSearch,addMovieToList} from '../actions'
 class Navbar extends React.Component
 {
     constructor(props)
     {
         super(props);
         this.state={
             searchText  :''
         };
     }
     handleAddToMovies=(movie)=>
     {
         this.props.dispatch(addMovieToList(movie));
     }
     handlSearch = () =>{
         const {searchText} =this.state;
         
        //  console.log("Props are", this.props);
        //  console.log("Handle movie Search", handleMovieSearch);
            console.log(" in hadle search", this.props);
         this.props.dispatch(handleMovieSearch(searchText));

     }
     handleChange =(e) =>
     {
        //  console.log("In Handle Change",e);
        console.log(" in hadle Change", this.props);
         this.setState(
             {
                 searchText : e.target.value
             }
        
         )

     }
     render()
     {
     
        const {result,searchResult}= this.props.search;
         return(
             <div className='nav'>
                 <div className='search-container'>
                     <input onChange={this.handleChange} />
                     <button id='search-btn' onClick={this.handlSearch}>Search</button>
                     {searchResult && 
                     <div className="search-results">
                          <div className="search-result">
                         <img src={result.Poster} alt="search-pic" />
                         <div className="movie-info">
                             <span>{result.Title}</span>
                             <button onClick={()=> this.handleAddToMovies(result)}>
                                 Add to Movies 
                             </button>
                             </div>
                             </div>
                         </div>
                     }
                 </div>
             </div>
         );
     }
 }
 export default Navbar;