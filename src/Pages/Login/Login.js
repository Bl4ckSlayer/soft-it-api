import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";

const Login = () => {
  const { allData, setAllData } = useContext(DataContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const handleLogin = async (data) => {
    console.log(data);
    const myHeaders = new Headers();
    myHeaders.append("X-Requested-With", "XMLHttpRequest");
    myHeaders.append("ipaddress", "103.102.15.162");
    myHeaders.append("browsername", "Google Chrome");

    const formdata = new FormData();
    formdata.append("email", data.email);
    formdata.append("password", data.password);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    await fetch("https://dev.funnelliner.com/api/v1/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAllData(result);
        if (result.success) {
          navigate("/");
          toast.success(result.message);
          console.log(result);
          localStorage.setItem("token", result.token);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div className="h-[500px] flex justify-center  ">
        <div className="w-96 p-7">
          <h2 className="text-xl text-center">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
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
                    message: "Password must be 6 characters or longer",
                  },
                })}
                className="input input-bordered w-full max-w-xs"
              />
              <Link to="/forget">
                <label className="label">
                  {" "}
                  <span className="label-text">Forget Password?</span>
                </label>
              </Link>
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>
            <input
              className="btn btn-accent w-full"
              value="Login"
              type="submit"
            />
            <div></div>
          </form>
          <p>
            New Here!!{" "}
            <Link className=" font-bold text-blue-800" to="/signup">
              Create new Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
