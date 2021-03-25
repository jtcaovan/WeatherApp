import React from 'react'

function TempDisplay(prop) {
   return (
       <div className='divide-y-2 divide-gray-200 divide-opacity-20'>
            <div>
                <p className="text-9xl">
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