import { connect } from "react-redux";
import { ReduxState } from "../../redux/store";
import { Dispatch } from "redux";
import { сompleteSignIn } from "../../redux/actionCreators/accountActionCreator";
import SignIn from "../signIn/SignIn";

const mapStateToProps = (state: ReduxState) => ({ email: state.account.email });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSignIn: () => {
    dispatch<any>(сompleteSignIn());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
