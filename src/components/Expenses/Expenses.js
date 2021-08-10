import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({items, foo, setExpenses}) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const changeYearHandler = (changedYear) => {
    setSelectedYear(changedYear);
  };

  // TODO: change to useEffect or useCallback
  const filterByYear = items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onChangeYear={changeYearHandler}
        />
        <ExpensesChart expenses={filterByYear} />

        <ExpensesList items={filterByYear} setExpenses={(v) => {setExpenses(v)}} />
      </Card>
    </div>
  );
};

export default Expenses;
