import React, { createContext, useState } from "react";
export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [data, setData] = useState();
  return (
    <ProductContext.Provider value={{ data, setData }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
