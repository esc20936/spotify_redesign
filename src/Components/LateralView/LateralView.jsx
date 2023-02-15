import React, { useRef, useEffect } from "react";
import SpotifyIcon from "../../assets/Icons/spotify.svg?url";
import House from "../../assets/Icons/house-solid.svg?url";
import Buscar from "../../assets/Icons/buscar.svg?url";
import Compass from "../../assets/Icons/compass-regular.svg?url";
import Plus from "../../assets/Icons/plus-solid.svg?url";
import Settings from "../../assets/Icons/gear-solid.svg?url";
import fakeProfilePicture from "../../assets/fakeImageProfile1.webp";
import { getIconByName } from "../../Utillities/IconsHandler";

function LateralMenuButton(props) {
  const { icon, main, profilePicture = false } = props;
  const iconRef = useRef(null);
  console.log(getIconByName(icon));

  useEffect(() => {
    iconRef.current.setAttribute("d", getIconByName(icon));
  }, [iconRef]);

  return (
    <div
      className={`group h-lateralMenuButton  w-full flex flex-col justify-center items-center rounded-lg ${
        main ? "mt-6 mb-12" : "my-3"
      } ${!main && !profilePicture ? "hover:bg-white" : ""}`}
    >
    
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          main ? "h-4/6 w-4/6" : profilePicture ? "h-5/6 w-5/6" : "h-2/5 w-2/5"
        } fill-white ${ main ? "group-hover:fill-green-500":"group-hover:fill-black" } `}
        viewBox="0 0 576 512"
        stroke="currentColor"
      >
        <path ref={iconRef} strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function LateralView() {
  return (
    <div className="h-full w-lateralMenu bg-lateralMenuColor flex flex-col justify-start items-start">
      <div className="h-1/2 w-full flex flex-col justify-start items-center p-2">
        {/* button div */}

        <LateralMenuButton icon={"SpotifyIcon"} main={true} />
        <LateralMenuButton icon={"home"} main={false} />
        <LateralMenuButton icon={"Buscar"} main={false} />
        <LateralMenuButton icon={"Compass"} main={false} />
      </div>

      <div className="h-1/2 w-full flex flex-col-reverse justify-start items-center p-2">
        {/* button div */}

        {/* <LateralMenuButton icon={fakeProfilePicture} main={false} profilePicture /> */}
        <LateralMenuButton icon={"Settings"} main={false} />
        <LateralMenuButton icon={"Plus"} main={false} />
      </div>
    </div>
  );
}
