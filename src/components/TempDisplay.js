import React from 'react'

function TempDisplay(prop) {
    console.log(prop)

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
        <div className="tracking-widest pt-6 space-y-4">
            <p className="">{'Feels like ' + Math.round(prop.data.current.feels_like) + '°'}</p>
            <p>{'Sunrise: ' + convertTime(prop.data.current.sunrise) + ' AM'}</p>
            <p>{'Sunset: ' + convertTime(prop.data.current.sunset) + ' PM'}</p>
        </div>
    </div>)
}

export default TempDisplay