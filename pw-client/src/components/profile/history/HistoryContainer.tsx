import { connect } from "react-redux";
import { Dispatch } from "redux";
import { loadTransactions } from "../../../redux/actionCreators/transactionActionCreator";
import { ReduxState } from "../../../redux/store";
import History from "./History";

const mapStateToProps = (state: ReduxState) => ({
  transactions: state.transaction.transactions,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getTransactions() {
    dispatch<any>(loadTransactions());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
