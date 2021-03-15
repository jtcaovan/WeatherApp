import React from 'react'

function WeatherDisplay() {
    return(
        <div id='weatherDisplay' class="md:space-y-2 lg:space-y-4 mr-6 tracking-widest">
            <p id='city' class="text-6xl sm:pb-2"></p>
            <p id='date' class="lg:text-lg md:text-base sm:text-sm"></p>
            <img id='icon' class="lg:h-24 lg:w-24 md:h-16 md:h-16" />
            <p id="info" class="capitalize lg:text-4xl md:text-3xl sm:text-3xl"></p>
        </div>
    )
}


export default WeatherDisplay