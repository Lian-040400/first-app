import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = ({onAddExpense}) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    onAddExpense(enteredExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};
export default NewExpense;
