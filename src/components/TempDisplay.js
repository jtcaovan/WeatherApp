import React from 'react'

function TempDisplay(prop) {
   return (
       <div className='text-center'>
            <div>
                <p className="text-7xl md:text-8xl lg:text-9xl md:ml-4 md:mt-12 leading-none">
                    {Math.round(prop.data.current.temp) + '°'}
                </p>
            </div>
            <div className="text-lg lg:text-4xl flex justify-center space-x-2 md:space-x-6">
                <p>H: {Math.round(prop.data.daily[0].temp.max)}°</p>
                <p>L: {Math.round(prop.data.daily[0].temp.min)}°</p>
            </div>
        </div>
    )
}

export default TempDisplay