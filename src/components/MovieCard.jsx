import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Tooltip, Typography } from '@material-ui/core';

function MovieCard({movie, handleAddFavorite, handleRemoveFavorite}) {
    const movieImgBaseURL = 'https://image.tmdb.org/t/p/w342';

    return (
        <Card className="movie-card">
        <CardActionArea onClick={() => console.log("Selected Movie:::", movie)}>
          <CardMedia
            component="img"
            alt={movie.title}
            image={`${movieImgBaseURL}${movie.poster_path || movie.backdrop_path}`}
            title={movie.title}
            className="movie-img"
          />
          <CardContent className="movie-info">
            <Typography gutterBottom className="movie-title" variant="h5" component="h2" title={movie.title}>
                {movie.title}
            </Typography>
            <Typography gutterBottom variant="h5" className="movie-ratings" component="h4">
                Ratings : {movie.vote_average || "N/A"}
            </Typography>
            <Typography gutterBottom variant="h5" className="movie-date" component="h5">
                Release Date : {movie.release_date}
            </Typography>
            <Tooltip title={movie.overview} arrow className="tooltip">
            <Typography variant="body2" className="movie-overview" color="textSecondary" component="p">{movie.overview || 'No details available'}</Typography>
            </Tooltip>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {
            movie?.isFavorite ? 
            (
              <Button 
              className="remove-favorite-btn" 
              color="primary" 
              variant="outlined"
              onClick={() => handleRemoveFavorite(movie)}
              >
                Remove from Favorite
              </Button>
            ) : 
            (
              <Button 
              className="add-favorite-btn" 
              color="primary" 
              variant="outlined"
              onClick={() => handleAddFavorite(movie)}
              >
                Add To Favorite
              </Button>
            )
          }
        </CardActions>
      </Card>
    );
};

export default MovieCard;