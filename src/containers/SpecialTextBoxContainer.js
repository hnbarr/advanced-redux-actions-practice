import { connect } from 'react-redux';
import {setSpecialText} from "../actions";
import SpecialTextBox from "../components/SpecialTextBox";

const mapDispatchToProps = (dispatch) => {
  return {
    set: text => dispatch(setSpecialText(text))
  }
}

export default connect(null, mapDispatchToProps)(SpecialTextBox);
