import ExpenseDate from "../ExpenseDate/ExpenseDate";
import '../ExpenseItem/ExpenseItem.css';

export default function ExpenseItem(props) {
  return (
    <div className="expense-item">
     <ExpenseDate date={props.date}/>
      <div className="expense-item-description">
        <h2>{props.title}</h2>
        <div  className="expense-item-price">${props.amount}</div>
      </div>
    </div>
  );
}
