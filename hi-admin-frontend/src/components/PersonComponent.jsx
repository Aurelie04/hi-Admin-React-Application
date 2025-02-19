import React, { useState } from 'react';
import { Button, Container, Row, Col, Form, Table, Card } from 'react-bootstrap';
import { createPerson } from '../services/PersonService';
import {useNavigate} from 'react-router-dom';

const PersonComponent = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const navigator = useNavigate();


  const handleSubmit = (e) => {
     e.preventDefault();
 

    const person = { firstName, lastName, email, phone_number, description, amount };
    console.log(person);

    createPerson(person)
      .then((response) => {
        console.log('Person created successfully:', response.data);
        navigator('/person'); // Redirect to the persons list page
      })
      .catch((error) => {
          console.error('Error creating person:', error);
          // Handle error, e.g., display an error message to the user
        });

  };

  return (
    <Container className="mt-5 text-center"> 
    

      <Row className="justify-content-center">
        <Col md={6}> 
          <Card className="shadow" style={{ minHeight: '50px', padding: '10px', width: '1000px' }}> {/* Added width for better centering */}
            <h2 className="text-center mb-4">Add Person</h2>
            <Table bordered hover style={{ width: '100%' }}> 
              <tbody>
                <tr>
                  <td style={{ width: '30%' }}>First Name:</td>
                  <td>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter First Name" 
                      value={firstName} 
                      onChange={(e) => setFirstName(e.target.value)} 
                      style={{ fontSize: '1.2rem', width: '100%' }} 
                    />
                  </td>
                </tr>
                <tr>
                  <td>Last Name:</td>
                  <td>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Last Name" 
                      value={lastName} 
                      onChange={(e) => setLastName(e.target.value)} 
                      style={{ fontSize: '1.2rem', width: '100%' }} 
                    />
                  </td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>
                    <Form.Control 
                      type="email" 
                      placeholder="Enter Email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      style={{ fontSize: '1.2rem', width: '100%' }} 
                    />
                  </td>
                </tr>
                <tr>
                  <td>Phone Number:</td>
                  <td>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Phone Number" 
                      value={phone_number} 
                      onChange={(e) => setPhoneNumber(e.target.value)} 
                      style={{ fontSize: '1.2rem', width: '100%' }} 
                    />
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
                      onChange={(e) => setDescription(e.target.value)} 
                      style={{ fontSize: '1.2rem', width: '100%' }} 
                    />
                  </td>
                </tr>
                <tr>
                  <td>Amount:</td>
                  <td>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Amount" 
                      value={amount} 
                      onChange={(e) => setAmount(e.target.value)} 
                      style={{ fontSize: '1.2rem', width: '100%' }} 
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className="text-center mt-3"> 
              <Button variant="primary" type="submit" onClick={handleSubmit} style={{ fontSize: '1.2rem', width: '500px' }}> {/* Added width to Submit button */}
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