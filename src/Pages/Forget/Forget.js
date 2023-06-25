import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Forget = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const handleVerify = (data) => {
    console.log(data);
    const myHeaders = new Headers();
    myHeaders.append("X-Requested-With", "XMLHttpRequest");

    const formData = new FormData();
    formData.append("phone", data?.phone);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow",
    };

    fetch(
      "https://dev.funnelliner.com/api/v1/client/forget-password",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          setPhone(data.phone);
          toast.success(result.message);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const handleOTP = (data) => {
    console.log(data);
    const myHeaders = new Headers();
    myHeaders.append("X-Requested-With", "XMLHttpRequest");

    const formData = new FormData();
    formData.append("phone", phone);
    formData.append("otp", data.otp);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow",
    };

    fetch(
      "https://dev.funnelliner.com/api/v1/client/otp-verify",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          console.log(result);
          toast.success(result.message);

          navigate("/update");
        } else {
          toast.error(result.message);
        }
      })
      .catch((error) => {
        toast(error.message);
        console.log("error", error);
      });
  };
  return (
    <div>
      <div className="h-[500px] flex justify-center ">
        <div className="w-96 p-7">
          <h2 className="text-xl text-center">Confirmation</h2>
          <form className="flex gap-4" onSubmit={handleSubmit(handleVerify)}>
            <div className=" form-control w-full max-w-xs">
              <label className="label">
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
            </div>
            <input
              className="btn btn-accent mt-9 "
              value="Send Code"
              type="submit"
            />
          </form>
          <form onSubmit={handleSubmit(handleOTP)}>
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

export default Forget;
