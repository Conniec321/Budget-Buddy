import React, { useContext, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import useAsyncStorage from "../hooks/useAsyncStorage"
import { v4 as uuidV4} from 'uuid'

const BudgetContext = React.createContext(
  
    )
    
    export const UNCATEGORIZE_BUDGET_ID = 'Miscellaneous'
    
    export function useBudgets(){
        return useContext(BudgetContext)
    }
    
    export const BudgetProvider = ({ children }) => {
       
        const [budgets, setBudgets] =  useState([])
        const [expenses, setExpenses] =  useState([])
        



        function getBudgetExpenses(budgetId) {
            return expenses.filter(expense => expense.description.budgetId === budgetId)
        }
    
        function addExpense( description, amount, budgetId) {
            setExpenses(prevExpenses => {
                return [...prevExpenses, {id: uuidV4(),  description, amount, budgetId}]
            })
        }
    
        function addBudget(name, max) {
            setBudgets(prevBudgets => {
                if(prevBudgets.find(budget => budget.name.name === name)){
                    return prevBudgets
                }
                return [...prevBudgets, {id: uuidV4(), name, max}]
            })
        }
    
        function deleteBudget({id}) {

                setExpenses(prevExpenses => {
                    return prevExpenses.filter(expense => 
                        expense.description.budgetId !== id) 
            })
    
            setBudgets(prevBudgets => {
                return prevBudgets.filter(budget => budget.id !== id)
            })
            console.log('budgets',budgets)
        }
    
        function deleteExpense(id) {
            setExpenses(prevExpenses => {
                return prevExpenses.filter(expense => expense.id !== id)
            })
        }
    
        return <BudgetContext.Provider value={{
            budgets,
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteBudget,
            deleteExpense
        }}>{children}</BudgetContext.Provider>
    }