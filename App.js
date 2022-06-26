import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native';
import { useState } from 'react';
import { useBudgets } from './source/context/BudgetContext';
import AddBudgetModel from './source/components/AddBudgetModel';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './source/components/Home';

import { BudgetProvider } from './source/context/BudgetContext';


export default function App() {

  const Stack = createNativeStackNavigator()
  return (

    // <BudgetProvider>
  <NavigationContainer>
   
    <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen  name='Home' component={Home} />
        <Stack.Screen  name='Add Budget' component={AddBudgetModel} />
        </Stack.Navigator>
    
    </NavigationContainer>
    // </BudgetProvider>

 
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
