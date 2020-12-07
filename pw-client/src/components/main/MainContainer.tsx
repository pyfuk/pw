import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ReduxState } from "../../redux/store";
import Main from "./Main";

const mapStateToProps = (state: ReduxState) => ({
  isAuthenticated: !!state.account.user,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
