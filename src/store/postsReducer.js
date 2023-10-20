import axios from 'axios'
import { LOAD_TASK } from './action';

const initialState = {
    posts: [
        { title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ', id: 1 },
        { title: 'Lorem ipsum dolor sit amet consectetur, ?', id: 2 },
        { title: 'Lorem ipsum dolor sit ?', id: 3 },
        { title: 'Lorem ipsum dolor ?', id: 4 }
    ],
    loading: false,
    user: null,
    role: 'admin'
}

const postReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case 'ADD_TASK':
            return {
                ...state,
                posts: state.posts.concat({ title: payload, id: Math.random() })

            };
        case 'DELETE_TASK':
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== payload)
            }
        case 'LOAD_TASK':
            return {
                ...state,
                posts: state.posts.concat(payload)
            }
        default:
            return state
    }

}


export const loadTask = () => async ({ dispatch }) => {
    try {
        const { data } = await axios('https://jsonplaceholder.typicode.com/posts')
        dispatch(LOAD_TASK(data))

    } catch (error) {

    }

}



export default postReducer