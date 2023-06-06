import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

import React, { useState } from "react";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <div className="expenses">
        {props.items.map((expense) => (
          <ExpenseItem key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </div>
  );
}
