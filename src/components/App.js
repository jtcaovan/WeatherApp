import React from 'react'
// import NavBar from "./NavBar"
import AlertBox from './AlertBox'
import SearchCity from './SearchCity'

function App() {

  return (
    <div className="h-screen flex justify-center bg-fixed bg-gradient-to-b from-blue-700 via-blue-500 to-blue-300 overflow-hidden">
      {/* <NavBar /> */}
      <AlertBox />
      <SearchCity />
    </div>
  );
}

export default App;
