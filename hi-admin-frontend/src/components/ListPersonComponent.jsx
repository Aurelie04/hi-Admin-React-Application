import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { listPersons } from '../services/PersonService'
import { useNavigate } from 'react-router-dom';

const ListPersonComponent = () => {
  
    const [persons, setPersons] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
         listPersons().then((response) => {
            setPersons(response.data);
         }).catch(error => {
              console.error(error);
         })
    }, [])

    function addNewPerson(){
      navigator('/add-person')
      
    }

    function updatePerson(id){
        navigator(`/edit-person/${id}`)
    }
 
    return (
    <div className="container">
      <h2>List of Persons</h2>
      <button className='btn btn-primary mb-2' onClick={addNewPerson}>Add persons</button>
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
            <th>ActionS</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(person => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.email}</td>
              <td>{person.phone_number}</td>
              <td>{person.description}</td>
              <td>{person.amount}</td>
              <td className="text-end">{person.amount}</td> 
              <td>
                   <button className='btn btn-info' onClick={() => updatePerson(person.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPersonComponent;