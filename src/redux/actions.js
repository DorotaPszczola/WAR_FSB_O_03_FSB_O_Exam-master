
const ADD_TODO = "[TODO LIST] ADD_TODO";
const TODO_TOGGLED = "[TODO LIST] TODO_TOGGLED";
const TODO_REMOVED = "[TODO LIST] TODO_REMOVED";

const add = (title) => ({
    type: ADD_TODO,
    title
})

const toggle = (payload) => ({
    type: TODO_TOGGLED,
    payload
})

const remove = (payload) => ({
    type: TODO_TOGGLED,
    payload
})

export { ADD_TODO, TODO_TOGGLED,TODO_REMOVED, toggle, add, remove }
