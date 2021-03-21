import React from 'react'

function TempDisplay(prop) {
    let convertTime = (unix) => {
        let date = new Date(unix * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();

        if (hours > 12) {
            hours -= 12;
        }

        return (hours + ':' + minutes.substr(-2));
    }
    
   return (
    <div className="divide-y-2 divide-gray-200 divide-opacity-20 text-center">
        <p className="text-9xl ml-10 pb-4">
            {Math.round(prop.data.current.temp) + '°'}
        </p>
        <div className="tracking-widest space-x-6 flex pt-6">
            <div className="space-y-3 text-left">
                <p>High: {Math.round(prop.data.daily[0].temp.max)}°</p>
                <p>Low: {Math.round(prop.data.daily[0].temp.min)}°</p>
                <p>UV Index: {prop.data.current.uvi}</p>
            </div>
            <div className="space-y-3 text-left">
                <p>{'Sunrise: ' + convertTime(prop.data.current.sunrise) + ' AM'}</p>
                <p>{'Sunset: ' + convertTime(prop.data.current.sunset) + ' PM'}</p>
                <p>{'Feels like ' + Math.round(prop.data.current.feels_like) + '°'}</p>

            </div>
        </div>
    </div>)
}

export default TempDisplay