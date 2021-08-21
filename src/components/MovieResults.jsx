import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Tooltip, Typography } from '@material-ui/core';

function MovieResults(props){
    const { movieList } = props;
    console.log(movieList);

    const movieImgURL = 'https://image.tmdb.org/t/p/w342';
    return(
        <div className="movies-container">
            {
                movieList.map(movie => {
                    const movieImg = movie.poster_path;
                    return(
                        <div className="card-container">
                        <Card className="movie-card" key={movie.id}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt={movie.title}
                            image={movieImgURL+movieImg}
                            title="Movie"
                            className="movie-img"
                          />
                          <CardContent className="movie-info">
                            <Typography gutterBottom className="movie-title" variant="h5" component="h2">
                                {movie.title}
                            </Typography>
                            <Typography gutterBottom variant="h5" className="movie-ratings" component="h4">
                                Ratings : {movie.vote_average}
                            </Typography>
                            <Typography gutterBottom variant="h5" className="movie-date" component="h4">
                                Release Date : {movie.release_date}
                            </Typography>
                            <Tooltip title={movie.overview} arrow className="tooltip">
                            <Typography variant="body2" className="movie-overview" color="textSecondary" component="p">{movie.overview || 'No details available'}</Typography>
                            </Tooltip>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button className="add-favorite-btn" color="primary" variant="outlined">
                            Add To Favorite
                          </Button>
                        </CardActions>
                      </Card>
                    </div>
                    )
                })
            }
        </div>
    );
}

export default MovieResults;