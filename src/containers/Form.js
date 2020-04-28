import { connect } from 'react-redux';
import ADD_TODO from "../redux/actions";
import Form from "../components/Form";
import PropTypes from "prop-types"

Form.propTypes = {
  addToDo: PropTypes.func
}

const mapState = (state) => {

};

const mapDispatch = () => {

}

export default connect(mapState, mapDispatch)(Form);
