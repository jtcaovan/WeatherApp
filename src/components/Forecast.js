import React from 'react'

function Forecast (prop) {
    const forecast = prop.data.daily
    if (forecast.length > 7) {forecast.shift(0,1)}

        const forecastArray = forecast.map(forecast =>
          <div key={forecast.dt} className='flex-shrink h-16 w-16'>
                <div className='forecastDate'>{new Date(forecast.dt * 1000).toLocaleString('en-US', {weekday: 'long'})}</div>
                <img alt="" src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}/>
                <div className="forecastInfo">{forecast.weather[0].main}</div>
                <div className='forecastTemp'>{Math.round(forecast.temp.day)}°</div>
            </div>)

    return(
        <div className="items-center flex w-full h-1/4 justify-between pt-8 lg:text-xl m:text-lg">
            {forecastArray}
        </div>
    )
}

export default Forecast