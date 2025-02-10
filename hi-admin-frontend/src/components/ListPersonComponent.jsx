import React from 'react'

const ListPersonComponent = () => {
 
    const dummyData = [
        {
            "id":1,
            "firstName": "Aurelie",
            "lastName": "Nana",
            "email" : "aurelie@gmail.com",
            "phoneNumber" : "067563587",
            "description" : "Rent",
            "amount" : 4500.00
            
        },
        {
            "id":2,
            "firstName": "Gabrielle",
            "lastName": "Nana",
            "email" : "gabi@gmail.com",
            "phoneNumber" : "0609854437563587",
            "description" : "Rent",
            "amount" : 4500.00
            
        },

        {
            "id":3,
            "firstName": "Jojo",
            "lastName": "Kwik",
            "email" : "kiki@gmail.com",
            "phoneNumber" : "0765345678",
            "description" : "Rent",
            "amount" : 4500.00
            
        }

    ]
 
    return (

    <div>
        <h2>List of Persons</h2>
        <table>
            <thead>
                <tr>
                    <th>Person Id</th>
                    <th>Person First Name</th>
                    <th>Person Last Name</th>
                    <th>Person Email</th>
                    <th>Person Phone number</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                 {
                    dummyData.map(person =>
                        <tr key={person.id}>
                             <td>{person.firstName}</td>
                             <td>{person.lastName}</td>
                             <td>{person.email}</td>
                             <td>{person.phoneNumber}</td>
                             <td>{person.description}</td>
                             <td>{person.amount}</td>
                             
                             
                        </tr>
                    )
                 }
                
            </tbody>
        </table>
    </div>
  )
}

export default ListPersonComponent