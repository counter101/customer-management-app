import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

function CustomerView() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true); // Start with loading state
  const [customer, setCustomer] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: ""
  }); // Set an initial empty object for `customer`

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/customers/${id}/edit`) // Fetch customer data
      .then((res) => {
        setCustomer(res.data.customer);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching customer data:", error);
        setLoading(false);
      });
  }, [id]);

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
                View Customer
                <Link to="/customer" className="btn btn-danger float-end">
                  Back
                </Link>
              </h4>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    value={customer.firstname || ""}
                    readOnly
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    value={customer.lastname || ""}
                    readOnly
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    value={customer.email || ""}
                    readOnly
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label>Contact Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={customer.phone || ""}
                    readOnly
                    className="form-control"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerView;
