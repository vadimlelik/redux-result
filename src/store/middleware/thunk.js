
const thunk = (state) => (next) => (action) => {
    if (typeof action === 'function') {
        action(state)
    } else {
        return next(action)
    }

}


export default thunk