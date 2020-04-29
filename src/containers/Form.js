import React from "react";
import { connect } from 'react-redux';
import { add } from "../redux/actions";
import Form from "../components/Form";
import PropTypes from "prop-types"

Form.propTypes = {
    addToDo: PropTypes.func
}

const mapDispatch = dispatch => ({
    add: todo => dispatch(add(todo))
})

export default connect(null, mapDispatch) (Form);