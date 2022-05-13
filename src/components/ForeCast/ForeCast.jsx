import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'
import ForeCastItem from '../ForeCastItem/ForeCastItem'
import {validValues} from '../IconState/IconState'


const renderForecastItem = forecast => {
    const {weekDay, hour, state, temperature} = forecast
    return(
        <Grid item key={`${state}${weekDay}`+(weekDay+hour+temperature)}>
            <ForeCastItem weekDay={weekDay} hour={hour} state={state} temperature={temperature}></ForeCastItem>
        </Grid>
    )
}

function ForeCast({forecastItemList}) {
  return (
    <Grid container justify="center"
        alignItems="center">
            {
                forecastItemList.map(forecast => renderForecastItem(forecast))
            }
    </Grid>
  )
}

ForeCast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validValues).isRequired,
        temperature: PropTypes.number.isRequired
    })).isRequired
}

export default ForeCast
