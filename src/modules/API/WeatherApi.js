const baseUrl = "https://api.weatherapi.com/v1"
const currentMode = "/current"
const forecast = "/forecast"
const forecastConditions = "&aqi=yes&alerts=no"
const jsonMode = ".json?"
const daysMode = "&days="
const key = "key=352af375ca184367bdc131507231108&q="
class WeatherAPi{
    static async getCurrentWeather(City){
        const response = await fetch(`${baseUrl}${currentMode}${jsonMode}${key}${City}`);
        const data = await response.json();
        return data; 
    }
    static async getDayliWeather(City,DaysCount){
        console.log(`${baseUrl}${forecast}${jsonMode}${key}${City}${daysMode}${DaysCount}${forecastConditions}`)
        const response = await fetch(`${baseUrl}${forecast}${jsonMode}${key}${City}${daysMode}${DaysCount}${forecastConditions}`);
        const data = await response.json();
        return data; 
    }
    static async getWeaklyWeather(City){
        console.log(`${baseUrl}${forecast}${jsonMode}${key}${City}${daysMode}7${forecastConditions}`)
        const response = await fetch(`${baseUrl}${forecast}${jsonMode}${key}${City}${daysMode}7${forecastConditions}`);
        const data = await response.json();
        return data; 
    }
}
export default WeatherAPi