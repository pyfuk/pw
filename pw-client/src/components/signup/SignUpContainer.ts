import { connect } from "react-redux";
import { ReduxState } from "../../redux/store";
import { Dispatch } from "redux";
import { сompleteSignUp } from "../../redux/actionCreators/accountActionCreator";
import SignUp from "./SignUp";

const mapStateToProps = (state: ReduxState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSignUp: () => {
    dispatch<any>(сompleteSignUp());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
