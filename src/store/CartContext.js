import React, { useState, createContext } from "react";


const CartContext = createContext({
  items: [],
  addItem: (item) => {},
});

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const contextValue = {
    items,
    addItem,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
