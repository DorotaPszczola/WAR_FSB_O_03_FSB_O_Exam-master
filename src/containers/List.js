import React from "react";
import { connect } from 'react-redux';
import { add, toggle, remove, asyncRemove } from "../redux/actions";
import List from "../components/List";
import PropTypes from "prop-types";



const mapState = (store, ownProps) => ({
    items: store.todos,
    // value: store[ownProps.match.params.field]
})

const mapDispatch = (dispatch) => ({
    toggle: todo => dispatch(toggle(todo)),
    remove: todo => dispatch(remove(todo)),
    asyncRemove: todo => dispatch(asyncRemove(todo)),
})

export default connect(mapState, mapDispatch)(List);
