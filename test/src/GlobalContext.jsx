import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [cart, setCart] = useState([]);

  const [currentQuantity, setCurrentQuantity] = useState(0);

  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
  });

  const [fav, setFav] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        cartItems: [cart, setCart],
        quantity: [currentQuantity, setCurrentQuantity],
        user: [details, setDetails],
        favorite: [fav, setFav]
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
