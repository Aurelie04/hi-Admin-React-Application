import React, { useState } from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'

const PersonComponent = () => {

   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [email, setEmail] = useState('')
   const [phone_number, setPhoneNumber] = useState('')
   const [description, setDescription] = useState('')
   const [amount, setAmount] = useState('')

   function handleFirstName(e){
       setFirstName(e.target.value);
   } 
   function handleLastName(e){
            setLastName(e.target.value);
   }
          
   function handleEmail(e){
     setEmail(e.target.value);
   }
   
   function handlePhoneNumber(e){
     setPhoneNumber(e.target.value);
   }

   function handleDescription(e){
     setDescription(e.target.value);
   }

   function handleAmount(e){
     setAmount(e.target.value);
   }
          

   function savePerson(e){
     e.preventDefault();

     const person = {firstName,lastName,email,phone_number,description,amount}
     console.log(person)
   }


   
  return (
     <div className='container'>
         <div className='row'>
             <div className='card'>
                 <h2 className='text-center'>Add person</h2>
                 <div className='card-body'></div>
                     <form>
                         <div className='form-group mb-2'>
                              <label className='form-label'>First Name</label>
                              <input
                                   type='text'
                                   placeholder='Enter person Name'
                                   name='firstName'
                                   value={'firstName'}
                                   className='form-contol'
                                   onChange={handleFirstName}
                              >
                              </input>
                         </div>
 
                         <div className='form-group mb-2'>
                              <label className='form-label'>Last Name</label>
                              <input
                                   type='text'
                                   placeholder='Enter person Last Name'
                                   name='lastName'
                                   value={'lastName'}
                                   className='form-contol'
                                   onChange={handleLastName}
                              >
                              </input>
                         </div>
 
                         <div className='form-group mb-2'>
                              <label className='form-label'>Email Address</label>
                              <input
                                   type='text'
                                   placeholder='Enter email address'
                                   name='email'
                                   value={'email'}
                                   className='form-contol'
                                   onChange={handleEmail}
                              >
                              </input>
                         </div>
 
                         <div className='form-group mb-2'>
                              <label className='form-label'>Phone Number</label>
                              <input
                                   type='text'
                                   placeholder='Enter phone number'
                                   name='phone_number'
                                   value={'phone_number'}
                                   className='form-contol'
                                   onChange={handlePhoneNumber}
                              >
                              </input>
                         </div>
 
                         <div className='form-group mb-2'>
                              <label className='form-label'>Description</label>
                              <input
                                   type='text'
                                   placeholder='Enter description'
                                   name='description'
                                   value={'description'}
                                   className='form-contol'
                                   onChange={handleDescription}
                              >
                              </input>
                         </div>
 
                         <div className='form-group mb-2'>
                              <label className='form-label'>Amount</label>
                              <input
                                   type='number'
                                   placeholder='Enter the amount'
                                   name='amount'
                                   value={'amount'}
                                   className='form-contol'
                                   onChange={handleAmount}
                              >
                              </input>
                         </div>

                         <div className='form-group mb-2'>
                            <Button className='btn btn-success' onClick={savePerson}>Submit</Button>
                         </div>
 
                     </form>
 
             </div>
         </div>
     </div>
   )
 }
 
 export default PersonComponent