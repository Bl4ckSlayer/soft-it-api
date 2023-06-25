import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const navigate = useNavigate();
  const handleUpdate = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("X-Requested-With", "XMLHttpRequest");

    var formdata = new FormData();
    formdata.append("phone", data.phone);
    formdata.append("password", data.password);
    formdata.append("password_confirmation", data.password_confirmation);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://dev.funnelliner.com/api/v1/client/update-password",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          toast.success(result.message);
          navigate("/login");
        }
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div>
      <div className="h-[500px] flex justify-center  ">
        <div className="w-96 p-7">
          <h2 className="text-xl text-center">Login</h2>
          <form className="" onSubmit={handleSubmit(handleUpdate)}>
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
            <input
              className="btn btn-accent mt-4 w-full "
              value="Update Password"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
