import React from 'react'
import ForeCast from './ForeCast'

export default {
    title: "ForeCast",
    component: ForeCast
}

const ForeCastExample = (forecastItemList) => <Weather forecastItemList={forecastItemList}></Weather>

export const FirstStory = {
    args: {
        forecastItemList: [
            {weekDay: "Lunes", hour: 12, state: "sunny", temperature: 30},
            {weekDay: "Martes", hour: 12, state: "fog", temperature: 16},
            {weekDay: "Miércoles", hour: 12, state: "cloud", temperature: 12},
            {weekDay: "Jueves", hour: 12, state: "cloudy", temperature: 8},
            {weekDay: "Viernes", hour: 12, state: "rain", temperature: 12},
            {weekDay: "Sábado", hour: 12, state: "sunny", temperature: 32},
            {weekDay: "Domingo", hour: 12, state: "rain", temperature: 14}
        ]
    }
}