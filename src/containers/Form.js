import { connect } from 'react-redux';
import { add } from "../redux/actions";
import Form from "../components/Form";
import PropTypes from "prop-types"

Form.propTypes = {
    addToDo: PropTypes.func
}

// const mapState = (state) => {

// };

const mapDispatch = (dispatch) => ({
    add: todo => dispatch(add(todo)) //add to props przekazywany do komponentu
})

export default connect(null, mapDispatch)(Form);
