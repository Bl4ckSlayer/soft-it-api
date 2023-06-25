import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataContext from "../../../context/DataContext";
import { useForm } from "react-hook-form";

const UpdateProduct = () => {
  const { allData, setAllData } = useContext(DataContext);
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const updatePro = (data) => {
    console.log(data, data.main_image[0]);
    const myHeaders = new Headers();
    myHeaders.append("shop-id", id);
    myHeaders.append("X-Requested-With", "XMLHttpRequest");
    myHeaders.append("authorization", allData?.token);
    const formdata = new FormData();

    formdata.append("category_id", data.category_id);
    formdata.append("product_name", data.product_name);
    formdata.append("price", data.price);
    formdata.append("discount", data.discount);
    formdata.append("main_image", data.main_image[0], "file");
    formdata.append("product_code", data.product_code);
    formdata.append("product_qty", data.product_qty);
    formdata.append("_method", data._method);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://dev.funnelliner.com/api/v1/client/products/7",
      { mode: "cors" },

      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result, formdata))
      .catch((error) => console.log("error", error));
  };
  return (
    <div>
      <form className="" onSubmit={handleSubmit(updatePro)}>
        <div className="  sm:rounded-md">
          <div className=" px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="label" htmlFor="first-name">
                  <span className="label-text font-bold">
                    Category_id <span className="text-red-500">* </span>
                  </span>
                </label>
                <input
                  type="text"
                  {...register("category_id")}
                  placeholder="category_id"
                  className="input border-primary bg-white w-full "
                />{" "}
                {errors.category_id && (
                  <p className="  text-red-600 font-semibold mt-4 text-start">
                    {errors.category_id?.message}
                  </p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="label" htmlFor="first-name">
                  <span className="label-text font-bold">
                    product_name <span className="text-red-500">* </span>
                  </span>
                </label>
                <input
                  type="text"
                  {...register("product_name")}
                  placeholder="product_name"
                  className="input border-primary bg-white w-full "
                />{" "}
                {errors.product_name && (
                  <p className="  text-red-600 font-semibold mt-4 text-start">
                    {errors.product_name?.message}
                  </p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="label" htmlFor="first-name">
                  <span className="label-text font-bold">
                    price <span className="text-red-500">* </span>
                  </span>
                </label>
                <input
                  type="text"
                  {...register("price")}
                  placeholder="price"
                  className="input border-primary bg-white w-full "
                />{" "}
                {errors.price && (
                  <p className="  text-red-600 font-semibold mt-4 text-start">
                    {errors.price?.message}
                  </p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="label" htmlFor="first-name">
                  <span className="label-text font-bold">
                    discount <span className="text-red-500">* </span>
                  </span>
                </label>
                <input
                  type="text"
                  {...register("discount")}
                  placeholder="discount"
                  className="input border-primary bg-white w-full "
                />{" "}
                {errors.discount && (
                  <p className="  text-red-600 font-semibold mt-4 text-start">
                    {errors.discount?.message}
                  </p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="label" htmlFor="first-name">
                  <span className="label-text font-bold">
                    Image <span className="text-red-500">* </span>
                  </span>
                </label>
                <input
                  type="file"
                  {...register("main_image", {
                    required: "its Required",
                  })}
                  placeholder="main_image"
                  className="file-input w-full  "
                />{" "}
                {errors.main_image && (
                  <p className="  text-red-600 font-semibold mt-4 text-start">
                    {errors.main_image?.message}
                  </p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="label" htmlFor="first-name">
                  <span className="label-text font-bold">
                    product_code <span className="text-red-500">* </span>
                  </span>
                </label>
                <input
                  type="text"
                  {...register("product_code")}
                  placeholder="product_code"
                  className="input border-primary bg-white w-full "
                />{" "}
                {errors.product_code && (
                  <p className="  text-red-600 font-semibold mt-4 text-start">
                    {errors.product_code?.message}
                  </p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="label" htmlFor="first-name">
                  <span className="label-text font-bold">
                    product_qty <span className="text-red-500">* </span>
                  </span>
                </label>
                <input
                  type="text"
                  {...register("product_qty")}
                  placeholder="product_qty"
                  className="input border-primary bg-white w-full "
                />{" "}
                {errors.product_qty && (
                  <p className="  text-red-600 font-semibold mt-4 text-start">
                    {errors.product_qty?.message}
                  </p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="label" htmlFor="first-name">
                  <span className="label-text font-bold">
                    _method <span className="text-red-500">* </span>
                  </span>
                </label>
                <input
                  type="text"
                  {...register("_method")}
                  placeholder="_method"
                  className="input border-primary bg-white w-full "
                />{" "}
                {errors._method && (
                  <p className="  text-red-600 font-semibold mt-4 text-start">
                    {errors._method?.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="p-4 ">
            <input
              type="submit"
              value="Update"
              className="btn w-full hover:bg-primary  text-white btn-secondary "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
