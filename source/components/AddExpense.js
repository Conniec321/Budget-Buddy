import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
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
        console.log('budgetid', budgetIdRef)
        addExpense({
            description: descriptionRef.current.value,
            amount: parseFloat(amountRef.current.value),
            budgetId: value
        })
        navigation.navigate('Home')
    }


  return (
    <>
    <View>
      <Text> Expense Name </Text>
    </View>
    <TextInput  style={styles.input} ref={descriptionRef}  placeholder="Expense Description"/>
    <TextInput  style={styles.input} ref={amountRef}  placeholder="Amount"/>
    <Dropdown data={budgets} 
            placeholder='Select Budget'
            ref={budgetIdRef}
            labelField='name.name'
            valueField='id'
        onChange={item => {
            setValue(item.id);
          }}
       
    />
     <Button title="Add Expense" variant="primary" type='submit' onPress={()=> handleSubmit()}/>
    {/* <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className='mb-3' controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control ref={descriptionRef} type='text' required/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="amount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control ref={amountRef} type='number' required min={0} step={0.01}/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="budgetId">
                        <Form.Label>Budget</Form.Label>
                        <Form.Select 
                        defaultValue={defaultBudgetId}
                        ref={budgetIdRef} 
                        >
                        <option id={UNCATEGORIZE_BUDGET_ID}>Miscellaneous</option>
                        {budgets.map(budget => (
                            <option key={budget.id} value={budget.id}>{budget.name.name}</option>
                        ))}
                        </Form.Select>
                       
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type='submit'>Add</Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal> */}
    </>
  )
}

export default AddExpense

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
  });
  