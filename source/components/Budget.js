import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements'
import { Button }from 'react-native-elements'
import { useBudgets } from '../context/BudgetContext'

const Budget = ({name, max,id, amount, gray, onViewExpensesClick, hideButton, onAddExpensesClick}) => {
  const { expenses, budgets, getBudgetExpenses } = useBudgets()

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
            <Text>${(amount)} / ${max}</Text>
          </View>
          { name !== 'Total' ?  
          <View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Add Expense')} >
            <Text>Add Expense</Text>
          </TouchableOpacity>
               
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Add Expense')} >
            <Text>View Expenses</Text>
          </TouchableOpacity>
          </View>
          : ''}
        </Card>
    </View>
  )
}

export default Budget

const styles = StyleSheet.create({   button: {
  alignItems: "center",
  backgroundColor: "#99e6ff",
  padding: 5,
  margin: 10
},
  text: {
    fontWeight: "bold",
  }
})