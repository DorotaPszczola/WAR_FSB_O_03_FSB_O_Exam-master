
import { connect } from 'react-redux';
import { add, toggle, remove } from "../redux/actions";
import List from "../components/List";
import PropTypes from "prop-types"



const mapState = (store) => ({
    items: store.todos
})

const mapDispatch = (dispatch) => ({
    toggle: todo => dispatch(toggle(todo)),
    remove: todo => dispatch(remove(todo)),
    asyncRemove: () => { }, //zad7
})

export default connect(mapState, mapDispatch)(List);
