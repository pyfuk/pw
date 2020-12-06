import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ReduxState } from "../../redux/store";
import Header from "./Header";

const mapStateToProps = (state: ReduxState) => ({
  isAuthenticated: true,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
