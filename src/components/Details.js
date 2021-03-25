import React from 'react'

function Details(prop) {
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
        const compass =["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"]
        let direction = Math.floor((degrees/22.5)+ 0.5);
        return compass[(direction % 16)]
    }

    return(
        <div className="items-center space-y-6 h-full w-full pt-6 lg:text-xl m:text-lg truncate">
            <div className="capitalize text-2xl font-light">
                <p>Feels like {Math.round(prop.data.current.feels_like)}°F. {prop.data.current.weather[0].description}

                </p>
            </div>
            <div className='flex justify-around'>
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
                    <p>Wind: {prop.data.current.wind_speed} mph {convertToDirection(prop.data.current.wind_deg)}</p>
                    <p>Visibility: {(prop.data.current.visibility/1000)} km</p>
                </div>
            </div>
        </div>
    )
}

export default Details