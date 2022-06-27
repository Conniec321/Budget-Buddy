import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useBudgets } from '../context/BudgetContext'
import Budget from './Budget'

const TotalBudget = () => {
    const { expenses, budgets } = useBudgets()

    const amount = expenses.reduce((total,expense) => total + expense.description.amount, 0) 
    const max = Array.isArray(budgets) && budgets[0] ? budgets.reduce((total, budget) => total + budget.name.max, 0) : 0
    if (max === 0) {return null}
  return (
    <Budget amount={amount} name='Total' gray max={max} hideButton/>
  )
}

export default TotalBudget

const styles = StyleSheet.create({})