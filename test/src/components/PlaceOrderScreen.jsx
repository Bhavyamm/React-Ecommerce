import React, { useContext, useState } from "react";
import "../css/PlaceOrderScreen.css";
import { GlobalContext } from "../GlobalContext";


import { useHistory } from "react-router";

const PlaceOrderScreen = () => {
  const {user} = useContext(GlobalContext);

  const [details, setDetails] = user;

  const history = useHistory();

  const handleChange = (e) => {
    setDetails((val) => {
      return {
        ...val,
        [e.target.name]: e.target.value,
      };
    });
  };

  console.log(details);

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push("/order-placed");
  };

  return (
    <div className="container mt-4 main-form p-3">
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="fname">First Name</label>
          <input
            type="text"
            class="form-control"
            id="fname"
            name="fname"
            value={details.fname}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="lname">Last Name</label>
          <input
            type="text"
            class="form-control"
            id="lname"
            name="lname"
            value={details.lname}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            value={details.email}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input
            type="text"
            class="form-control"
            id="phone"
            name="phone"
            value={details.phone}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="address">Address</label>
          <input
            type="textarea"
            class="form-control"
            id="address"
            name="address"
            value={details.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit" class="btn btn-info">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default PlaceOrderScreen;
