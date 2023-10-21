import { RootState } from "../store/index";
export const getPosts = (state: RootState) => state.post.entities;
export const isGetLoading = (state: RootState) => state.post.loading;
