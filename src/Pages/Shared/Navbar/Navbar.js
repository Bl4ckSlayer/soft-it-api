import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../../../context/DataContext";
import { toast } from "react-hot-toast";

const Navbar = () => {
  // const { user, logOut } = useContext(AuthContext);

  const { allData, setAllData } = useContext(DataContext);

  console.log(allData?.data?.id);
  const path = window.location.pathname;
  console.log(path);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");

    const myHeaders = new Headers();
    myHeaders.append("X-Requested-With", "XMLHttpRequest");
    myHeaders.append("ipaddress", "103.102.15.162");
    myHeaders.append("browsername", "Google Chrome");
    myHeaders.append("id", allData?.data?.id);
    myHeaders.append("authorization", allData?.token);

    const formdata = new FormData();
    formdata.append("email", allData?.data?.email);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,

      redirect: "follow",
    };

    fetch("https://dev.funnelliner.com/api/v1/client/logout", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        toast.success(result.message);
        setAllData("");
        navigate("/");
      })
      .catch((error) => console.log("error", error));
  };
  const menuItems = (
    <>
      {allData?.data?.email ? (
        <>
          <li>
            <Link to="/dashboard" className="text-lg font-bold ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                />
              </svg>
              Dashboard
            </Link>
          </li>

          <li>
            <button className="text-lg font-bold" onClick={handleLogOut}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>{" "}
              Sign out
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link className="text-lg font-bold" to="/login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
            Login
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-slate-200 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown z-40">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className=" text-blue-800 ml-4 text-xl font-bold">
          SOFT IT CARE
        </Link>
      </div>
      <div className="navbar-center hidden z-50 lg:flex">
        <ul className="menu menu-horizontal  p-0">{menuItems}</ul>
      </div>
      {path === "/dashboard" && (
        <label
          htmlFor="dashboard-drawer"
          tabIndex={2}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      )}
    </div>
  );
};

export default Navbar;
