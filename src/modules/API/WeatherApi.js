const baseUrl = "https://api.weatherapi.com/v1"
const currentMode = "/current.json?"
const key = "key=352af375ca184367bdc131507231108&q="
class WeatherAPi{
    static async getCurrentWeather(City){
        const response = await fetch(`${baseUrl}${currentMode}${key}${City}`);
        const data = await response.json();
        return data; 
    }
}
export default WeatherAPi