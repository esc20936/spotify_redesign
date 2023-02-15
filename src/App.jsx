import { useState } from "react";
import LateralView from "./Components/LateralView/LateralView";
import MainView from "./Components/MainView/MainView";
import { useDispatch, useSelector } from "react-redux";
import fakeImage1 from "./assets/MusicCovers/fakeImage1.webp";
import { setTypeOfModal } from "./store/Modal";
import musicControls from "./assets/musicControls/musicControls.png";

function App() {
  const modal = useSelector((state) => state.modal);
  const activeSong = useSelector((state) => state.activeSong);
  const dispatch = useDispatch();

  return (
    <div className="relative h-full w-full">
      <div className="App bg-mainDarkColor h-full w-full flex flex-row items-start justify-start">
        <LateralView />
        <MainView />
      </div>
      {modal.type === "songData" ? (
        <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-75 z-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3/4 w-3/4 bg-mainDarkColor rounded-lg overflow-hidden">
            <div className=" h-full w-full flex flex-row items-start justify-start">
              {/* image section */}
              <div className="h-full w-1/2 flex flex-col items-start justify-center">
                <div className="relative h-full w-full bg-mainDarkColor rounded-lg">
                  <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-l from-mainDarkColor"></div>
                  <img
                    className="h-full w-full "
                    src={`data:image/webp;base64,${activeSong.image}`}
                    alt="fakeImage1"
                  />
                </div>
              </div>
              <div className="relative h-full w-1/2 flex flex-col items-start justify-start p-12">
                {/* x to exit */}
                <div className="absolute top-0 right-0 h-1/4 w-1/4 flex flex-row items-start justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white hover:text-red-500 m-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => dispatch(setTypeOfModal(""))}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                
                {/* name section */}
                <div className="h-1/4 w-full flex flex-col items-start justify-start">
                  <p className="text-white font-mainFont text-4xl">
                    {/* {modal.data.name} */}
                    {activeSong.name}
                  </p>
                  <p className="text-white font-mediumFont text-xl">
                    {/* {modal.data.Artist_name} */}
                    {activeSong.artist}
                  </p>
                  {/* music controls */}
                  <div className="h-1/4 w-full flex flex-row items-center justify-center mt-4">
                    <div className="h-1 w-3/4 bg-white flex flex-row items-center justify-center">
                      {/* white ball */}
                      <div className="h-4 w-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="h-1/4 w-full flex flex-row items-center justify-center">
                  
                  {/* left arrow */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white hover:text-indigo-600 m-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>

                  {/* play button */}
                    <p className="text-white font-mediumFont text-2xl hover:text-indigo-600">▶</p>
                 

                  {/* right arrow */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white hover:text-indigo-600 m-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>

                  
                  </div>  

                </div>
                <div className="h-3/4 w-full flex flex-col items-start justify-start ">
                  <div className="h-1/4 w-full flex flex-col items-start justify-start">
                    <p className="text-white font-mediumFont text-lg"> talvez te interese</p>
                  </div>
                  <div className="h-3/4 w-full flex flex-row items-start justify-start overflow-x-scroll">
                    <div className="h-full w-full overflow-y-scroll ">
                        <div className="h-auto w-full flex flex-col items-start justify-start">

                        </div>
                      </div>
                    </div>
                        
                </div>
                  
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
