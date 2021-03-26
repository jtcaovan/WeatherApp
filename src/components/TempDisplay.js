import React from 'react'

function TempDisplay(prop) {
   return (
       <div>
            <div>
                <p className="text-9xl ml-4 mt-12 leading-none">
                    {Math.round(prop.data.current.temp) + '°'}
                </p>
            </div>

            <div className="text-4xl flex space-x-6">
                <p>H: {Math.round(prop.data.daily[0].temp.max)}°</p>
                <p>L: {Math.round(prop.data.daily[0].temp.min)}°</p>
            </div>
        </div>
    )
}

export default TempDisplay