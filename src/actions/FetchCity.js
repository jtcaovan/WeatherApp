export async function fetchCity(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=44d60556067ec6f2529d69194fa8e8b8&units=imperial`, {mode: 'cors'})
        const weatherData = await response.json();

        return weatherData
    } catch {
        console.log("error");
    }
}