import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faExclamation, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import WeatherDisplay from './WeatherDisplay'
import TempDisplay from './TempDisplay'
import Daily from './Daily'
import Hourly from './Hourly'
import Details from './Details'

function Weather() {
    const [city, setCity] = useState('Long Beach')
    const [newCity, setNewCity] = useState('')
    const [data, setData] = useState(undefined)
    const [error, setError] = useState('hidden')
    const [unit, setUnit] = useState('imperial')
    const [openTab, setOpenTab] = useState(1)
    const [isLoading, setLoading] = useState(false)
    const { register, handleSubmit, reset} = useForm()

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

    const onSubmit = (data) => {
        setNewCity(data.city)
        reset()
    }

    const handleClick = () => {unit === 'imperial' ? setUnit('metric') : setUnit('imperial')}

    return (
        <div id="mainContainer" className="m-28 py-4 px-12 w-9/12 max-w-6xl h-4/5 2xl:h-3/5 min-w-min
        bg-white bg-opacity-10 rounded-3xl text-white font-sans font-thin shadow-2xl select-none truncate">

            <div className='flex flex-col absolute top-0 right-0'>
                <form 
                    className="shadow-xl flex p-4 mx-5 mt-5 items-center flex bg-white w-72 h-14 rounded-md" 
                    onSubmit={handleSubmit(onSubmit)}>

                {isLoading ?
                    <FontAwesomeIcon 
                        className='text-2xl text-black animate-spin' 
                        icon={faCircleNotch} /> :

                    <FontAwesomeIcon 
                        className='text-2xl text-black hover:text-gray-500 cursor-pointer' 
                        onClick={handleSubmit(onSubmit)} 
                        icon={faSearch} />
                    }

                    <input 
                        className="text-black mx-3 h-auto w-full outline-none font-sans text-xl tracking-wide" 
                        type="search"
                        name="city"
                        ref={register({ required: true })}
                        placeholder="Search city..." 
                        autocomplete="off" />
                </form>

                <div className={error}>
                    <div className="bg-red-500 mx-5 p-4 h-14 w-72 rounded-md text-white"> 
                        <FontAwesomeIcon className='animate-bounce' icon={faExclamation}/> <span className="pl-4 font-light text-l">Please enter a valid city name...</span>
                    </div>
                </div>


            </div>

        {data !== undefined && 
            
            <div className="flex flex-col space-y-6 2xl:justify-center">
                <div className='p-1 h-2/4 min-w-max md:space-x-18 xl:mx-10 flex justify-between'>
                    <WeatherDisplay data = {data} city = {city} /> 
                    <TempDisplay data = {data} />
                </div>

                <div className='mx-2 divide-y-2 divide-gray-200 divide-opacity-20'>
                    <ul className="flex space-x-8 text-xl">
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

                    <div>
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