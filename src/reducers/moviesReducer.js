import {GET_MOVIES} from '../actions';

export default function movies(state=[],action){
    switch(action.type){
        case GET_MOVIES:
            console.log('Movies are : ', action.type);
            return action.type;
        default:
            return state;    
    }
}