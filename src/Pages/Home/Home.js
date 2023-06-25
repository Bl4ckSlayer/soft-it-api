import React, { useContext } from "react";
import "./Home.css";

import { Link } from "react-router-dom";
import DataContext from "../../context/DataContext";
const Home = () => {
  const { allData, setAllData } = useContext(DataContext);

  return (
    <section className="relative h-[60vh] flex flex-col  items-center  justify-center text-center  banner-section text-blue-900 ">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video
          className="min-w-full min-h-full absolute object-cover opacity-50"
          src="https://media.istockphoto.com/id/1327529039/video/different-ui-ux-gui-mobile-screens-modern-infographic-template-dashboard-infographic-charts.mp4?s=mp4-640x640-is&k=20&c=JaUkYR2QhLm4-lEgFItWuZUHZj87KfBFcgQfm4t9jsg="
          autoPlay
          muted
          loop
        ></video>
      </div>

      <div className="  text-center  z-10">
        <div className="container">
          <div className="banner-content grid grid-cols-1 bg-slate-400 p-4 rounded-full bg-opacity-80">
            {allData?.data?.email ? (
              <h1 className="font-bold ">
                Please Click On DashBoard To See The Content
              </h1>
            ) : (
              <h1 className="font-bold ">Please LogIn To See The DashBoard</h1>
            )}
          </div>
        </div>

        {allData?.data?.email ? (
          <Link
            className="btn  border-0 bg-blue-800 hover:bg-white  mx-auto mt-72 text-white hover:text-black font-extrabold"
            to="/dashboard"
          >
            DashBoard
          </Link>
        ) : (
          <Link
            className="btn  border-0  font-extrabold  mt-72  hover:text-black bg-blue-800 hover:bg-white  mx-auto  text-white  "
            to="/login"
          >
            LogIn Now
          </Link>
        )}
      </div>
    </section>
  );
};

export default Home;
