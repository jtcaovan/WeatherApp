import React from 'react'

function Details(prop) {
    let convertTime = (unix) => {
        let date = new Date(unix * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();

        if (hours > 12) {
            hours -= 12;
        }

        return (hours + ':' + minutes.substr(-2));
    }

    return(
        <div className="items-center flex h-full w-full pt-8 lg:text-xl m:text-lg space-x-12 truncate">
            <div className="space-y-6">
                <p>{'Sunrise: ' + convertTime(prop.data.current.sunrise) + ' AM'}</p>
                <p>{'Sunset: ' + convertTime(prop.data.current.sunset) + ' PM'}</p>
                <p>{'Feels like ' + Math.round(prop.data.current.feels_like) + '°'}</p>
            </div>
            <div className="space-y-6">
                <p>High: {Math.round(prop.data.daily[0].temp.max)}°</p>
                <p>Low: {Math.round(prop.data.daily[0].temp.min)}°</p>
                <p>UV Index: {prop.data.current.uvi}</p>
            </div>
        </div>
    )
}

export default Details