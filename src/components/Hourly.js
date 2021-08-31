import React from 'react'

function Hourly(prop) {
    const hourList = prop.data.hourly.slice(1, 8).map(hour => 
        <div key={hour.dt} className='flex-shrink grid grid-cols-4 md:flex md:flex-col items-center text-center'>
            <p className="font-light">{new Date(hour.dt * 1000).toLocaleString('en-US', {hour: 'numeric'})}</p>
            <img alt="" className='h-13 w-13 md:h-14 md:w-14 place-self-center' src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`}/>
            <p >{hour.weather[0].main}</p>
            <p >{Math.round(hour.temp)}°</p>
        </div>
    )

    return (
        <div className="md:items-center flex flex-col md:flex-row w-full justify-between pt-4 lg:text-xl m:text-lg truncate">
            {hourList}
        </div>
    )
}
export default Hourly