import React, { useEffect } from "react";
import CartCard from "./CartCard";

const Favorites = () => {
  let favData;
  useEffect(() => {
    favData = JSON.parse(localStorage.getItem("favoriteList"));
  }, []);

  return (
    <div className="justify-content-center ml-2 mr-2">
      <h1 className="display-4 text-center mb-3">Favorites</h1>
      {favData !== [] && (
        <>
          <div className="row">
            {favData?.map(
              (product) =>
                product.isFav && (
                  <div className="col col-12 col-md-6 col-xl-3 col-lg-4">
                    <CartCard key={product.productId} product={product} />
                  </div>
                )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Favorites;
