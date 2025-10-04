const AppLoader = () => {
  const id = "app-loader";
  const styleClass = "";

  return (
    <>
      <div
        className={`app-loading-overlay bg-[#000000] fixed inset-0 z-50 flex items-center justify-center ${styleClass}`}
        id={id}
      >
        <div className="inner-content flex flex-col items-center justify-center">
          {/* <p className="text-white mt-4">Loading...</p> */}
          <div className="loader-container mt-3">
            <div className="loader">&nbsp;</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLoader;
