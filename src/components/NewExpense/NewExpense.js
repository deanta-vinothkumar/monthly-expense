import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDateHandler = (enteredExpenseData) =>{
        const expenseDate = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseDate);
        props.onAddExpense(expenseDate);
    };

    return(
        <div className="new-expense">
            <ExpenseForm  onSaveExpenseDate={saveExpenseDateHandler} />
        </div>
    );
};

export default NewExpense;