/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

function WeatherDisplay(prop) {
    let convertDate = (unix) => {
        let date = new Date(unix * 1000);
        let month = date.toLocaleDateString("en-US", {month: "long"})
        let day = date.toLocaleDateString("en-US", {day: "numeric"})
        let year = date.toLocaleDateString("en-US", {year: "numeric"})

        return (month + ' ' + day + ', ' + year);
    }
    
    return (
        <div id='weatherDisplay' className="text-center md:text-left md:space-y-3 tracking-widest flex flex-col">
            <p className="text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl capitalize">{prop.city}</p>
            <p className="hidden md:inline md:text-xl">{convertDate(prop.data.current.sunrise)}</p>
            <img src={`http://openweathermap.org/img/w/${prop.data.current.weather[0].icon}.png`} 
                className="hidden md:inline md:h-24 md:w-24" />
            <p className="capitalize text-lg md:text-2xl lg:text-4xl">{prop.data.current.weather[0].main}</p>
        </div>
    )
}

export default WeatherDisplay