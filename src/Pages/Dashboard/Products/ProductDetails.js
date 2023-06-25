import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../../../context/DataContext";
import ProductContext from "../../../context/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { data, setData } = useContext(ProductContext);
  const { allData, setAllData } = useContext(DataContext);
  console.log(allData, product, data);
  useEffect(() => {
    var myHeaders = new Headers();

    myHeaders.append("X-Requested-With", "XMLHttpRequest");
    myHeaders.append("authorization", allData?.token);
    myHeaders.append("shop-id", id);
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://dev.funnelliner.com/api/v1/client/products/4`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setProduct(result);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  console.log(id);

  return (
    <div>
      <h1 className="font-bold text-xl text-red-600"> {product?.errMgs}</h1>
      <h1 className="font-bold text-xl text-red-600"> {product?.length}</h1>
      <h1 className="font-bold text-xl "> {product?.message}</h1>
    </div>
  );
};

export default ProductDetails;
