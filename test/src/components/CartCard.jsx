import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";
import "../css/ProductCard.css";

const CartCard = ({ product }) => {
  const { quantity } = useContext(GlobalContext);

  const [currentQuantity, setCurrentQuantity] = quantity;
  let actualPrice;

  // product?.discount !== "0%" &&
  //   (actualPrice = (product?.price * product?.discount.split("%")[0]) / 100);
  return (
    <div>
      <div className="card mb-4 mt-4 p-2 main-card">
        <img
          src={product.imageURL}
          className="card-img-top ml-auto mr-auto cart-card-image"
        />

        <div className="card-body">
          <Link
            to={`/product/${product.productId}`}
            className="cart-card-name-link"
          >
            <h5 className="card-title cart-card-name">{product.name}</h5>
          </Link>
          <br />
          <div className="row">
            {product.discount !== "0%" ? (
              <div className="col">
                <span
                  className="card-text"
                  style={{ textDecoration: "line-through" }}
                >
                  &#8377;{product.discount}
                </span>
                <span
                  className="card-text"
                  style={{ fontSize: "2rem", fontWeight: "bold" }}
                >
                  {" "}
                  &#8377;{product.price}
                </span>
              </div>
            ) : (
              <span className="card-text col">&#8377;{product.price}</span>
            )}

            <div className="quantity-selector-div col">
              <button
                className="btn btn-light btn mr-2"
                onClick={() => setCurrentQuantity(currentQuantity - 1)}
                disabled={currentQuantity <= 0}
              >
                -
              </button>
              <span>{product.quantity}</span>
              <button
                className="btn btn-light btn ml-2"
                onClick={() => setCurrentQuantity(currentQuantity + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
