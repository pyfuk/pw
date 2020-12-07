import React, { useEffect } from "react";
import { Transaction } from "../../../redux/models/Transaction";
import s from "./History.module.scss";

interface HistoryProps {
  transactions: Transaction[];
  getTransactions: () => void;
}

const History = ({ transactions, getTransactions }: HistoryProps) => {
  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className={s.container}>
      <div className={s.transfer}>
        <span>ID</span>
        <span>Username</span>
        <span>Amount</span>
        <span>Balance</span>
      </div>
      {transactions.map((transcation: any) => (
        <div className={s.transfer}>
          <span>{transcation.id}</span>
          <span>{transcation.username}</span>
          <span>{transcation.amount}</span>
          <span>{transcation.balance}</span>
        </div>
      ))}
    </div>
  );
};

export default History;
