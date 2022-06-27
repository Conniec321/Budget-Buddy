import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import { BudgetProvider } from './source/context/BudgetContext';
import { View, Text} from 'react-native';


const Root = () => (
  <BudgetProvider>
    <App />
  </BudgetProvider>
)

AppRegistry.registerComponent('Budget Buddy', () => Root);




