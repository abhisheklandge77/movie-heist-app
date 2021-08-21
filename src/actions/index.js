export const GET_MOVIES = 'GET_MOVIES';

export function getMovies(payload){
    const action ={
        type: GET_MOVIES,
        payload
    }
    return action;
}