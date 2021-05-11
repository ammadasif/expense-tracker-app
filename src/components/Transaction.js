import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { delTransactions } = useContext(GlobalContext);
  const sign = transaction.newAmount < 0 ? "-" : "+";

  return (
    <li className={transaction.newAmount < 0 ? "minus" : "plus"}>
      {transaction.newDesc}
      <span>
        {sign}{transaction.newAmount} Rs
      </span>
      <button
        onClick={() => delTransactions(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
