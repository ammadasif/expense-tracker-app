import { createContext, useReducer } from "react";
import transReducer from "./transReducer";

const initialTransactions = [
];

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(transReducer, initialTransactions);

  function addTransaction(transObj) {
    dispatch({
      type: "ADD TRANSACTIONS",
      payload: {
        amount: transObj.amount,
        desc: transObj.desc,
      },
    });
  }
  return (
    <TransactionContext.Provider
      value={{
        transactions: state,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};