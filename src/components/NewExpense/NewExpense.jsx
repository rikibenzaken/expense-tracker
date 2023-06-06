import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {

  const saveNewExpense = (expense) => {
    const newExpense={
        ...expense,
        id:Math.random().toString()
    };
 
    props.onSaveNewExpense(newExpense)
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpense={saveNewExpense} />
    </div>
  );
}
