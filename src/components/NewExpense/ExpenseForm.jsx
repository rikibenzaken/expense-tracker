// import React, { useState } from "react";

import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleHandlerChange = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountHandlerChange = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateHandlerChange = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitExpenseForm = (event) => {
    event.preventDefault();
    const expense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveNewExpense(expense);
    resetExpenseForm();
  };

  const resetExpenseForm = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitExpenseForm}>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandlerChange} />
        </div>
        <div className="new-expense-control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountHandlerChange}
          />
        </div>
        <div className="new-expense-control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateHandlerChange}
          />
        </div>
      </div>
      <div className="new-expense-actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
