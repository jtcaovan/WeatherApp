import React from 'react'

function Forecast (prop) {

        const forecastArray = prop.data.daily.map(forecast =>

          <div key={forecast.dt} className="items-center flex w-full h-1/4 justify-between pt-8 lg:text-xl m:text-lg">
                <div className='forecastDate'>{new Date(forecast.dt * 1000).toLocaleString('en-US', {weekday: 'long'})}</div>
                <img alt="" src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}/>
                <div className="forecastInfo">{forecast.weather[0].main}</div>
                <div className='forecastTemp'>{Math.round(forecast.temp.day)}</div>
            </div>)

        // let today = new Date()
        // today.setDate(today.getDate() + i);
        // forecastDate[i].textContent = today.toLocaleString('en-US', {weekday: 'long'});
        // forecastIcon[i].src = `http://openweathermap.org/img/w/${prop.data.list[i].weather[0].icon}`+ '.png';
        // forecastInfo[i].textContent = prop.data.list[i].weather[0].main;
        // forecastTemp[i].textContent = Math.round(prop.data.list[i].main.temp) + '°';

    return(
        <div className='forecast flex-shrink h-16 w-16'>
            {forecastArray}
        </div>
    )
}

export default Forecast