import React from 'react'
import ForeCastItem from './ForeCastItem'

export default {
    title: "ForeCastItem",
    component: ForeCastItem
}

const ForeCastItemExample = (weekDay, hour, state, temperature) => <Weather weekDay={weekDay} hour={hour} temperature={temperature} state={state}></Weather>

export const FirstStory = {
    args: {
        weekDay: "Lunes", 
        hour: 12, 
        state: "sunny", 
        temperature: 24
    }
}