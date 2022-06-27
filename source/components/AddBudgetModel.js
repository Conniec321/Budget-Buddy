import { useBudgets } from "../context/BudgetContext";
import { useRef } from "react"
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native';

import { BudgetProvider } from "../context/BudgetContext";



export default function AddBudgetModel({navigation}){
    
    const nameRef = useRef()
    const maxRef = useRef()
    const { addBudget } = useBudgets()

    function handleSubmit(){
        // e.preventDefault()
        console.log(nameRef.current.value,maxRef.current.value )
       addBudget({name: nameRef.current.value,
        max: parseFloat(maxRef.current.value)
       })
      
       navigation.navigate('Home')
    }

    return(
        <>
        
        <View>
        
        <TextInput      style={styles.input} ref={nameRef}  placeholder="Budget Category"/>
        <TextInput      style={styles.input} ref={maxRef}  placeholder="Maximum Spending"/>
        <Button title="Add Budget" variant="primary" type='submit' onPress={()=> handleSubmit()}>Add</Button>
        </View>
        
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
  });
  