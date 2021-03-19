import React from 'react'

function Forecast (prop) {
        console.log(prop)
        console.log(prop.data.list)
  
        const forecastArray = prop.data.list.map(forecast => 
            <div key={forecast}>
                <div className='forecastDate'></div>
                <img alt="" src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}/>
                <div className="forecastInfo">{forecast.weather[0].main}</div>
                <div className='forecastTemp'>{Math.round(forecast.main.temp)}</div>
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