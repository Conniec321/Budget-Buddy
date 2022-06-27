import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRef, useState } from "react"
import { useBudgets } from '../context/BudgetContext'
import SelectDropdown from 'react-native-select-dropdown'
import { Dropdown } from 'react-native-element-dropdown';

const AddExpense = ({navigation}) => {
    const descriptionRef = useRef()
    const amountRef = useRef()
    const budgetIdRef = useRef()
    const { addExpense, budgets } = useBudgets()
    const [value, setValue] = useState(null);

    function handleSubmit(){
        addExpense({
            description: descriptionRef.current.value,
            amount: parseFloat(amountRef.current.value),
            budgetId: value
        })
        navigation.navigate('Budget Buddy')
    }


  return (
    <>
    <View>
      <Text> Expense Name </Text>
    </View>
    <TextInput  style={styles.input} ref={descriptionRef}  placeholder="Expense Description"/>
    <TextInput  style={styles.input} ref={amountRef}  placeholder="Amount"/>
    <Dropdown 
            style={styles.dropdown}
            data={budgets} 
            placeholder='Select Budget'
            ref={budgetIdRef}
            labelField='name.name'
            valueField='id'
        onChange={item => {
            setValue(item.id);
          }}
       
    />
    <TouchableOpacity style={styles.button} onPress={()=> handleSubmit()}>
            <Text>Add Expense</Text>
    </TouchableOpacity>

    </>
  )
}

export default AddExpense

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#99e6ff",
        padding: 10,
        margin: 10,
        borderRadius: 50
      },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    dropdown: {
        margin: 12,
        padding: 10,
        outlineColor: "#cccccc",
        outlineStyle: "solid",
        outlineWidth: 1,
    }
  });
  