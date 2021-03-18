import React, {useState, useRef, useEffect} from 'react'
import WeatherDisplay from './WeatherDisplay'
import {fetchCity} from '../actions/FetchCity'
// import TempDisplay from './TempDisplay'
// import ForecastContainer from './ForecastContainer'

function SearchCity() {
    const [city, setCity] = useState('Long Beach')
    const [data, setData] = useState({})
    // const [isLoading, setLoading] = useState(false)

    // const useFirstRender = () => {
    //     const firstRender = useRef();
    //     useEffect(() => {
    //         firstRender.current = true;
    //     }, []);

    //     return firstRender
    // }

    useEffect(() => {
        fetchCity("Miami").then(response => {
            setData(response)
        })
    }, [city])


    return (
        <div id="mainContainer" className="flex-col m-28 p-12 w-10/12 max-w-6xl h-3/4 object-center min-w-min
        bg-white bg-opacity-10 rounded-3xl divide-y-2 divide-gray-200 divide-opacity-30 text-white font-sans font-thin p-12">
            <div className='flex h-3/5 max-h-80 justify-between m-6'>
                 {/* <WeatherDisplay data={data}/> */}
                {/* <TempDisplay data = {data}/>
                <ForecastContainer data = {data}/> */}
            </div>

        </div>
    )
}

export default SearchCity

// function displayCity(weatherData) {
//     temperature.textContent = Math.round(weatherData.list[0].main.temp) + '°';
//     city.textContent = weatherData.city.name
//     weatherInfo.textContent = weatherData.list[0].weather[0].description
//     feelsLike.textContent = 'Feels like ' + Math.round(prop.data.list[0].main.feels_like) + '°'
//     sunrise.textContent = 'Sunrise: ' + convertTime(prop.data.city.sunrise) + ' AM';
//     sunset.textContent = {'Sunset: ' + convertTime(prop.data.city.sunset) + ' PM'};
//     date.textContent = convertDate(prop.data.city.sunrise)
//     icon.src = `http://openweathermap.org/img/w/${prop.data.list[0].weather[0].icon}`+ '.png';
// }

// function displayForecast(prop.data) {
//     forecast[0].remove();
//     for (let i = 1; i < 7; i++) {
//         let today = new Date()
//         today.setDate(today.getDate() + i);
//         forecastDate[i].textContent = today.toLocaleString('en-US', {weekday: 'long'});
//         forecastIcon[i].src = `http://openweathermap.org/img/w/${prop.data.list[i].weather[0].icon}`+ '.png';
//         forecastInfo[i].textContent = prop.data.list[i].weather[0].main;
//         forecastTemp[i].textContent = Math.round(prop.data.list[i].main.temp) + '°';
//     }
// }  

// const apiKey = '44d60556067ec6f2529d69194fa8e8b8';
// const city = document.getElementById('city');
// const temperature = document.getElementById('temperature')
// const weatherInfo = document.getElementById('info');
// const icon = document.getElementById('icon');
// const searchIcon = document.getElementById('searchIcon');
// const form = document.querySelector('form');
// const sunrise = document.getElementById('sunrise');
// const sunset = document.getElementById('sunset');
// const date = document.getElementById('date');
// const feelsLike = document.getElementById('feelsLike');
// const alert = document.getElementById('alertBox')


// let forecast = document.querySelectorAll('.forecast');
// let forecastDate = document.querySelectorAll('.forecastDate');
// let forecastIcon = document.querySelectorAll('.forecastIcon');
// let forecastInfo = document.querySelectorAll('.forecastInfo');
// let forecastTemp = document.querySelectorAll('.forecastTemp');

// form.addEventListener('submit', e => {
//     if (alert.classList.contains('visible')) {
//         alert.classList.remove('visible');
//         alert.classList.add('invisible');
//     }
//     let city = document.getElementById('searchCity').value
//     e.preventDefault()
//     searchCity(city);
//     form.reset();
// })

// searchIcon.addEventListener('click', e => {
//     searchCity(e);
//     form.reset();
// })

// async function searchCity(city) {
//     try {
//         const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${apiKey}&units=imperial`
//         const response = await fetch(url, {mode: 'cors'});
//         const weatherData = await response.json();
//         console.log(weatherData)
    
//         displayCity(weatherData)
//         displayForecast(weatherData)
//     } catch (error) {
//         alert.classList.add("visible");
//         alert.classList.remove("invisible");
//     }
// }



// let convertTime = (unix) => {
//     let date = new Date(unix * 1000);
//     var hours = date.getHours();
//     var minutes = "0" + date.getMinutes();

//     if (hours > 12) {
//         hours -= 12;
//     }

//     return (hours + ':' + minutes.substr(-2));
// }

// let convertDate = (unix) => {
//     let date = new Date(unix * 1000);
//     let month = date.toLocaleDateString("en-US", {month: "long"})
//     let day = date.toLocaleDateString("en-US", {day: "numeric"})
//     let year = date.toLocaleDateString("en-US", {year: "numeric"})

//     return (month + ' ' + day + ', ' + year);
// }

// searchCity("Long Beach");
