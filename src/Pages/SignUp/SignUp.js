import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
// import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

// import { AuthContext } from "../../context/AuthProvider";
// import useToken from "../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [signUpError, setSignUPError] = useState("");
  const formData = new FormData();
  const navigate = useNavigate();
  function sendOtp(data) {
    const myHeaders = new Headers();
    myHeaders.append("X-Requested-With", "XMLHttpRequest");

    const formData = new FormData();
    formData.append("phone", data);

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
          navigate("/verify");
          toast.success(result.message);
        }
      })
      .catch((error) => console.log("error", error));
  }
  const handleSignUp = (data) => {
    console.log(data);
    formData.append("email", data.email);
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("password", data.password);
    formData.append("password_confirmation", data.password_confirmation);
    formData.append("shop_name", data.shop_name);

    const requestOptions = {
      method: "POST",
      headers: { "X-Requested-With": "XMLHttpRequest" },
      body: formData,
      redirect: "follow",
    };
    fetch(
      "https://dev.funnelliner.com/api/v1/signup",

      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          console.log(result);
          sendOtp(data.phone);
          toast.success("User Created Successfully.");
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              {...register("phone", {
                required: "phone is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              {...register("password_confirmation", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
                validate: (val) => {
                  if (watch("password") !== val) {
                    return "Your passwords do no match";
                  }
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password_confirmation && (
              <p className="text-red-500">
                {errors.password_confirmation.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Shop Name</span>
            </label>
            <input
              type="text"
              {...register("shop_name", {
                required: "Shop Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.shop_name && (
              <p className="text-red-500">{errors.shop_name.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent w-full mt-4"
            value="Sign Up"
            type="submit"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p>
          Already have an account!!{" "}
          <Link className="text-blue-800  font-bold" to="/login">
            Please Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
