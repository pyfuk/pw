import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ReduxState } from "../../redux/store";
import Profile from "./Profile";

const mapStateToProps = (state: ReduxState) => ({
  user: { username: "Pyfuk", email: "shax988@gmail.com", balance: 500 },
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
