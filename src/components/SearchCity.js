import React, {useState, useEffect} from 'react'
import WeatherDisplay from './WeatherDisplay'
import TempDisplay from './TempDisplay'
import Forecast from './Forecast'
import Hourly from './Hourly'

function SearchCity() {
    const [city, setCity] = useState('Orange')
    const [data, setData] = useState(undefined)
    // const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchCity(city) {
            try {
                const cityResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=44d60556067ec6f2529d69194fa8e8b8`, {mode: 'cors'})
                const coordinates = await cityResponse.json()
                const {lon , lat} = coordinates.coord

                const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=44d60556067ec6f2529d69194fa8e8b8&units=imperial`, {mode: 'cors'})
                const weather = await weatherResponse.json()
                setData(weather)
            } catch (error) {
                console.log("error")
            }
        }
        fetchCity(city)
    }, [city])
    
    return (
        <div id="mainContainer" className="m-28 p-12 w-10/12 max-w-6xl h-3/4 object-center min-w-min
        bg-white bg-opacity-10 rounded-3xl divide-y-2 divide-gray-200 divide-opacity-30 text-white font-sans font-thin p-12">
      {data !== undefined && 
        <div>
            <div>
                <div id="currentWeather"className='flex h-3/5 max-h-80 justify-between m-6'>
                    <WeatherDisplay data = {data} city = {city}/> 
                    <TempDisplay data = {data}/>
                </div>
            </div>

            <div className="flex space-x-8 text-xl">
                <p>Hourly</p>
                <p>Daily</p>
                <p>Details</p>
            </div>

            <div>
                <div id="forecastContainer" className="visble">
                    <Forecast data = {data}/>
                </div>
                <div id="hourlyContainer" className="hidden">
                    <Hourly data = {data} />
                </div>
                {/* <div id="detailsContainer">
                    <Details />
                </div>    */}
            
            </div>

        </div>}




        </div>
    )
}

export default SearchCity