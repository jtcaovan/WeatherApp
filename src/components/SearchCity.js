import React, {useState, useEffect} from 'react'
import WeatherDisplay from './WeatherDisplay'
import TempDisplay from './TempDisplay'
import Forecast from './Forecast'

function SearchCity() {
    const [city, setCity] = useState('Orange')
    const [data, setData] = useState(undefined)
    // const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=44d60556067ec6f2529d69194fa8e8b8&units=imperial`, {mode: 'cors'})
            .then(response => response.json())
            .then(response => setData(response))
    }, [city])
    
    return (
        <div id="mainContainer" className="flex-col m-28 p-12 w-10/12 max-w-6xl h-3/4 object-center min-w-min
        bg-white bg-opacity-10 rounded-3xl divide-y-2 divide-gray-200 divide-opacity-30 text-white font-sans font-thin p-12">

        {data !== undefined && 
            <div>
                <div className='flex h-3/5 max-h-80 justify-between m-6'>
                    <WeatherDisplay data = {data} /> 
                    <TempDisplay data = {data}/>
                </div>
                <div className="items-center flex w-full h-1/4 justify-between pt-8 lg:text-xl m:text-lg">
                    <Forecast data = {data}/>
                </div>   
            </div>}

        </div>
    )
}

export default SearchCity