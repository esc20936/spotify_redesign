import React, { useRef, useEffect } from "react";
import MainPageNavBar from "../MainPageNavBar/MainPageNavBar";
import {
  useQuery,
  QueryClient,
  useQueryClient,
  QueryClientProvider,
} from "react-query";
import { fetchSongs } from "../../Utillities/fetchers/Songs";
import { fetchPodcasts } from "../../Utillities/fetchers/Podcasts";
import { useDispatch, useSelector } from "react-redux";
import { setTypeOfModal } from "../../store/Modal";
import { setSong } from "../../store/Songs/ActiveSongSlice";


const queryClient = new QueryClient();

function CarrouselArtistImageView(data) {
  const dispatch = useDispatch();
  const { name, image, Duration, author, Topic } = data.values;

  const imageRef = useRef(null);

  useEffect(() => {
    let imageData = `data:image/webp;base64,${image.raw}`;
    imageRef.current.src = imageData;
  }, [imageRef]);
  return (
    <div className="group h-4/6 w-96 relative   overflow-hidden flex flex-row rounded-lg items-start justify-center first:ml-12  bg-gradient-to-l from-slate-900">
      <div className="absolute top-0 left-0 w-full h-full group-hover:bg-gradient-to-tl group-hover:from-current">
      <div className="w-full h-full flex flex-col items-end justify-end p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white hover:text-indigo-500 hidden group-hover:block "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
         {/* + sign */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>

      </div>

      </div>

      <div className="h-full w-2/5">
      <img
        className="w-full h-full"
        alt="fakeImage1"
        ref={imageRef}
      />
      </div>
      <div className="h-full w-3/5 flex flex-col items-start justify-start p-4">
        <h1 className="text-white text-2xl font-mainFont">{name}</h1>
        <div className="w-full h-auto mt-2 flex flex-col items-start justify-start">
          <p className="text-white text-sm font-mediumFont">
            Duration: {Duration}
          </p>
        </div>
        <div className="w-full h-full mt-2 flex flex-col items-start justify-center">
          <p className="text-white text-sm font-mediumFont">
            podcast by: {author} talking about {Topic}
          </p>
          </div>
      </div>
    </div>
  );
}

function SongCarrouselCard(data) {
  const dispatch = useDispatch();

  const { Artist_name, name, Name_album, image } = data.values;
  const imageRef = useRef(null);

  useEffect(() => {
    let imageData = `data:image/webp;base64,${image.raw}`;
    imageRef.current.src = imageData;
  }, [imageRef]);

  return (
    <div
      className="group optionView relative h-4/6 overflow-hidden flex flex-col rounded-lg items-center justify-center first:ml-12 last:mr-12 bg-indigo-900 cursor-pointer"
      onClick={() => {
        let values = { name: name, artist: Artist_name, image: image.raw };
        dispatch(setSong(values));
        dispatch(setTypeOfModal("songData"));
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full group-hover:bg-gradient-to-l group-hover:from-current">
        <div className="w-full h-full flex flex-col items-end justify-end p-4">
          <p className="text-white font-mainFont text-lg hidden group-hover:block">
            {Artist_name}
          </p>
          <p className="text-white  text-lg hidden group-hover:block">{name}</p>
        </div>
      </div>
      <img className="w-full h-full" alt="fakeImage1" ref={imageRef} />
    </div>
  );
}

function PodcastCarrousel() {
  
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery("podcasts", fetchPodcasts);
  
  return(
  <div className="w-full  h-5/6 flex flex-row items-start justify-start  overflow-x-scroll ">
    <div className="w-auto h-full flex flex-row items-center justify-center space-x-11">
        {data?.map((podcasts, index) => {
          return <CarrouselArtistImageView key={index} values={podcasts} />;
        })}
    </div>
  </div>
  )
}

function SongCarrousel() {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery("songs", fetchSongs);
  return (
    <div className="w-full  h-5/6 flex flex-row items-start justify-start  overflow-x-scroll ">
      <div className="w-auto h-full flex flex-row items-center justify-center space-x-11">
        {data?.map((song, index) => {
          return <SongCarrouselCard key={index} values={song} />;
        })}
      </div>
    </div>
  );
}



export default function MainView() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start overflow-scroll">
      {/* nav options */}
      <MainPageNavBar />

      {/* Featured */}
      <div className="w-full h-full flex flex-col items-start justify-start overflow-hidden">
        <div className="w-full h-1/2 flex flex-col items-start justify-start">
          <div className="w-1/2 h-1/12 flex flex-col items-start justify-start">
            <div className="w-full h-1/4 flex flex-row items-start justify-start pl-12">
              <p className="text-gray-500 font-mediumFont text-lg">
                Your Featured{" "}
              </p>
            </div>
          </div>
          {/* name */}

          {/* Carrousel */}
          <QueryClientProvider client={queryClient}>
            <SongCarrousel />
          </QueryClientProvider>
        </div>

        <div className="w-full h-1/2 flex flex-col items-start justify-start">
          <div className="w-1/2 h-auto flex flex-col items-start justify-start">
            <div className="w-full h-auto flex flex-row items-start justify-start pl-12">
              <p className="text-gray-500 font-mediumFont text-lg">
                Artists you might like{" "}
              </p>
            </div>
          </div>
          {/* name */}

          {/* Carrousel */}
          <QueryClientProvider client={queryClient}>
            <PodcastCarrousel />
          </QueryClientProvider>
        </div>
      </div>
    </div>
  );
}
