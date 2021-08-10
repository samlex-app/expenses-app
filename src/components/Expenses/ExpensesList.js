import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({items, setExpenses}) => {

  const deleteHandler = (id) => {
    console.log('Deleting item', id)

    const newItems = items.slice()

    const newItems2 = newItems.filter((item) => item.id !== id)
    
    //const searchResults = items.filter((item) => (item.id === id))
    
    // Find item by it's id and remove it
    setExpenses(newItems2)
  };


  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onDelete={(id) => deleteHandler(id)}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
