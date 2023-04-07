import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenesesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() ===  filteredYear;
  });

  


  return (
    <Card className="expenses">
        <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
        />
       <ExpensesChart expenses={filteredExpenses} />
       <ExpenesesList items={filteredExpenses} />

        {/* && new method with && 
            {filteredExpenses.length === 0 && <p>No Records Found !!!</p>}
            {filteredExpenses.length > 0 && 
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        date={expense.date}
                        amount={expense.amount}
                        />
                    ))
            }
        */}

        {/* 
            old Method
        
            {filteredExpenses.length === 0 ? (<p>No Records Found !!!</p>) : 
            (
                filteredExpenses.map((expense) => (
                    <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                    />
                )
            )
        )} */}

      {/* <ExpenseItem title={props.items[0].title} date={props.items[0].date} amount={props.items[0].amount}/>
            <ExpenseItem title={props.items[1].title} date={props.items[1].date} amount={props.items[1].amount} />
            <ExpenseItem title={props.items[2].title} date={props.items[2].date} amount={props.items[2].amount}/>
            <ExpenseItem title={props.items[3].title} date={props.items[3].date} amount={props.items[3].amount} /> */}
    </Card>
  );
};

export default Expenses;
