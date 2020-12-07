import { connect } from "react-redux";
import { Dispatch } from "redux";
import { completeTransfer } from "../../../redux/actionCreators/accountActionCreator";
import { loadUsers } from "../../../redux/actionCreators/transactionActionCreator";
import { ReduxState } from "../../../redux/store";
import Transfer from "./Transfer";

const mapStateToProps = (state: ReduxState) => ({
  // users: state.transaction.users,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onTransfer() {
    dispatch<any>(completeTransfer());
  },
  getUsers() {
    dispatch<any>(loadUsers());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Transfer);
