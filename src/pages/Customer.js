import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import Loading from '../components/Loading';

function Customer(){

  const [loading, setLoading]  = useState(true);
  const [customer, setCustomer]  = useState([]);

  useEffect(()=>{

    axios.get(`http://127.0.0.1:8000/api/customers/`).then(res=>{
      console.log(res)
      setCustomer(res.data.customer);
      setLoading(false);
    })

  }, [])
  

  const deleteCustomer = (e, id) => {
    e.preventDefault();
  
    const thisClicked = e.currentTarget; // Correctly access currentTarget
    thisClicked.innerText = "Deleting....";
  
    axios
      .delete(`http://127.0.0.1:8000/api/customers/${id}/delete`)
      .then((res) => {
        alert(res.data.message);
        setCustomer((prevCustomer) =>
          prevCustomer.filter((customer) => customer.id !== id)
        );
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 404) {
            alert(error.response.data.message);
            thisClicked.innerText = "Delete";
          } else if (error.response.status === 500) {
            alert("Server error occurred");
            thisClicked.innerText = "Delete";
          }
        }
      });
  };
  

  if(loading){
    return (
      <Loading/>
    )
  }
  var CustomerDetails = "";

  CustomerDetails = customer.map((item, index)=>{
    return (
      <tr key={index}>
          <td>{item.id}</td>
          <td>{item.firstname}</td>
          <td>{item.lastname}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>
            <Link to={`/customer/${item.id}/view`} className='btn btn-success'>View</Link>
          </td>
          <td>
            <Link to={`/customer/${item.id}/edit`} className='btn btn-success'>Edit</Link>
          </td>
          <td>
            <button type='button' onClick={(e)=> deleteCustomer(e, item.id)} className='btn btn-danger'>Delete</button>
          </td>
      </tr>
    )
  });



 return (
  <div className="container mt-5">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4>Customers List
                <Link to= "/customer/create" className='btn btn-primary float-end'>Add Customer</Link>
            </h4>
          <div className='card-body'>
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {CustomerDetails}
                </tbody>
              </table>
          </div>
          </div>
        </div>

      </div>
    </div>

  </div>
 )
}

export default Customer;