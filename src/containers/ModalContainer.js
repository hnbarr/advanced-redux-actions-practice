import { connect } from "react-redux";
import Modal from '../components/Modal'
import { setIsLoading } from "../actions";

const mapStateToProps = (state) =>{
    return {
      isLoading: state.isLoading
    };
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
      setIsLoading: isLoading => dispatch(setIsLoading(isLoading))
    };
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(Modal);
  