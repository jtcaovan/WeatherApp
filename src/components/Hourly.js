import React from 'react'

function Hourly(prop) {
    const hourList = prop.data.hourly.slice(1, 8).map(hour => 
        <div key={hour.dt} className="flex-shrink h-16 w-16">
            <p>{new Date(hour.dt * 1000).toLocaleString('en-US', {hour: 'numeric'})}</p>
            <img alt="" src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`}/>
            <p>{Math.round(hour.temp)}°</p>
            <p></p>
        </div>
    )

    return (
        <div className="items-center flex w-full h-1/4 justify-between pt-8 lg:text-xl m:text-lg">
            {hourList}
        </div>
    )
}
export default Hourly