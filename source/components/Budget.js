import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements'
import { Button }from 'react-native-elements'
import { useBudgets } from '../context/BudgetContext'
import * as Progress from 'react-native-progress';
import { useState } from 'react';
import { ListItem } from 'react-native-elements'
import { ScreenStackHeaderRightView } from 'react-native-screens'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const Budget = ({navigation, name, max,id, amount, gray, onViewExpensesClick, hideButton, onAddExpensesClick}) => {
  const { expenses, budgets, getBudgetExpenses, deleteExpense } = useBudgets()
  const [viewExpense, setViewExpense] = useState(false)
  const [viewExpenseModelBudgetId, setViewExpenseModelBudgetId] = useState()
  const budgetExpenses = getBudgetExpenses(id)
  console.log(budgetExpenses, 'expenses')

  function openExpenses(budgetId) {
    setViewExpense(true)
    setViewExpenseModelBudgetId(budgetId)
  }

  return (
    <View>
      <Card >
          <View>
            <Text style={styles.text}>
              {name === 'Total' && <i ></i>}
              {name}
              </Text>
          </View>
          <View>
            <Text style={styles.innerText}>${(amount)} / ${max}</Text>
          </View>
          <Progress.Bar style={styles.progressBar} progress={amount / max} width={null} />
          { name !== 'Total' && !viewExpense?  
          <View>
          {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Add Expense')} >
            <Text>Add Expense</Text>
          </TouchableOpacity> */}
               
          <TouchableOpacity style={styles.button} onPress={() => openExpenses(id)} >
            <Text >View Expenses</Text>
          </TouchableOpacity>
          </View>
          : ''}
          {viewExpense && viewExpenseModelBudgetId === id ? 
            <View  style={styles.fixToText}>
              <Text style={styles.expenseHeader}> {name} Expenses</Text>
                <TouchableOpacity style={styles.button} onPress={() => setViewExpense(false)} >
                  <Text>Hide Expense</Text>
                </TouchableOpacity>
            </View>
          : ''}
          <View>
          {viewExpense && viewExpenseModelBudgetId === id ? 
            expenses.map(expense => (
              <View style={styles.fixToText}>
                <Text style={styles.expense}>{expense.description.description}</Text>
                <Text style={styles.price}>${expense.description.amount}</Text>
                <TouchableOpacity style={styles.button} onPress={() => deleteExpense(expense.id)} >
                <Text> Delete</Text>
                </TouchableOpacity>
             </View>
            ))
          :''
          }
          </View>
        </Card>
    </View>
  )
}

export default Budget

const styles = StyleSheet.create({   button: {
  alignItems: "center",
  backgroundColor: "#99e6ff",
  padding: 5,
  margin: 10,
  borderRadius: 50
},
  text: {
    fontWeight: "bold",
    margin: 4
  },
  innerText: {
    margin: 4
  },
  progressBar: {
    margin: 5,
    outlineColor: "#523009",
    outlineStyle: "solid",
    outlineWidth: 1,
  },
  expense: {
    alignItems: "flex-start",
    marginLeft: 20, 
    margin: 10
  },
  price: {
    alignItems: "flex-end",
    marginRight: 20,
    margin: 10
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: "center",
  },
  expenseHeader: {
    marginTop: 10,
    fontWeight:"bold",
    padding: 5,
    fontStyle: "underline"
  }
})