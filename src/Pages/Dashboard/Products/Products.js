import React, { useContext, useEffect, useState } from "react";
import DataContext from "../../../context/DataContext";
import ProductContext from "../../../context/ProductContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Products = () => {
  const { data, setData } = useContext(ProductContext);
  const { allData, setAllData } = useContext(DataContext);

  const navigate = useNavigate();
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("shop-id", allData?.data?.shop_id);
    myHeaders.append("id", allData?.data?.id);
    myHeaders.append("X-Requested-With", "XMLHttpRequest");
    myHeaders.append("authorization", allData?.token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://dev.funnelliner.com/api/v1/client/products", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
        console.log(result.data);
        toast.success(`total ${result?.data?.length} data found `);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const productDetail = (id) => {
    navigate(`/dashboard/products/${id}`);
  };
  const update = (id) => {
    navigate(`/dashboard/update/${id}`);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3">
      {data?.length ? (
        data?.map((da) => (
          <div className="m-12">
            <div className="card  h-full bg-base-100 shadow-xl">
              <figure className="px-4 pt-6">
                <img src={da.main_image.id} alt="img" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Product name:{da.product_name}</h2>
                <h2 className="card-title">category_id:{da.category_id}</h2>

                <h2 className="card-title">Price:{da.price}</h2>
                <h2 className="card-title">Discount:{da.discount}</h2>
                <h2 className="card-title">Product Code: {da.product_code}</h2>
                <h2 className="card-title">Product Qty:{da.product_qty}</h2>
                <h2 className="card-title">Method :{da._method}</h2>

                <h2 className="card-title">Slug :{da.slug}</h2>
                <p>Description: {da.short_description} </p>

                <div className=" mx-auto grid grid-cols1 gap-4 ">
                  <button
                    className="btn  btn-primary"
                    onClick={() => {
                      productDetail(da.id);
                    }}
                  >
                    Details
                  </button>
                  <button
                    className="btn  btn-primary"
                    onClick={() => {
                      update(da.category_id);
                    }}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          <h1 className="font-bold text-xl text-red-600">
            {" "}
            No new Products to Add Products go to create Products
          </h1>
        </>
      )}
    </div>
  );
};

export default Products;
