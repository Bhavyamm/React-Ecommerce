import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";
import "../css/ProductCard.css";

const ProductCard = ({ product }) => {
  const { quantity } = useContext(GlobalContext);

  const [currentQuantity, setCurrentQuantity] = quantity;
  let actualPrice;

  product.discount !== "0%" &&
    (actualPrice = (product.price * product.discount.split("%")[0]) / 100);
  return (
    <div>
      <div className="card mb-4 mt-4 p-2 main-card" style={{}}>
        <img
          src={product.imageURL}
          className="card-img-top ml-auto mr-auto"
          style={{
            height: "300px",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />

        <div className="card-body">
          <Link
            to={`/product/${product.productId}`}
            style={{ textDecoration: "none" }}
          >
            <h5
              className="card-title"
              style={{
                overflowY: "hidden",
                textTransform: "uppercase",
                position: "absolute",
                top: "70%",
                color: "black",
              }}
            >
              {product.name}
            </h5>
          </Link>
          <br />
          {product.discount > 0 ? (
            <div>
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
            <span
              className="card-text"
              style={{
                position: "absolute",
                fontSize: "1.5rem",
                fontWeight: "bold",
                bottom: "2%",
              }}
            >
              &#8377;{product.price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
