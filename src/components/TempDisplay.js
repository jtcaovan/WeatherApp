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
    <div id='mainTemperature' className="divide-y-2 divide-gray-200 divide-opacity-20 text-center">
        <p id='temperature' className="text-9xl ml-10 pb-4">
            {Math.round(prop.data.list[0].main.temp) + '°'}
        </p>
        <div className="tracking-widest pt-6 space-y-4">
            <p id="feelsLike" className="">{'Feels like ' + Math.round(prop.data.list[0].main.feels_like) + '°'}</p>
            <p id="sunrise">{'Sunrise: ' + convertTime(prop.data.city.sunrise) + ' AM'}</p>
            <p id="sunset">{'Sunset: ' + convertTime(prop.data.city.sunset) + ' PM'}</p>
        </div>
    </div>)
}

export default TempDisplay