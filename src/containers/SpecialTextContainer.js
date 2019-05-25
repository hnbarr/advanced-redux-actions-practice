import { connect } from 'react-redux';
import SpecialText from "../components/SpecialText";

const mapStateToProps = (state) => {
  return {
    text: state.specialText
  }
}

export default connect(mapStateToProps, null)(SpecialText);
