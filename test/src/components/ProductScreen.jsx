import React, { useContext, useState } from "react";
import data from "../product_lists.json";
import { useParams } from "react-router";
import NumericInput from "react-numeric-input";
import { GlobalContext } from "../GlobalContext";
import { useHistory } from "react-router";

const ProductScreen = (match) => {
  const { id } = useParams();

  const history = useHistory();

  const prod = data.filter((el) => el.productId === id);

  console.log(prod, "product");

  const { cartItems, quantity, favorite } = useContext(GlobalContext);

  const [cart, setCart] = cartItems;

  const [fav, setFav] = favorite;

  const [favList, setFavList] = useState([]);

  const [currentQuantity, setCurrentQuantity] = quantity;

  const addToCartHandler = async (e) => {
    e.preventDefault();

    await setCart([
      ...cart,
      {
        name: prod[0].name,
        productId: prod[0].productId,
        price: prod[0].price,
        imageURL: prod[0].imageURL,
        quantity: currentQuantity,
      },
    ]);

    console.log(cart, "cart");

    localStorage.setItem("cart", JSON.stringify(cart));

    history.push("/cart");
  };

  let actualPrice;

  prod[0].discount !== "0%" &&
    (actualPrice = (prod[0].price * prod[0].discount.split("%")[0]) / 100);

  const update = async () => {
    setFav(!fav);
    await setFavList([
      ...favList,
      {
        isFav: fav,
        name: prod[0].name,
        productId: prod[0].productId,
        price: prod[0].price,
        imageURL: prod[0].imageURL,
      },
    ]);
    localStorage.setItem("favoriteList", JSON.stringify(favList));
  };

  return (
    <div className="row ">
      <div className="container col-md-6 col-12 mb-4  ">
        <div className="col " style={{}}>
          <div className="row">
            {" "}
            <img
              src={prod[0].imageURL}
              style={{ width: "auto", height: "auto", objectFit: "contain" }}
              className="mb-2 ml-auto mr-auto"
              style={{
                marginTop: "10%",
              }}
            />
          </div>
        </div>
      </div>
      <div
        className="col-md-6 col-12"
        style={{
          marginTop: "10%",
        }}
      >
        <div className="container">
          <h3
            className="product-screen-heading"
            style={{ fontSize: "2rem", textTransform: "uppercase" }}
          >
            {prod[0].name}
          </h3>
          <h5
            className="product-screen-heading"
            style={{ fontSize: "2rem", marginTop: "2%" }}
          >
            Price:{" "}
            {prod[0].discount > "0%" ? (
              <span>
                <span
                  style={{
                    textDecoration: "line-through",
                    fontSize: "1.4rem",
                  }}
                >
                  &#8377;{prod[0].price}
                </span>
                <span
                  className="ml-2"
                  style={{ fontSize: "2.3rem", fontWeight: "bold" }}
                >
                  &#8377;{actualPrice}
                </span>
              </span>
            ) : (
              <span>&#8377;{prod[0].price}</span>
            )}
          </h5>
          <div className="row mt-4">
            <div className="col-4">
              <label for="quantity">
                {" "}
                <h4>Quantity: </h4>
              </label>
            </div>
            <div className="quantity-selector-div">
              <button
                className="btn btn-light btn mr-2"
                onClick={() => setCurrentQuantity(currentQuantity - 1)}
                disabled={currentQuantity <= 0}
              >
                -
              </button>
              <span>{currentQuantity}</span>
              <button
                className="btn btn-light btn ml-2"
                onClick={() => setCurrentQuantity(currentQuantity + 1)}
                // disabled={!sizeSelect || currentQuantity >= sizeCount}
              >
                +
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                onClick={addToCartHandler}
                type="button"
                className="btn btn-lg btn-dark cart mt-4 go-back"
              >
                Add to Cart
              </button>
            </div>
            <div className="col mt-4">
              {fav ? (
                <i class="fas fa-heart fa-2x" onClick={update} />
              ) : (
                <i class="far fa-heart fa-2x" onClick={update} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
