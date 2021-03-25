import React from 'react'

function TempDisplay(prop) {

    
   return (
       <div>
            <div className="divide-y-2 divide-gray-200 divide-opacity-20 text-center">
                <p className="text-9xl ml-10 pb-4">
                    {Math.round(prop.data.current.temp) + '°'}
                </p>
            </div>

            <div className="flex">
                <p>High: {Math.round(prop.data.daily[0].temp.max)}°</p>
                <p>Low: {Math.round(prop.data.daily[0].temp.min)}°</p>
            </div>
        </div>
    )
}

export default TempDisplay