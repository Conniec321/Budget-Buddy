import { useBudgets } from "../context/BudgetContext";
import { useRef } from "react"
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native';
import  Modal  from "react-native-modal";
import { BudgetProvider } from "../context/BudgetContext";



export default function AddBudgetModel({navigation}){
    
    const nameRef = useRef()
    const maxRef = useRef()
    // const { addBudget } = useBudgets()
    console.log(BudgetProvider.Consumer, 'addbudget')
    function handleSubmit(){
        // e.preventDefault()
       addBudget({name: nameRef.current.value,
        max: parseFloat(maxRef.current.value)
       })
       console.log(nameRef, maxRef, 'submit')
       navigation.navigate('Home')
    }

    return(
        <>
        <View>
        <Text>Budget Name</Text>
        <TextInput  ref={nameRef}  placeholder="Name"/>
        <TextInput ref={maxRef}  placeholder="Maximum Spending"/>
        <Button title="Add Budget" variant="primary" type='submit' onPress={()=> handleSubmit()}>Add</Button>
        </View>
        {/* <Modal show={show} onHide={handleClose}>
            <View onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Budget</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TextInput  value={nameRef}  placeholder="Name"/>
                    <TextInput value ={maxRef}  placeholder="Maximum Spending"/>
                        <Button variant="primary" type='submit'>Add</Button>
                </Modal.Body>
            </View>
        </Modal> */}


        {/* <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Budget</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className='mb-3' controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type='text' required/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="max">
                        <Form.Label>Maximum Spending</Form.Label>
                        <Form.Control ref={maxRef} type='number' required min={0} step={0.01}/>
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