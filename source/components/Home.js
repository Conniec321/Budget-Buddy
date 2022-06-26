import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View>
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Add Budget') }>
        <Text>Add Budget</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Add Expense</Text>
      </TouchableOpacity>

    </View>
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
      backgroundColor: "#2c7743",
      padding: 10,
      margin: 3
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    }
  });
  

