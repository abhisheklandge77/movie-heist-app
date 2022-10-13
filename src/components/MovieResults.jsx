import React from 'react';
import MovieCard from './MovieCard';
import NoMoviesPage from './NoMoviesPage';

function MovieResults(props) {
  const { movieList, handleAddFavorite, handleRemoveFavorite } = props;

  return (
    <div className="movies-container">
      {
        movieList.length ? (
          movieList.map(movie => {
            return (
              <div className="card-container" key={movie.id}>
                <MovieCard movie={movie} handleAddFavorite={handleAddFavorite} handleRemoveFavorite={handleRemoveFavorite} />
              </div>
            )
          })
        ) : <NoMoviesPage />
      }
    </div>
  );
}

export default MovieResults;