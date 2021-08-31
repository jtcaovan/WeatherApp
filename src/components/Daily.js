import React from 'react'

function Daily (prop) {
    if (prop.data.daily.length > 7) {prop.data.daily.shift(0,1)}

        const dailyArray = prop.data.daily.map(daily =>
          <div key={daily.dt} className='flex-shrink grid grid-cols-4 md:flex md:flex-col items-center text-center mx-4 md:mx-0'>
                <div className='font-light'>{new Date(daily.dt * 1000).toLocaleString('en-US', {weekday: 'long'})}</div>
                <img alt="" className='h-13 w-13 md:h-14 md:w-14 place-self-center' 
                    src={ `http://openweathermap.org/img/w/${daily.weather[0].icon}.png` }/>
                <div> {daily.weather[0].main} </div>
                <div> {Math.round(daily.temp.max)}° </div>
            </div>)

    return(
        <div className="md:items-center flex flex-col md:flex-row w-full justify-between pt-4 lg:text-xl m:text-lg truncate">
            {dailyArray}
        </div>
    )
}

export default Daily