// import React, { useContext } from "react";
// import useAdmin from "../../hooks/useAdmin";
// import { AuthContext } from "../../context/AuthProvider";

const DashBoard = () => {
  // const { user } = useContext(AuthContext);
  const user = true;

  return (
    <div className="relative ">
      <img
        src="https://unblast.com/wp-content/uploads/2020/03/Storage-Management-Dashboard-Template.jpg"
        alt=""
        className="opacity-50 min-h-screen max-w-screen"
      />
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-extrabold bg-blue-800 p-6 rounded-full text-white">
        Welcome To Dashboard
        <span className="loading loading-infinity loading-lg">"</span>
      </h1>
      {user ? (
        " "
      ) : (
        <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-blue-900 p-6 rounded-full text-white    text-center">
          <h1 className="text-sm font-extrabold">
            Please Log in to Admin Account To see full Content
          </h1>
          <h1>email:admin@admin.com Password:Admin123@ </h1>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
