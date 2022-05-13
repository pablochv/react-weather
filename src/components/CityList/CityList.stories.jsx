import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}

const CityListExample = ({cities, onClickCity}) => <CityList cities={cities} onClickCity={onClickCity}></CityList>

export const FirstStory = {
    args: {
        cities: [{city: "Buenos Aires", country: "Costa Rica"}, {city: "Pérez Zeledón", country: "Costa Rica"}, 
                {city: "Los Yoses", country: "Costa Rica"}],
        onClickCity: action("Click en city")
    }
}