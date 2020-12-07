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

  console.log(transactions);

  return (
    <div className={s.container}>
      <div className={s.transfer}>
        <span>ID</span>
        <span>Sender</span>
        <span>Receiver</span>
        <span>Amount</span>
      </div>
      {transactions.map((transcation: any) => (
        <div className={s.transfer}>
          <span>{transcation.id}</span>
          <span>{transcation.senderAccount.user.email}</span>
          <span>{transcation.receiverAccount.user.email}</span>
          <span>{transcation.amount}</span>
        </div>
      ))}
    </div>
  );
};

export default History;
