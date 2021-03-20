export async function fetchCity(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=44d60556067ec6f2529d69194fa8e8b8`, {mode: 'cors'})
        const coordinates = await response.json()
        const {lon , lat} = coordinates.coord
        fetchWeather(lon, lat)

    } catch (error) {
        console.log("error")
    }
}

function fetchWeather(lon, lat) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=44d60556067ec6f2529d69194fa8e8b8`, {mode: 'cors'})
        .then(response => response.json())
        .then(response => response)
}


    // try {
    //     const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=44d60556067ec6f2529d69194fa8e8b8`, {mode: 'cors'})
    //     const weatherData = await response.json();
    //     return weatherData
    // } catch {
    //     console.log("error");
    // }