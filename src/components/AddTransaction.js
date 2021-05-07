import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [newDesc, setDesc] = useState("");
  const [newAmount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      newDesc,
      newAmount: +newAmount,
    };
    if (newTransaction.newAmount === 0) {
      alert("Please Select value");
    } else {
      addTransaction(newTransaction);
      setDesc("");
      setAmount(0);
    }
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            value={newDesc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter Description"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (Negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={newAmount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
            required
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};
