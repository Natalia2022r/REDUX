import { combineReducers } from "redux";
import postsReducer from "./reducer";

const rootReducer = combineReducers({
    postsReducer,
});
export default rootReducer;