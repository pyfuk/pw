import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ReduxState } from "../../../redux/store";
import History from "./History";

const mapStateToProps = (state: ReduxState) => ({
  transactions: [
    { id: 0, username: "shax988", amount: 100, balance: 500 },
    { id: 1, username: "ANton", amount: 2400, balance: 345 },
    { id: 2, username: "barat", amount: 200, balance: 435 },
    { id: 3, username: "KUke", amount: 600, balance: 4564 },
    { id: 4, username: "Aloo", amount: 2300, balance: 5767 },
  ],
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(History);
