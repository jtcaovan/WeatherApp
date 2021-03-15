import React from 'react'
import NavBar from "./components/NavBar"
import AlertBox from './components/AlertBox'
import MainContainer from './components/MainContainer'
import ForecastContainer from './components/ForecastContainer'

function App() {
  return (
    <div class="h-screen flex justify-center bg-fixed bg-gradient-to-b from-blue-700 via-blue-500 to-blue-300 overflow-hidden">
      <NavBar />
      <AlertBox />
      <MainContainer />
      <ForecastContainer />
    </div>
  );
}

export default App;
