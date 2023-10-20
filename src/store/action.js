
export const ADD_TASK = (payload) => {
    return {
        type: 'ADD_TASK', payload: 'Lorem ipsum dolor sit amet.'

    }
}

export const LOAD_TASK = (data) => {
    return {
        type: 'LOAD_TASK', payload: data
    }
}


export const DELETE_TASK = (id) => ({ type: 'DELETE_TASK', payload: id })
