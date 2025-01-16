import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";

function CustomerEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true); // Start with loading state
  const [inputErrorList, setInputErrorList] = useState({});
  const [customer, setCustomer] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: ""
  }); // Set an initial empty object for `customer`

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/customers/${id}/edit`) // Use GET instead of PUT for fetching data
      .then((res) => {
        setCustomer(res.data.customer);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching customer data:", error);
        setLoading(false);
      });
  }, [id]);

  const handleInput = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const updateCustomer = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      firstname: customer.firstname,
      lastname: customer.lastname,
      email: customer.email,
      phone: customer.phone
    };

    axios
      .put(`http://127.0.0.1:8000/api/customers/${id}/edit`, data) // Use PUT for updating data
      .then((res) => {
        alert(res.data.message);
        navigate("/customer");
        setLoading(false);
        setInputErrorList({});
      })
      .catch((error) => {
        if (error.response.status === 422) {
          setInputErrorList(error.response.data.errors);
          setLoading(false)
        }
        if (error.response.status === 404) {
          setInputErrorList(error.response.data.message);
          setLoading(false)
        }if (error.response.status === 500) {
          alert(error.response.data.errors);
        }
        setLoading(false);
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>
                Edit Customer
                <Link to="/customer" className="btn btn-danger float-end">
                  Back
                </Link>
              </h4>
            </div>
            <div className="card-body">
              <form onSubmit={updateCustomer}>
                <div className="mb-3">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    value={customer.firstname || ""}
                    onChange={handleInput}
                    className="form-control"
                  />
                  {inputErrorList.firstname && (
                    <span className="text-danger">{inputErrorList.firstname[0]}</span>
                  )}
                </div>
                <div className="mb-3">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    value={customer.lastname || ""}
                    onChange={handleInput}
                    className="form-control"
                  />
                  {inputErrorList.lastname && (
                    <span className="text-danger">{inputErrorList.lastname[0]}</span>
                  )}
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    value={customer.email || ""}
                    onChange={handleInput}
                    className="form-control"
                  />
                  {inputErrorList.email && (
                    <span className="text-danger">{inputErrorList.email[0]}</span>
                  )}
                </div>
                <div className="mb-3">
                  <label>Contact Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={customer.phone || ""}
                    onChange={handleInput}
                    className="form-control"
                  />
                  {inputErrorList.phone && (
                    <span className="text-danger">{inputErrorList.phone[0]}</span>
                  )}
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary">
                    Update Customer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerEdit;
