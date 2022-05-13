import React from 'react'
import PropTypes from 'prop-types'
import {WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain} from 'react-icons/wi'

export const validValues = ["cloud", "cloudy", "fog", "sunny"]

const stateByName = {
  cloud: WiCloud,
  cloudy: WiDayCloudy,
  fog: WiDayFog,
  rain: WiRain,
  sunny: WiDaySunny
}

const IconState = ({state}) => {
    const IconState = stateByName[state]
    return (
        <IconState/>
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
}

export default IconState