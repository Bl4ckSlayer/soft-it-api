import React, { useContext, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
// import { AuthContext } from "../context/AuthProvider";
// import useAdmin from "../hooks/useAdmin";
import Footer from "../Pages/Shared/Footer/Footer";
import DataContext from "../context/DataContext";
import ProductContext from "../context/ProductContext";

const DashboardLayout = () => {
  // const { user } =
  const isAdmin = true;
  const { data, setData } = useContext(ProductContext);

  const { allData, setAllData } = useContext(DataContext);
  console.log(allData);
  const products = () => {
    var myHeaders = new Headers();
    myHeaders.append("shop-id", allData?.data?.shop_id);
    myHeaders.append("X-Requested-With", "XMLHttpRequest");
    myHeaders.append("id", allData?.data?.id);
    myHeaders.append("authorization", allData?.token);
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://dev.funnelliner.com/api/v1/client/products", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setData(result.data);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div>
      <Navbar className="z-50"></Navbar>
      <div className="drawer lg:drawer-open  ">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content bg-slate-300 p-4 overflow-x-auto overflow-y-auto ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side   z-40 ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-screen bg-base-200 z-20 ">
            <li className="p-2 ">
              <Link to="/dashboard">
                {" "}
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
                <span className="font-bold text-lg"> DashBoard</span>
              </Link>{" "}
            </li>

            {isAdmin && (
              <>
                <li className="p-2">
                  <NavLink to="/dashboard/products" onClick={() => products()}>
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
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                      />
                    </svg>
                    <span className="font-bold text-lg"> Products</span>
                  </NavLink>
                </li>
                <li className="p-2">
                  <NavLink to="/dashboard/createProduct">
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
                        d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <span className="font-bold text-lg"> Create Product</span>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
