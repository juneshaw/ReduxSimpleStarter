import axios from 'axios';

const API_KEY = 'e9b551b44d587effa6f263b9f8a93121';

const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `http://${ROOT_URL}&q=${city},us`;
  console.log(url);
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
