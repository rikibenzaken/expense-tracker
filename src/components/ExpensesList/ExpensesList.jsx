import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './ExpensesList.css';

export default function ExpensesList(props) {

  if (props.items.length === 0) return <div className="expenses-list-fallback">Found No Expenses </div>;

  return (
    <div>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}
