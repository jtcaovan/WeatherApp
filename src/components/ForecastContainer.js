import React from 'react'
import Forecast from './Forecast'

function ForecastContainer() {
    return(
        <div id='forecastContainer' class="items-center flex w-full h-1/4 justify-between pt-8 lg:text-xl m:text-lg">
            <Forecast />
        </div>
    )
}


export default ForecastContainer