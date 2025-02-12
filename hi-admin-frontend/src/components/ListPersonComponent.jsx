import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { listPersons } from '../services/PersonService'

const ListPersonComponent = () => {
  
    const [persons, setPersons] = useState([])

    useEffect(() => {
         listPersons().then((response) => {
            setPersons(response.data);
         }).catch(error => {
              console.error(error);
         })
    }, [])

  return (
    <div className="container">
      <h2>List of Persons</h2>
      <table className="table table-striped"> 
        <thead>
          <tr>
            <th>Person Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(person => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.email}</td>
              <td>{person.phoneNumber}</td>
              <td>{person.description}</td>
              <td className="text-end">{person.amount}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPersonComponent;