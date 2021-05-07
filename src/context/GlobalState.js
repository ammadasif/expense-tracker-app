import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//Initial State
const InitialState = {
  transactions: [],
};

//create Context
export const GlobalContext = createContext(InitialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);

  //Actions
  function delTransactions(id) {
    dispatch({
      type: "DELETE TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        delTransactions,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
