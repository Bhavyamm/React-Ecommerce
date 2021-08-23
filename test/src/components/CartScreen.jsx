import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import CartCard from "./CartCard";
import ProductCard from "./ProductCard";
import { useHistory } from "react-router";

const CartScreen = () => {
  const { cartItems } = useContext(GlobalContext);
  const history = useHistory();
  const [cart, setCart] = cartItems;

  const cartData = JSON.parse(localStorage.getItem("cart"));

  console.log(cartData, "cart data");

  const payment = (e) => {
    e.preventDefault();

    history.push("/place-order");
  };

  return (
    <div className="justify-content-center ml-2 mr-2">
      <h1 className="display-4 text-center mb-3">Cart Summary</h1>
      {cartData !== [] && (
        <>
          <div className="row">
            {cartData?.map((product) => (
              <div className="col col-12 col-md-6 col-xl-3 col-lg-4">
                <CartCard key={product.productId} product={product} />
              </div>
            ))}
          </div>

          <button
            onClick={payment}
            type="button"
            className="btn btn-lg btn-dark cart mt-4 go-back"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default CartScreen;
