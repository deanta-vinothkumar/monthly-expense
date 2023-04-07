import React, {useState} from "react";
import './ExpenseForm.css';
const ExpenseForm = (props) =>{
    //Old way
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle :'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });
    
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // });

        // setUserInput((prevState) =>{
        //     return {...prevState, 
        //         enteredTitle:event.target.value    
        //     }
        // });

    };
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
        // setUserInput((prevState) =>{
        //     return {...prevState, 
        //         enteredAmount:event.target.value    
        //     }
        // });
    };
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
        // setUserInput((prevState) =>{
        //     return {...prevState, 
        //         enteredDate:event.target.value    
        //     }
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseDate(expenseData);
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };


    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}  value={enteredAmount} />
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" step="2023-12-31" onChange={dateChangeHandler} value={enteredDate}  />
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit" >Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;