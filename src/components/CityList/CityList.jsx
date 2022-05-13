import React from 'react'
import PropTypes from 'prop-types'

//Components
import { Grid } from '@mui/material/'
import CityInfo from '../CityInfo/'
import Weather from '../Weather/'


const renderCityAndCountry = eventonClickCity => (cityAndCountry) => {
  const {city, country} = cityAndCountry

  return (
          <li key={city+country} onClick={eventonClickCity}>
            <Grid container justify="center" alignItems="center">
              <Grid item md={8} xs={12}>
                <CityInfo city={city} country={country}></CityInfo>
              </Grid>
              <Grid item md={4} xs={12}>
                <Weather temperature={10} state="cloud"></Weather>
              </Grid>
            </Grid>
          </li>)
  
}

const CityList = ({cities, onClickCity}) => {
  return (
    <ul>
        {
          cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
        }
    </ul>
  )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList