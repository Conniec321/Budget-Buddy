import { useBudgets } from "../context/BudgetContext";
import { useRef } from "react"
import { StyleSheet, Text, View, Button, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { BudgetProvider } from "../context/BudgetContext";



export default function AddBudgetModel({navigation}){
    
    const nameRef = useRef()
    const maxRef = useRef()
    const { addBudget } = useBudgets()

    function handleSubmit(){
       addBudget({name: nameRef.current.value,
        max: parseFloat(maxRef.current.value)
       })
       navigation.navigate('Budget Buddy')
    }

    return(
        <>
        <View>
            <TextInput      style={styles.input} ref={nameRef}  placeholder="Budget Category"/>
            <TextInput      style={styles.input} ref={maxRef}  placeholder="Maximum Spending"/>
            <TouchableOpacity style={styles.button} onPress={()=> handleSubmit()}>
            <Text>Add Budget</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

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
  });
  