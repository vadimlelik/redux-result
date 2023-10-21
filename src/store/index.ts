import { useDispatch } from "react-redux";
import postReducer from "./postsReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        post: postReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
