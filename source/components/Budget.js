import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements'
import { Button }from 'react-native-elements'
import { useBudgets } from '../context/BudgetContext'
import * as Progress from 'react-native-progress';
import { useState } from 'react';
import { ListItem } from 'react-native-elements'

const Budget = ({name, max,id, amount, gray, onViewExpensesClick, hideButton, onAddExpensesClick}) => {
  const { expenses, budgets, getBudgetExpenses } = useBudgets()
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
          { name !== 'Total' ?  
          <View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Add Expense')} >
            <Text>Add Expense</Text>
          </TouchableOpacity>
               
          <TouchableOpacity style={styles.button} onPress={() => openExpenses(id)} >
            <Text>View Expenses</Text>
          </TouchableOpacity>
          </View>
          : ''}
          {viewExpense && viewExpenseModelBudgetId === id ? 
          <View>
            <Text>Expenses</Text>
            {expenses.map(expense => (
              <View>
                <Text>{expense.description.description}</Text>
              <ListItem
              key={expense.id}
              title={expense.description.description}
              subtitle={expense.description.amount}
              bottomDivider
              />
              </View>
            ))}
          </View>
          :''
          }
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
    margin: 5
  }
})