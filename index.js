import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import { BudgetProvider } from './source/context/BudgetContext';
import { View, Text} from 'react-native';


const Root = () => (
  <BudgetProvider>
    <App />
    <View><Text>Hi</Text></View>
  </BudgetProvider>
)

AppRegistry.registerComponent('Budget Buddy', () => Root);

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import App from './App';


// import { BudgetProvider } from './source/context/BudgetContext';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BudgetProvider>
//     <App />
//     </BudgetProvider>
//   </React.StrictMode>
// );

// //"main": "node_modules/expo/AppEntry.js",


