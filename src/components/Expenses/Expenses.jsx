import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import React, { useState } from "react";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
       <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
       
      </div>
    </div>
  );
}
