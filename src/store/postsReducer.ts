import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { PostItem } from "App";

interface PostState {
    entities: PostItem[];
    loading: boolean;
    error: null | string;
}

const initialState: PostState = {
    entities: [],
    loading: false,
    error: null
};

export const taskLoad = createAsyncThunk<PostItem[], undefined, {}>(
    "post/fetchPost",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await response.json();
            return data;
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue("error message");
        }
    }
);

const postSlice = createSlice({
    name: "post",
    reducers: {
        postAdd: (state, action: PayloadAction<PostItem>) => {
            state.entities.push(action.payload);
        },
        postDelete: (state, acton) => {
            state.entities = state.entities.filter(
                (post) => post.id !== acton.payload
            );
        },
        postReceived: (state, action) => {
            state.loading = true;
        },
        postRequested: (state, action) => {
            state.loading = false;
            state.entities = state.entities.concat(action.payload);
        },
        postFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
    initialState,
    extraReducers: (builder) => {
        builder.addCase(taskLoad.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(taskLoad.fulfilled, (state, action) => {
            state.loading = false;
            state.entities = state.entities.concat(action.payload);
        });
        builder.addCase(taskLoad.rejected, (state, action) => {
            state.loading = false;
        });
    }
});

const { actions, reducer: postReducer } = postSlice;
export const { postAdd, postDelete, postReceived, postRequested, postFailed } =
    actions;

export default postReducer;
