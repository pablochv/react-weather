import React from 'react'
import { WiDayCloudy } from 'react-icons/wi'
import WeatherDetails from './WeatherDetails'

export default {
    title: "WeatherDetails",
    component: WeatherDetails
}

const WeatherDetailsExample = (humidity, wind) => <WeatherDetails humidity={humidity} wind={wind}></WeatherDetails>

export const FirstStory = {
    args: {
        humidity: 10,
        wind: 5
    }
}