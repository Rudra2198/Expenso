import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  let title = props.title;

  function ClickHandler() {
    title = "Updated!";
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
      <button onClick={ClickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
