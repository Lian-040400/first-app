import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ expenses, onChaqngeFilter }) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected = {filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
    </Card>
  );
}

export default Expenses;
