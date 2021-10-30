import axios from 'axios'

const getCurrentWeather = async () => {
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=alegre&appid=9fe610fab2867e94b9b248c094c180a1')
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

export { getCurrentWeather };