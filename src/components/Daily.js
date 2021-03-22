import React from 'react'

function Daily (prop) {
    const daily = prop.data.daily
    if (daily.length > 7) {daily.shift(0,1)}

        const dailyArray = daily.map(daily =>
          <div key={daily.dt} className='flex-shrink h-full w-max'>
                <div id='dailyDate'>{new Date(daily.dt * 1000).toLocaleString('en-US', {weekday: 'long'})}</div>
                <img alt="" src={`http://openweathermap.org/img/w/${daily.weather[0].icon}.png`}/>
                <div id="dailyInfo">{daily.weather[0].main}</div>
                <div id='dailyTemp'>{Math.round(daily.temp.day)}°</div>
            </div>)

    return(
        <div className="items-center flex w-full justify-between pt-8 lg:text-xl m:text-lg truncate">
            {dailyArray}
        </div>
    )
}

export default Daily