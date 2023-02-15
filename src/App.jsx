import { useState } from "react";
import LateralView from "./Components/LateralView/LateralView";
import MainView from "./Components/MainView/MainView";
import { useDispatch, useSelector } from "react-redux";
import fakeImage1 from "./assets/MusicCovers/fakeImage1.webp";
import { setTypeOfModal } from "./store/Modal";
import musicControls from "./assets/musicControls/musicControls.png";
import SongDataModal from "./Components/Modals/songData/SongDataModal";
import {
  useQuery,
  QueryClient,
  useQueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

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
           <SongDataModal />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
