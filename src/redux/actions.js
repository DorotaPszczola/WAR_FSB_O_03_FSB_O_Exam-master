
const ADD_TODO = "[TODO LIST] ADD_TODO";
const TODO_TOGGLED = "[TODO LIST] TOGGLE DONE / NOT DONE";
const TODO_REMOVED = "[TODO LIST] REMOVE TODO";
const TODO_REMOVE_DELAYED = "[TODO LIST] REMOVE TODO IN 2 SEC"

const add = (title) => ({
    type: ADD_TODO,
    title
})

const toggle = (payload) => ({
    type: TODO_TOGGLED,
    payload
})

const remove = (payload) => ({
    type: TODO_REMOVED,
    payload
})

const asyncRemove = (payload) => ({
    type: TODO_REMOVE_DELAYED,
    payload

})
const removeDelayed = (todo) => dispatch => {
    dispatch(asyncRemove)
    setTimeout(() => dispatch(remove(todo)), 2000);
}


export {
    ADD_TODO, TODO_TOGGLED, TODO_REMOVED, TODO_REMOVE_DELAYED,
    asyncRemove, toggle, add, remove, removeDelayed
}
