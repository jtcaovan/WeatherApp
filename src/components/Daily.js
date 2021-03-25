import React from 'react'

function Daily (prop) {
    console.log(prop)

    if (prop.data.daily.length > 7) {prop.data.daily.shift(0,1)}

        const dailyArray = prop.data.daily.map(daily =>
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