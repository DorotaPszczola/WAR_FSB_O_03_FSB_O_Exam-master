
const ADD_TODO = "[TODO LIST] ADD_TODO";
// const ADD_TODO = "[TODO LIST] ADD_TODO";

const add = (title) => ({
    type: ADD_TODO,
    title
})

export { ADD_TODO, add }