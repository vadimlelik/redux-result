
import postReducer from "./postsReducer";
import { configureStore } from "@reduxjs/toolkit";

export default function createStore() {
    const store = configureStore({
        reducer: {
            post: postReducer
        },
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
    })
    return store
}



