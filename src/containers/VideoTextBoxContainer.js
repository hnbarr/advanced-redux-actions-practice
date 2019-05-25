import { connect } from "react-redux";
import VideoTextBox from '../components/VideoTextBox'
import { setVideoURL } from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
      set: URL => dispatch(setVideoURL(URL))
    };
  };
  
  export default connect(null, mapDispatchToProps)(VideoTextBox);