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
        <div id='weatherDisplay' className="md:space-y-2 lg:space-y-4 mr-6 tracking-widest">
            <p className="text-6xl sm:pb-2">{prop.data.city.name}</p>
            <p className="lg:text-lg md:text-base sm:text-sm">{convertDate(prop.data.city.sunrise)}</p>
            <img src={`http://openweathermap.org/img/w/${prop.data.list[0].weather[0].icon}.png`} className="lg:h-24 lg:w-24 md:h-16 md:h-16" />
            <p className="capitalize lg:text-4xl md:text-3xl sm:text-3xl">{prop.data.list[0].weather[0].description}</p>
        </div>
    )
}

export default WeatherDisplay