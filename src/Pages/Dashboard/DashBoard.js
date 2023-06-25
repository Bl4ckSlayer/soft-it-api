const DashBoard = () => {
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
    </div>
  );
};

export default DashBoard;
