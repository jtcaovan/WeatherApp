import React from 'react'

function Details(prop) {
    console.log(prop)
    const convertTime = (unix) => {
        let date = new Date(unix * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();

        if (hours > 12) {
            hours -= 12;
        }

        return (hours + ':' + minutes.substr(-2));
    }

    const convertToDirection = (degrees) => {

    }

    return(
        <div className="items-center space-y-6 h-full w-full pt-8 lg:text-xl m:text-lg truncate">
            <div className="capitalize text-2xl font-light">
                <p>Feels like {Math.round(prop.data.current.feels_like)}°F. {prop.data.current.weather[0].description}

                </p>
            </div>
            <div className='flex space-x-12'>
                <div className="space-y-6">
                    <p>Sunrise: {convertTime(prop.data.current.sunrise)} AM</p>
                    <p>Sunset: {convertTime(prop.data.current.sunset)} PM</p>
                </div>
                <div className="space-y-6">
                    <p>High: {Math.round(prop.data.daily[0].temp.max)}°</p>
                    <p>Low: {Math.round(prop.data.daily[0].temp.min)}°</p>
                </div>
                <div className="space-y-6">
                    <p>UV Index: {prop.data.current.uvi}</p>
                    <p>Humidity: {prop.data.current.humidity}%</p>
                </div>
                <div className="space-y-6">
                    <p>Windspeed: {prop.data.current.wind_speed} mph {prop.data.current.wind_deg}</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Details