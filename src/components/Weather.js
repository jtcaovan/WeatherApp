import React, {useState, useEffect} from 'react'
import Search from './Search'
import WeatherDisplay from './WeatherDisplay'
import TempDisplay from './TempDisplay'
import Daily from './Daily'
import Hourly from './Hourly'
import Details from './Details'

function Weather() {
    const [city, setCity] = useState('Phoenix')
    const [newCity, setNewCity] = useState('')
    const [data, setData] = useState(undefined)
    const [error, setError] = useState('hidden')
    const [unit, setUnit] = useState('imperial')
    const [openTab, setOpenTab] = useState(1)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchCity(city) {
            try {
                setLoading(true)
                const cityResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=44d60556067ec6f2529d69194fa8e8b8`, {mode: 'cors'})
                const coordinates = await cityResponse.json()
                const {lon , lat} = coordinates.coord
                const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=44d60556067ec6f2529d69194fa8e8b8&units=${unit}`, {mode: 'cors'})
                const weather = await weatherResponse.json()

                setCity(coordinates.name)
                setLoading(false)
                setData(weather)
            } catch {
                setError('block')
                setLoading(false)
                setTimeout(() => {
                    setError('hidden')
                }, 4000)
            }
        }
        newCity === '' ? fetchCity(city) : fetchCity(newCity)
    }, [city, newCity, unit])

    const handleClick = () => {unit === 'imperial' ? setUnit('metric') : setUnit('imperial')}

    return (
        <div className="md:m-28 py-4 px-12 w-9/12 max-w-6xl h-full md:h-4/5 xl:h-4/5 2xl:h-3/5 min-w-min
        bg-white bg-opacity-10 rounded-3xl text-white font-sans font-thin shadow-2xl select-none truncate">

            <Search 
                isLoading={isLoading} 
                error={error}
                setNewCity={setNewCity}
            />

            {data !== undefined && 
            <div className="flex flex-col space-y-6 2xl:justify-center">
                <div className='mt-16 md:mt-0 p-1 h-2/4 min-w-max md:space-x-18 xl:mx-10 flex flex-col md:flex-row md:justify-between xl:m-auto'>
                    <WeatherDisplay data = {data} city = {city} /> 
                    <TempDisplay data = {data} />
                </div>

                <div className='w-screen md:w-full md:mx-2 divide-y-2 divide-gray-200 divide-opacity-20'>
                    <ul className="flex space-x-8 text-xl justify-center md:justify-start">
                        <li 
                            className={openTab === 1 ? 'text-white font-extralight focus:outline-none cursor-pointer'  : 
                            'text-gray-300 text-opacity-60 hover:text-white transition duration-300 ease-in-out focus:outline-none cursor-pointer'}
                            onClick={() => {setOpenTab(1)}}>
                            Daily
                        </li>
                        <li 
                            className={openTab === 2 ? 'text-white font-extralight focus:outline-none cursor-pointer ' :
                            'text-gray-300 text-opacity-60 hover:text-white transition duration-300 ease-in-out focus:outline-none cursor-pointer'}
                            onClick={() => {setOpenTab(2)}}>
                            Hourly
                        </li>
                        <li 
                            className={openTab === 3 ? 'text-white font-extralight focus:outline-none cursor-pointer ' :
                            'text-gray-300 text-opacity-60 hover:text-white transition duration-300 ease-in-out focus:outline-none cursor-pointer'}
                            onClick={() => {setOpenTab(3)}}>
                            Details
                        </li>
                        <li className='ml-auto'>
                            <button 
                                className='font-thin text-gray-300 text-opacity-60 hover:text-white transition duration-300 ease-in-out focus:outline-none' 
                                onClick={handleClick}>
                                {unit==='imperial'? 'C°': 'F°'}
                            </button>
                        </li>
                    </ul>

                    <div className='h-full'>
                        <div className={openTab === 1 ? "block" : "hidden"}>
                            <Daily data = {data}/>
                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"}>
                            <Hourly data = {data} />
                        </div>
                        <div className={openTab === 3 ? "block" : "hidden"}>
                            <Details data = {data}/>
                        </div>   
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Weather