import React from 'react'
import Weather from './Weather'

export default {
    title: "Weather",
    component: Weather
}

const WeatherExample = (temperature, state) => <Weather temperature={temperature} state={state}></Weather>

export const FirstStory = {
    args: {
        temperature: 24,
        state: "cloud"
    }
}