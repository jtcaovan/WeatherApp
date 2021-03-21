export default async function fetchCity(city) {
    try {
        const cityResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=44d60556067ec6f2529d69194fa8e8b8`, {mode: 'cors'})
        const coordinates = await cityResponse.json()
        const {lon , lat} = coordinates.coord

        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=44d60556067ec6f2529d69194fa8e8b8&units=imperial`, {mode: 'cors'})
        const weather = await weatherResponse.json()
        return weather
    } catch (error) {
        console.log("error")
    }
}