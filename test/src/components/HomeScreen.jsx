import React from "react";
import data from "../product_lists.json";
import ProductCard from "./ProductCard";

const HomeScreen = () => {
  return (
    <div className="justify-content-center ml-2 mr-2">
      <div className="row">
        {data.map((product) => (
          <div className="col col-12 col-md-6 col-xl-3 col-lg-4">
            <ProductCard key={product.productId} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
