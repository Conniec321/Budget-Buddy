import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import TotalBudget from './TotalBudget';
import Budget from './Budget';
import { useBudgets } from '../context/BudgetContext';
import { useState } from 'react';

export default function Home({navigation}) {
  const { budgets, getBudgetExpenses, expenses } = useBudgets()
  const [showAddBudgetModel, setShowAddBudgetModel] = useState(false)
  const [showAddExpenseModel, setShowAddExpenseModel] = useState(false)
  const [viewExpenseModelBudgetId, setViewExpenseModelBudgetId] = useState()
  const [addExpenseModelBudgetId, setAddExpenseModelBudgetId] = useState()
  console.log(expenses, 'budget')
  return (
    <>
    <View style={styles.fixToText}>
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Add Budget') }>
        <Text>Add Budget</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Add Expense')} >
        <Text>Add Expense</Text>
      </TouchableOpacity>
      </View>
      <View>
      {Array.isArray(budgets) && budgets[0] ? budgets.map(budget => {
        const amount = getBudgetExpenses(budget.id).reduce((total,expense) => total + expense.description.amount, 0)
        return (
      <Budget 
        key ={budget.id} 
        name={budget.name.name} 
        amount={amount} 
        max={budget.name.max}
        id={budget.id}
       onAddExpensesClick = {() => {setShowAddExpenseModel(true); openAddExpenseModel(budget.id)}} 
       onViewExpensesClick = {() => setViewExpenseModelBudgetId(budget.id)}/>
        )
        }) : ''}  
    
      <TotalBudget/>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#99e6ff",
      padding: 10,
      margin: 10,
      borderRadius: 50
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: "center",
    },
  });
  

