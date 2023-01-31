import React from 'react'
import SpotifyIcon from '../../assets/Icons/spotify.svg'
import House from '../../assets/Icons/house-solid.svg'
import Buscar from '../../assets/Icons/buscar.svg'
import Compass from '../../assets/Icons/compass-regular.svg'
import Plus from '../../assets/Icons/plus-solid.svg'
import Settings from '../../assets/Icons/gear-solid.svg'
import fakeProfilePicture from '../../assets/fakeImageProfile1.webp'

function LateralMenuButton(props){
    const {icon, main, profilePicture=false} = props
    return(
        <div className={`h-lateralMenuButton  w-full flex flex-col justify-center items-center rounded-lg ${main ? "mt-6 mb-12":"my-3"} ${!main && !profilePicture ? "hover:bg-white":""}`}>            
            <img src={icon}  className={`${main ? "h-4/6 w-4/6": profilePicture ? "h-5/6 w-5/6" :"h-2/5 w-2/5"} ${profilePicture ? "rounded-full":""}`} />
        </div>
    )
}


export default function LateralView() {
  return (
    <div className='h-full w-lateralMenu bg-lateralMenuColor flex flex-col justify-start items-start'>

        <div className='h-1/2 w-full flex flex-col justify-start items-center p-2'>
            {/* button div */}
            
            <LateralMenuButton icon={SpotifyIcon} main={true} />
            <LateralMenuButton icon={House} main={false} />
            <LateralMenuButton icon={Buscar} main={false} />
            <LateralMenuButton icon={Compass} main={false} />

        </div>

        <div className='h-1/2 w-full flex flex-col-reverse justify-start items-center p-2'>
            {/* button div */}
            
            <LateralMenuButton icon={fakeProfilePicture} main={false} profilePicture />
            <LateralMenuButton icon={Settings} main={false} />
            <LateralMenuButton icon={Plus} main={false} />

        </div>


    </div>
  )
}
