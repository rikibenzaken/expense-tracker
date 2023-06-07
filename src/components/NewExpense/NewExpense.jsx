import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

export default function NewExpense(props) {
  const [editingForm, setEditingForm] = useState(false);

  const saveNewExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };

    props.onSaveNewExpense(newExpense);
    setEditingForm(false);
  };

  const addNewExpense = () => {
    setEditingForm(true);
  };
  const cancleExpence = () => {
    setEditingForm(false);
  };



  return (
    <div className="new-expense">
      {!editingForm && <button onClick={addNewExpense}>Add New Expense</button>}
      {editingForm && (
        <ExpenseForm
          onCancle={cancleExpence}
          onSaveNewExpense={saveNewExpense}
        />
      )}
    </div>
  );
}
