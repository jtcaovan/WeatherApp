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
        <div className="items-center space-y-6 :h-full w-full pt-4 truncate">
            <div className="text-xl text-center md:text-left md:text-2xl capitalize tracking-wide font-light">
                <p>Feels like {Math.round(prop.data.current.feels_like)}°. {prop.data.current.weather[0].description}
                </p>
            </div>
            <div className='flex flex-col text-lg lg:text-xl md:flex-row space-y-8 md:space-y-0 place-content-center md:justify-between font-extralight'>
                <div className="flex md:flex-col justify-around md:space-y-6">
                    <p>High: {Math.round(prop.data.daily[0].temp.max)}°</p>
                    <p>Low: {Math.round(prop.data.daily[0].temp.min)}°</p>
                </div>
                <div className="flex md:flex-col justify-around md:space-y-6">
                    <p>Sunrise: {convertTime(prop.data.current.sunrise)} AM</p>
                    <p>Sunset: {convertTime(prop.data.current.sunset)} PM</p>
                </div>
                <div className="flex md:flex-col justify-around md:space-y-6">
                    <p>UV Index: {prop.data.current.uvi}</p>
                    <p>Humidity: {prop.data.current.humidity}%</p>
                </div>
                <div className="flex md:flex-col justify-around md:space-y-6">
                    <p>Wind: {prop.data.current.wind_speed} mph {convertToDirection(prop.data.current.wind_deg)}</p>
                    <p>Visibility: {(prop.data.current.visibility/1000)} km</p>
                </div>
            </div>
        </div>
    )
}

export default Details