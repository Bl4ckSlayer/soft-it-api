import React, { useContext } from "react";
import DataContext from "../../../context/DataContext";
import { useForm } from "react-hook-form";

const CreateProducts = () => {
  const { allData, setAllData } = useContext(DataContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const createPro = (data) => {
    console.log(data);
    var myHeaders = new Headers();
    myHeaders.append("shop-id", "740894");
    myHeaders.append("X-Requested-With", "XMLHttpRequest");
    myHeaders.append("id", "40");
    myHeaders.append("authorization", allData?.token);
    const formdata = new FormData();
    formdata.append("category_name", data.category_name);
    formdata.append("product_name", data.product_name);
    formdata.append("price", parseInt(data.price));
    formdata.append("discount", parseInt(data.discount));
    formdata.append("main_image", data.main_image[0], "file");
    formdata.append("product_code", data.product_code);
    formdata.append("product_qty", parseInt(data.product_qty));
    formdata.append("status", parseInt(data.status));
    formdata.append("delivery_charge", "free");
    console.log(formdata);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    console.log(formdata);
    fetch(
      "https://dev.funnelliner.com/api/v1/client/products",

      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result, formdata))
      .catch((error) => console.log("error", error));
  };
  return (
    <div>
      <form className="" onSubmit={handleSubmit(createPro)}>
        <div className="  sm:rounded-md">
          <div className=" px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="label" htmlFor="category_name">
                  <span className="label-text font-bold">
                    category_name <span className="text-red-500">* </span>
                  </span>
                </label>
                <input
                  type="text"
                  {...register("category_name")}
                  placeholder="category_name"
                  className="input border-primary bg-white w-full "
                />{" "}
                {errors.category_name && (
                  <p className="  text-red-600 font-semibold mt-4 text-start">
                    {errors.category_name?.message}
                  </p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="label" htmlFor="product_name">
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
                <label className="label" htmlFor="price">
                  <span className="label-text font-bold">
                    price <span className="text-red-500">* </span>
                  </span>
                </label>
                <input
                  type="number"
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
                <label className="label" htmlFor="discount">
                  <span className="label-text font-bold">
                    discount <span className="text-red-500">* </span>
                  </span>
                </label>
                <input
                  type="number"
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
                <label className="label" htmlFor="main_image">
                  <span className="label-text font-bold">
                    discount <span className="text-red-500">* </span>
                  </span>
                </label>
                <input
                  type="file"
                  {...register("main_image")}
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
                <label className="label" htmlFor="product_code">
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
                <label className="label" htmlFor=" product_qty">
                  <span className="label-text font-bold">
                    product_qty <span className="text-red-500">* </span>
                  </span>
                </label>
                <input
                  type="number"
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
                <label className="label" htmlFor="status">
                  <span className="label-text font-bold">
                    status <span className="text-red-500">* </span>
                  </span>
                </label>
                <select
                  className={
                    "rounded-xl input  w-full border-primary bg-white border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " +
                    (errors.status ? " border-red-500" : "")
                  }
                  id="status"
                  name="status"
                  {...register("status", { required: true })}
                >
                  <option value="">Select </option>
                  <option value="0">True</option>
                  <option value="1">False</option>
                </select>

                {errors.status && (
                  <p className="  text-red-600 font-semibold mt-4 text-start">
                    {errors.status?.message}
                  </p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="label" htmlFor="delivery_charge">
                  <span className="label-text font-bold">
                    delivery_charge <span className="text-red-500">* </span>
                  </span>
                </label>
                <select
                  className={
                    "rounded-xl input  w-full border-primary bg-white border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " +
                    (errors.delivery_charge ? " border-red-500" : "")
                  }
                  id="delivery_charge"
                  name="delivery_charge"
                  {...register("delivery_charge", { required: true })}
                >
                  <option value="">Select </option>
                  <option value="free">Free</option>
                  <option value="paid">paid</option>
                </select>

                {errors.delivery_charge && (
                  <p className="  text-red-600 font-semibold mt-4 text-start">
                    {errors.delivery_charge?.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="p-4 ">
            <input
              type="submit"
              value="Create"
              className="btn w-full hover:bg-primary  text-white btn-secondary "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProducts;
