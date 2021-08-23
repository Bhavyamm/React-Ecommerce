import React, { useEffect } from "react";
import "../css/OrderPlacedScreen.css";

const OrderPlacedScreen = () => {
  useEffect(() => {
    localStorage.setItem("cart", []);
  }, []);

  return (
    <div style={{ marginTop: "14%" }}>
      <i
        className="fas fa-check-circle fa-5x"
        style={{ marginLeft: "46%" }}
      ></i>
      <h1 className="display-3 text-center">Order Successfully Placed</h1>
    </div>
  );
};

export default OrderPlacedScreen;
