import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import postReducer from "./postsReducer";
import thunk from "./middleware/thunk";

const rootReducer = combineReducers({
    post: postReducer

})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))



