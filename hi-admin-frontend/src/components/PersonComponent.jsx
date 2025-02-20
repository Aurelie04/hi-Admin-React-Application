import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col, Form, Table, Card } from 'react-bootstrap';
import { createPerson, getPerson, updatePerson } from '../services/PersonService';
import {useNavigate, useParams } from 'react-router-dom';

const PersonComponent = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  
  const {id} = useParams();
 const [errors,setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone_number: '',
    description: '',
    amount: ''
  })

  const navigator = useNavigate();
  
  useEffect(() => {

    if(id){
      getPerson(id).then((response) => {
         setFirstName(response.data.firstName);
         setLastName(response.data.lastName);
         setEmail(response.data.email);
         setPhoneNumber(response.data.phone_number);
         setDescription(response.data.description);
         setAmount(response.data.amount);
      }).catch(errors => {
          console.errors(errors);
      })
    }

  }, [id])

  const saveOrUpdatePerson = (e) => {
     e.preventDefault();
     
     if(validateForm()){

      const person = { firstName, lastName, email, phone_number, description, amount };
      console.log(person);

        if(id){
           updatePerson(id,person).then((response) => {
             console.log(response.data);
             navigator('/person')
           }).catch(errors => {
                console.errors(errors);
           })
        }else{
          createPerson(person)
          .then((response) => {
            console.log('Person created successfully:', response.data);
            navigator('/person'); // Redirect to the persons list page
          })
          .catch((error) => {
              console.error('Error creating person:', error);
              // Handle error, e.g., display an error message to the user
            });
    
         }
    

        }
      

   
    

  };

   function validateForm(){
     let valid = true;

     const errorsCopy = {... errors}

     if(firstName.trim()){
        errorsCopy.firstName = '';
     }else{
            errorsCopy.firstName ='first name required';
            valid = false;
     }

     if(lastName.trim()){
      errorsCopy.lastName = '';
     }else{
          errorsCopy.lastName ='last name required';
          valid = false;
      }
 
     if(email.trim()){
       errorsCopy.email = '';
     }else{
        errorsCopy.email =' email required';
        valid = false;
     }

     if(phone_number.trim()){
       errorsCopy.phone_number = '';
     }else{
      errorsCopy.firstName ='Phone number is required';
      valid = false;
     }

     if(description.trim()){
      errorsCopy.firstName = '';
     }else{
      errorsCopy.description ='Description is required';
      valid = false;
    }

     if(amount.trim()){
     errorsCopy.amount = '';
     }else{
      errorsCopy.amount ='amount is required';
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;

   }

   function pageTitle(){
    if(id){
       return <h2 className="text-center mb-4">Update Person</h2>
    }else{
      return <h2 className="text-center mb-4">Add Person</h2>
    }
   }

  return (
    <Container className="mt-5 text-center"> 
    

      <Row className="justify-content-center">
        <Col md={6}> 
          <Card className="shadow" style={{ minHeight: '50px', padding: '10px', width: '1000px' }}> {/* Added width for better centering */}
             {
               pageTitle()
             }
            <Table bordered hover style={{ width: '100%' }}> 
              <tbody>
                <tr>
                  <td style={{ width: '30%' }}>First Name:</td>
                  <td>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter First Name" 
                      value={firstName} 
                      className= {`form-control ${ errors.firstName ? 'is-invalid': ''}`}
                      onChange={(e) => setFirstName(e.target.value)} 
                      style={{ fontSize: '1.2rem', width: '100%' }} 
                    />
                    {errors.firstName && <div className='invalid-feedback'>{ errors.firstName}</div>}
                  
                  </td>
                </tr>
                <tr>
                  <td>Last Name:</td>
                  <td>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Last Name" 
                      value={lastName} 
                      className= {`form-control ${ errors.lastName ? 'is-invalid': ''}`}
                      onChange={(e) => setLastName(e.target.value)} 
                      style={{ fontSize: '1.2rem', width: '100%' }} 
                    />
                    {errors.lastName && <div className='invalid-feedback'>{ errors.lastName}</div>}
                  
                  </td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>
                    <Form.Control 
                      type="email" 
                      placeholder="Enter Email" 
                      value={email} 
                      className= {`form-control ${ errors.email ? 'is-invalid': ''}`}
                      onChange={(e) => setEmail(e.target.value)} 
                      style={{ fontSize: '1.2rem', width: '100%' }} 
                    />
                    {errors.email && <div className='invalid-feedback'>{ errors.email}</div>}
                  
                  </td>
                </tr>
                <tr>
                  <td>Phone Number:</td>
                  <td>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Phone Number" 
                      value={phone_number} 
                      className= {`form-control ${ errors.phone_number ? 'is-invalid': ''}`}
                      onChange={(e) => setPhoneNumber(e.target.value)} 
                      style={{ fontSize: '1.2rem', width: '100%' }} 
                    />
                    {errors.phone_number && <div className='invalid-feedback'>{ errors.phone_number}</div>}
                  
                  </td>
                </tr>
                <tr>
                  <td>Description:</td>
                  <td>
                    <Form.Control 
                      as="textarea" 
                      rows={3} 
                      placeholder="Enter Description" 
                      value={description} 
                      className= {`form-control ${ errors.description ? 'is-invalid': ''}`}
                      onChange={(e) => setDescription(e.target.value)} 
                      style={{ fontSize: '1.2rem', width: '100%' }} 
                    />
                    {errors.description && <div className='invalid-feedback'>{ errors.description}</div>}
                 
                  </td>
                </tr>
                <tr>
                  <td>Amount:</td>
                  <td>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Amount" 
                      value={amount} 
                      className= {`form-control ${ errors.amount ? 'is-invalid': ''}`}
                      onChange={(e) => setAmount(e.target.value)} 
                      style={{ fontSize: '1.2rem', width: '100%' }} 
                    />
                    {errors.amount && <div className='invalid-feedback'>{ errors.amount}</div>}
                    
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className="text-center mt-3"> 
              <Button variant="primary" type="submit" onClick={saveOrUpdatePerson} style={{ fontSize: '1.2rem', width: '500px' }}> {/* Added width to Submit button */}
                Submit
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonComponent;