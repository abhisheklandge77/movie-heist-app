import React from "react";
import Navbar from './Navbar';
import Search from "./Search";
import "./movieHeist.scss";
import MovieResults from "./MovieResults";
import { getMovies } from '../actions';
import { connect } from 'react-redux';

class MovieHeist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName : '',
      movieList : [],
    };
  }

  handleFieldChange = (value) =>{
    return this.setState({movieName : value});
  }

  getSearchedMovies = () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=cc31d08b0d4b5b3539a406e5af2aec1f&language=en-US&page=1&include_adult=false&query=${this.state.movieName}`;
    fetch(url)
  .then(response => response.json())
  .then(data => this.setState({movieList : data.results}));
  }

  render() {
    const movies = this.state;
    return (
      <div className="container">
        <Navbar />
        <Search onFieldChange={this.handleFieldChange} getSearchedMovies={this.getSearchedMovies}/>
        <MovieResults {...movies}/>
        
      </div>
    );
  }
}

export default connect(null,{getMovies})(MovieHeist);
