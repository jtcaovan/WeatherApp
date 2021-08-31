import React from 'react'
import Weather from './Weather'

function App() {

  return (
    <div className="md:h-screen w-screen flex justify-center bg-fixed bg-gradient-to-b from-blue-700 via-blue-500 to-blue-300 overflow-hidden">
      <Weather />
    </div>
  );
}

export default App;