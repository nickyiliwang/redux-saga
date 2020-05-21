import { connect } from "react-redux";
import App from "../components/App";
import {
  fetchColorAPIRequest,
  fetchContinuouslyRequest,
  fetchCancelledRequest,
} from "../actions";

const mapStateToProps = ({ colorAPI }) => ({ colorAPI });

const mapDispatchToProps = (dispatch) => ({
  fetchCancelledRequest: () => dispatch(fetchCancelledRequest()),
  fetchColorAPIRequest: () => dispatch(fetchColorAPIRequest()),
  fetchContinuouslyRequest: () => dispatch(fetchContinuouslyRequest()),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
