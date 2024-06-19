import React from 'react';
import './Table.css';

const data = [
  { id: 1, firstName: 'chloe', lastName: 'Adam', userName: 'chloe_ad', phoneNumber: '01548637915', address: 'New York City, USA', email: 'chloe_a2003@gmail.com' },
  { id: 2, firstName: 'chloe', lastName: 'Adam', userName: 'chloe_ad', phoneNumber: '01548637915', address: 'New York City, USA', email: 'chloe_a2003@gmail.com' },
  { id: 3, firstName: 'chloe', lastName: 'Adam', userName: 'chloe_ad', phoneNumber: '01548637915', address: 'New York City, USA', email: 'chloe_a2003@gmail.com' },
  { id: 4, firstName: 'chloe', lastName: 'Adam', userName: 'chloe_ad', phoneNumber: '01548637915', address: 'New York City, USA', email: 'chloe_a2003@gmail.com' },
  { id: 5, firstName: 'chloe', lastName: 'Adam', userName: 'chloe_ad', phoneNumber: '01548637915', address: 'New York City, USA', email: 'chloe_a2003@gmail.com' },
  { id: 6, firstName: 'chloe', lastName: 'Adam', userName: 'chloe_ad', phoneNumber: '01548637915', address: 'New York City, USA', email: 'chloe_a2003@gmail.com' },
  { id: 7, firstName: 'chloe', lastName: 'Adam', userName: 'chloe_ad', phoneNumber: '01548637915', address: 'New York City, USA', email: 'chloe_a2003@gmail.com' },
  { id: 8, firstName: 'chloe', lastName: 'Adam', userName: 'chloe_ad', phoneNumber: '01548637915', address: 'New York City, USA', email: 'chloe_a2003@gmail.com' },
  { id: 9, firstName: 'chloe', lastName: 'Adam', userName: 'chloe_ad', phoneNumber: '01548637915', address: 'New York City, USA', email: 'chloe_a2003@gmail.com' },
  { id: 10, firstName: 'chloe', lastName: 'Adam', userName: 'chloe_ad', phoneNumber: '01548637915', address: 'New York City, USA', email: 'chloe_a2003@gmail.com' },
  { id: 11, firstName: 'chloe', lastName: 'Adam', userName: 'chloe_ad', phoneNumber: '01548637915', address: 'New York City, USA', email: 'chloe_a2003@gmail.com' },
  { id: 12, firstName: 'chloe', lastName: 'Adam', userName: 'chloe_ad', phoneNumber: '01548637915', address: 'New York City, USA', email: 'chloe_a2003@gmail.com' },
  { id: 13, firstName: 'chloe', lastName: 'Adam', userName: 'chloe_ad', phoneNumber: '01548637915', address: 'New York City, USA', email: 'chloe_a2003@gmail.com' },
  { id: 14, firstName: 'chloe', lastName: 'Adam', userName: 'chloe_ad', phoneNumber: '01548637915', address: 'New York City, USA', email: 'chloe_a2003@gmail.com' },
  { id: 15, firstName: 'chloe', lastName: 'Adam', userName: 'chloe_ad', phoneNumber: '01548637915', address: 'New York City, USA', email: 'chloe_a2003@gmail.com' },
  { id: 16, firstName: 'chloe', lastName: 'Adam', userName: 'chloe_ad', phoneNumber: '01548637915', address: 'New York City, USA', email: 'chloe_a2003@gmail.com' },
  { id: 17, firstName: 'chloe', lastName: 'Adam', userName: 'chloe_ad', phoneNumber: '01548637915', address: 'New York City, USA', email: 'chloe_a2003@gmail.com' },
  { id: 18, firstName: 'chloe', lastName: 'Adam', userName: 'chloe_ad', phoneNumber: '01548637915', address: 'New York City, USA', email: 'chloe_a2003@gmail.com' },
  { id: 19, firstName: 'chloe', lastName: 'Adam', userName: 'chloe_ad', phoneNumber: '01548637915', address: 'New York City, USA', email: 'chloe_a2003@gmail.com' },
  { id: 20, firstName: 'chloe', lastName: 'Adam', userName: 'chloe_ad', phoneNumber: '01548637915', address: 'New York City, USA', email: 'chloe_a2003@gmail.com' },
  { id: 21, firstName: 'chloe', lastName: 'Adam', userName: 'chloe_ad', phoneNumber: '01548637915', address: 'New York City, USA', email: 'chloe_a2003@gmail.com' },
  { id: 22, firstName: 'chloe', lastName: 'Adam', userName: 'chloe_ad', phoneNumber: '01548637915', address: 'New York City, USA', email: 'chloe_a2003@gmail.com' },
];

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.userName}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.address}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;