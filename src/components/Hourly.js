import React from 'react'

function Hourly(prop) {
    const hourList = prop.data.hourly.slice(1, 8).map(hour => 
        <div key={hour.dt} className="flex-shrink h-full w-max">
            <p className="font-light">{new Date(hour.dt * 1000).toLocaleString('en-US', {hour: 'numeric'})}</p>
            <img alt="" src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`}/>
            <p >{hour.weather[0].main}</p>
            <p >{Math.round(hour.temp)}°</p>
        </div>
    )

    return (
        <div className="items-center flex w-full justify-between pt-4 lg:text-xl m:text-lg">
            {hourList}
        </div>
    )
}
export default Hourly