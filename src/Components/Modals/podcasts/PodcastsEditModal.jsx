import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTypeOfModal } from "../../../store/Modal";
import { deletePodcastById } from "../../../Utillities/fetchers/Podcasts";
import { useQuery, useQueryClient } from "react-query";
import { reDraw } from "../../../store/ActivePage/ActivePageSlice";

export default function PodcastsEditModal() {
    const activePodcast = useSelector((state) => state.activePodcast);
  const dispatch = useDispatch();
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-75 z-10">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2/4 w-2/4 bg-mainDarkColor rounded-lg overflow-hidden">
        <div className=" h-full w-full flex flex-row items-start justify-start">
          {/* image section */}
          <div className="h-full w-1/2 flex flex-col items-start justify-center">
            <div className="relative h-full w-full bg-mainDarkColor rounded-lg">
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-l from-mainDarkColor"></div>
              <img
                className="h-full w-full "
                src={`data:image/webp;base64,${activePodcast.image}`}
                alt="fakeImage1"
              />
            </div>
          </div>
          <div className="relative h-full w-1/2 flex flex-col items-start justify-start p-12">
            {/* x to exit */}
            <div className="absolute top-0 right-0 h-2/4 w-2/4 flex flex-row items-start justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6  text-white hover:text-red-500 m-4"
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
                {activePodcast.name}
              </p>
              <p className="text-white font-mediumFont text-xl">
                {/* {modal.data.Artist_name} */}
                {activePodcast.author}
              </p>
              {/* music controls */}
             
            </div>
            <div className="h-3/4 w-full flex flex-col items-start justify-start ">
              <div className="h-1/4 w-full flex flex-col items-start justify-start">
                <p className="text-white font-mediumFont text-lg mt-4">
                  {" "}
                  {activePodcast.description}
                </p>
              </div>
              <div className="h-full w-full flex flex-row items-start justify-start overflow-x-scroll">
                <div className="h-full w-full overflow-y-scroll ">
                  <div className="h-full w-full flex flex-col items-end justify-end">
                    {/* red button top delete */}
                    <div className="h-1/4 w-full flex flex-row items-end justify-end">
                        <button className="bg-red-500 text-white font-mediumFont text-lg rounded-lg px-4 py-2 m-4"
                            onClick={
                                () => {
                                    if(confirm("Are you sure you want to delete this podcast?")){
                                      const deletePodcast = async () => {
                                        const response = await deletePodcastById(activePodcast._id);
                                        if (response.status === 200) {
                                          dispatch(setTypeOfModal(""));
                                        }
                                      

                                      }

                                      deletePodcast();
                                      dispatch(setTypeOfModal(""));
                                      dispatch(reDraw());
                                    }

                                    
                                }
                            }
                        >
                            Delete Podcast
                        </button>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
