import React from 'react'
import CityInfo from './CityInfo'


export default {
    title: "CityInfo",
    component: CityInfo
}

const CityExample = (city, country) => <CityInfo city={city} country={country}></CityInfo>

export const FirstStory = {
    args: {
        city: "Pérez Zeledón",
        country: "Costa Rica"
    }
}