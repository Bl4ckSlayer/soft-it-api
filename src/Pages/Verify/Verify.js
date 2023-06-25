import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const handleVerify = (data) => {
    console.log(data);
    const myHeaders = new Headers();
    myHeaders.append("X-Requested-With", "XMLHttpRequest");
    const formData = new FormData();
    formData.append("phone", data.phone);
    formData.append("otp", data.otp);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow",
    };

    fetch("https://dev.funnelliner.com/api/v1/auth/verify", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          toast(result.message);
        }
        console.log(result);
        navigate("/login");
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div>
      <div className="h-[500px] flex justify-center  ">
        <div className="w-96 p-7">
          <h2 className="text-xl text-center">Login</h2>
          <form onSubmit={handleSubmit(handleVerify)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                {...register("phone")}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>{" "}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">OTP</span>
              </label>
              <input
                type="text"
                {...register("otp")}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.otp && (
                <p className="text-red-500">{errors.otp.message}</p>
              )}
            </div>{" "}
            <input
              className="btn btn-accent w-full mt-4"
              value="Verify"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verify;
