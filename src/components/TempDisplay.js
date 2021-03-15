import React from 'react'

function TempDisplay() {
    
   return (
    <div id='mainTemperature' class="divide-y-2 divide-gray-200 divide-opacity-20 text-center">
        <p id='temperature' class="text-9xl ml-10 pb-4"></p>
        <div class="tracking-widest pt-6 space-y-4">
            <p id="feelsLike" class=""></p>
            <p id="sunrise"></p>
            <p id="sunset"></p>
        </div>
    </div>)
}

export default TempDisplay