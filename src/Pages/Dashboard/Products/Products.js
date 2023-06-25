import React, { useContext, useEffect, useState } from "react";
import DataContext from "../../../context/DataContext";
import ProductContext from "../../../context/ProductContext";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { data, setData } = useContext(ProductContext);
  const { allData, setAllData } = useContext(DataContext);
  console.log(data);
  const navigate = useNavigate();
  const productDetail = (id) => {
    navigate(`/dashboard/products/${id}`);
  };
  const update = (id) => {
    navigate(`/dashboard/update/${id}`);
  };
  return (
    <div>
      {data?.map((da) => (
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

              <div className="w-1/2 mx-auto ">
                <button
                  className="btn mr-4 btn-primary"
                  onClick={() => {
                    productDetail(da.shop_id);
                  }}
                >
                  Details
                </button>
                <button
                  className="btn  btn-primary"
                  onClick={() => {
                    update(da.shop_id);
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
