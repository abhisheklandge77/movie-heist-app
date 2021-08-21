import getMovies from "./moviesReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  getMovies,
});
export default rootReducer;