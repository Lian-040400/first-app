import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "../src/components/Expenses/Expenses";
import ExpensesFilter from "./components/ExpensesFilter/ExpensesFilter";
const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const addNewExpenseHandler = (newExpense) => {
  expenses.push(newExpense);
  console.log(expenses);
};
const changeFilterHandler=(filterOption) =>{
  console.log(filterOption);
}

function App() {
  return (
    <div>
      <NewExpense onAddExpense={addNewExpenseHandler} />
      <Expenses onChaqngeFilter = {changeFilterHandler} expenses={expenses}/>
    </div>
  );
}

export default App;
