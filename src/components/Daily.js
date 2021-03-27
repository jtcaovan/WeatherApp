import React from 'react'

function Daily (prop) {
    if (prop.data.daily.length > 7) {prop.data.daily.shift(0,1)}

        const dailyArray = prop.data.daily.map(daily =>
          <div key={daily.dt} className='flex-shrink h-full w-max'>
                <div className='font-light'>{new Date(daily.dt * 1000).toLocaleString('en-US', {weekday: 'long'})}</div>
                <img alt="" src={ `http://openweathermap.org/img/w/${daily.weather[0].icon}.png` }/>
                <div> {daily.weather[0].main} </div>
                <div> {Math.round(daily.temp.max)}° </div>
            </div>)

    return(
        <div className="items-center flex w-full justify-between pt-4 lg:text-xl m:text-lg truncate">
            {dailyArray}
        </div>
    )
}

export default Daily