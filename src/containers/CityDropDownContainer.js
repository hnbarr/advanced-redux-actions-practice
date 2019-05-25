import { connect } from "react-redux";
import CityDropDown from '../containers/CurrentCityContainer';
import { setCurrentCity } from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
      set: city => dispatch(setCurrentCity(city))
    };
  };
  
  export default connect(null, mapDispatchToProps)(CityDropDown);