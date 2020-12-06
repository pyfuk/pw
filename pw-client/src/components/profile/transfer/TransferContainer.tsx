import { connect } from "react-redux";
import { Dispatch } from "redux";
import { completeTransfer } from "../../../redux/actionCreators/accountActionCreator";
import { ReduxState } from "../../../redux/store";
import Transfer from "./Transfer";

const mapStateToProps = (state: ReduxState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onTransfer() {
    dispatch<any>(completeTransfer());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Transfer);
