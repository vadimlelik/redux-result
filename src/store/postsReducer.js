import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    entities: [],
    loading: false,
    error: null,
}


export const taskLoad = createAsyncThunk('post/fetchPost', async (arg, { rejectWithValue }) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return data

})


const postSlice = createSlice({
    name: 'post',
    reducers: {
        postAdd: (state, action) => {
            state.entities.push(action.payload)
        },
        postDelete: (state, acton) => {
            state.entities = state.entities.filter((post) => post.id !== acton.payload)
        },
        postReceived: (state, action) => {
            state.loading = true
        },
        postRequested: (state, action) => {
            state.loading = false
            state.entities = state.entities.concat(action.payload)
        },
        postFailed: (state, action) => {
            state.loading = false
            state.error = action.payload

        }
    },
    initialState,
    extraReducers: (builder) => {
        builder.addCase(taskLoad.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(taskLoad.fulfilled, (state, action) => {
            state.loading = false
            state.entities = state.entities.concat(action.payload)
        })
        builder.addCase(taskLoad.rejected, (state, action) => {
            state.loading = false
        })
    }

})


const { actions, reducer: postReducer } = postSlice
export const { postAdd, postDelete, postReceived, postRequested, postFailed } = actions

// export const loadTask = () => async (dispatch, getState) => {
//     dispatch(postReceived())
//     try {
//         const { data } = await axios('https://jsonplaceholder.typicode.com/posts')
//         dispatch(postRequested(data))

//     } catch (error) {
//         dispatch(postFailed(error.message))

//     }

// }


export default postReducer