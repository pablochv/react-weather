import React from 'react'
import PropTypes from 'prop-types'
import {Typography } from '@mui/material'
import { IconContext } from 'react-icons'
import IconState, {validValues} from '../IconState/IconState'

const validValues = ["cloud", "cloudy", "fog", "sunny"]


const Weather = ({temperature, state}) => {
  return (
    <div>
      <IconContext.Provider value={{size: '2em'}}>
        <IconState state={state}/>
      </IconContext.Provider>
      <Typography variant="h2">{temperature}</Typography>
    </div>
  )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired
}

export default Weather