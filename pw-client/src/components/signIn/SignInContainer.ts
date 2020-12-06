import { connect } from "react-redux";
import SignIn from "./SignIn";
import { ReduxState } from "../../redux/store";
import { Dispatch } from "redux";
import { сompleteSignIn } from "../../redux/actionCreators/accountActionCreator";

const mapStateToProps = (state: ReduxState) => ({ email: state.account.email });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSignIn: () => {
    dispatch<any>(сompleteSignIn());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
