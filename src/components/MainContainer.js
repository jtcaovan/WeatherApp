import React from 'react'
import WeatherDisplay from './WeatherDisplay'
import TempDisplay from './TempDisplay'
import ForecastContainer from './ForecastContainer'

function MainContainer() {
    return (
    <div id="mainContainer" class="flex-col m-28 p-12 w-10/12 max-w-6xl h-3/4 object-center min-w-min
    bg-white bg-opacity-10 rounded-3xl divide-y-2 divide-gray-200 divide-opacity-30 text-white font-sans font-thin p-12">
        <div class='flex h-3/5 max-h-80 justify-between m-6'>
            <WeatherDisplay />
            <TempDisplay />
            <ForecastContainer />
        </div>
    </div>
    )
}

export default MainContainer