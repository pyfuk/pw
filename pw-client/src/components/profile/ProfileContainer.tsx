import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ReduxState } from "../../redux/store";
import Profile from "./Profile";

const mapStateToProps = (state: ReduxState) => ({
  user: state.account.user,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
