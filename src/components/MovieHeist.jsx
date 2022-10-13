import React from "react";
import Search from "./Search";
import "./movieHeist.scss";
import MovieResults from "./MovieResults";
import { getMovies } from '../actions';
import { connect } from 'react-redux';

class MovieHeist extends React.Component {
  componentDidMount() {
    this.getSearchedMovies();
  }

  componentWillUnmount() {
    localStorage.removeItem('favoriteMovies');
  }

  getSearchedMovies = () => {
    let url = '';
    if (this.props.movieName === '') {
      url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=cc31d08b0d4b5b3539a406e5af2aec1f&language=en-US&include_adult=false&page=1';
    } else {
      url = `https://api.themoviedb.org/3/search/movie?api_key=cc31d08b0d4b5b3539a406e5af2aec1f&language=en-US&page=1&include_adult=false&query=${this.props.movieName}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];

        if (favoriteMovies.length) {
          const mappedMoviesList = data.results.map(movie => {
            const isMoviePresent = favoriteMovies.find(m => m.title === movie.title && m.id === movie.id);
            if (isMoviePresent) {
              movie.isFavorite = true;
            } else {
              movie.isFavorite = false;
            }
            return movie;
          });
          this.props.setMovieList(mappedMoviesList);
        } else {
          this.props.setMovieList(data.results);
        }
      });
  }

  render() {
    return (
      <div>
        <Search onFieldChange={this.props.setMovieName} searchText={this.props.movieName} getSearchedMovies={this.getSearchedMovies} />
        <MovieResults movieList={this.props.movieList} handleAddFavorite={this.props.handleAddFavorite} handleRemoveFavorite={this.props.handleRemoveFavorite} />

      </div>
    );
  }
}

export default connect(null, { getMovies })(MovieHeist);
