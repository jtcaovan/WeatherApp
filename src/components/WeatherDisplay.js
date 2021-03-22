/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

function WeatherDisplay(prop) {
    console.log(prop)
    let convertDate = (unix) => {
        let date = new Date(unix * 1000);
        let month = date.toLocaleDateString("en-US", {month: "long"})
        let day = date.toLocaleDateString("en-US", {day: "numeric"})
        let year = date.toLocaleDateString("en-US", {year: "numeric"})

        return (month + ' ' + day + ', ' + year);
    }
    
    return (
        <div id='weatherDisplay' className="space-y-4 mr-6 tracking-widest">
            <p className="text-6xl">{prop.city}</p>
            <p className="">{convertDate(prop.data.current.sunrise)}</p>
            <img src={`http://openweathermap.org/img/w/${prop.data.current.weather[0].icon}.png`} className="h-24 w-24" />
            <p className="capitalize text-4xl">{prop.data.current.weather[0].main}</p>
        </div>
    )
}

export default WeatherDisplay