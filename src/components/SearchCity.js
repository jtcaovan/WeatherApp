import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'
import WeatherDisplay from './WeatherDisplay'
import TempDisplay from './TempDisplay'
import Daily from './Daily'
import Hourly from './Hourly'
// import Details from './Details'

function SearchCity() {
    const [city, setCity] = useState('Orange')
    const [data, setData] = useState(undefined)
    const [openTab, setOpenTab] = useState(1)
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

        function handleSubmit(e) {
            setCity()
        }

    return (
        <div>
            <div>
                <NavBar onSubmit={handleSubmit}/>
            </div>

            <div id="mainContainer" className="m-28 py-4 px-12 w-9/12 max-w-6xl h-4/5 2xl:h-4/5 min-w-min
            bg-white bg-opacity-10 rounded-3xl text-white font-sans font-thin">
        {data !== undefined && 
                <div className="h-full flex flex-col space-y-6 justify-around 2xl:justify-center">
                    <div className='p-1 h-2/4 min-w-max'>
                        <div id="currentWeather" className='ml-10 mr-16 my-6 flex justify-between'>
                            <WeatherDisplay data = {data} city = {city}/> 
                            <TempDisplay data = {data}/>
                        </div>
                    </div>

                    <div className='mx-2 p-1 divide-y-2 divide-gray-200 divide-opacity-20'>
                        <ul className="flex space-x-8 text-xl">
                            <li 
                                className={openTab === 1 ? 'text-white font-extralight focus:outline-none' : 
                                'text-gray-300 text-opacity-60 hover:text-white transition duration-300 ease-in-out focus:outline-none'}
                                onClick={() => {setOpenTab(1)}}>
                                Daily
                            </li>
                            <li 
                                className={openTab === 2 ? 'text-white font-extralight focus:outline-none' :
                                'text-gray-300 text-opacity-60 hover:text-white transition duration-300 ease-in-out focus:outline-none'}
                                onClick={() => {setOpenTab(2)}}>
                                Hourly
                            </li>
                            <li 
                                className={openTab === 3 ? 'text-white font-extralight focus:outline-none' :
                                'text-gray-300 text-opacity-60 hover:text-white transition duration-300 ease-in-out focus:outline-none'}
                                onClick={() => {setOpenTab(3)}}>
                                Details
                            </li>
                        </ul>

                        <div id="forecastContainer" className="h-2/5">
                            <div className={openTab === 1 ? "block" : "hidden"}>
                                <Daily data = {data}/>
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"}>
                                <Hourly data = {data} />
                            </div>
                            {/* <div className={openTab === 3 ? "block" : "hidden"} id="detailsContainer">
                                <Details />
                            </div>    */}
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default SearchCity