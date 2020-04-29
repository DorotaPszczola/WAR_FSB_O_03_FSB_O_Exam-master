import React from "react";
import { connect } from 'react-redux';
import { add, toggle, remove, removeDelayed } from "../redux/actions";
import List from "../components/List";
import PropTypes from "prop-types";



// const mapState = (store) => ({
//     todos: store.todos,
// })

const mapState = ({ todos }, ownProps) => ({
    todos: todos.filter(todo => {
        switch (ownProps.filter) {
            case undefined:
                return true;
            case "done":
                return todo.done;
            case "not-done":
                return !todo.done;
            default:
                false
        }
    })
})

const mapDispatch = (dispatch) => ({
    toggle: todo => dispatch(toggle(todo)),
    remove: todo => dispatch(remove(todo)),
    asyncRemove: todo => dispatch(removeDelayed(todo)),
})

export default connect(mapState, mapDispatch)(List);
