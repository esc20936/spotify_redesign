import { useState } from 'react'
import LateralView from './Components/LateralView/LateralView'
import MainView from './Components/MainView/MainView'
function App() {

  return (
    <div className="App bg-mainDarkColor h-full w-full flex flex-row items-start justify-start">
      <LateralView />
      <MainView />
    </div>
  )
}

export default App
