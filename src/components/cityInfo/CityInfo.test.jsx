import React from 'react';
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import CityInfo from './CityInfo'


test("CityInfo Render", async () => {
    //AAA
    //Arange
    //Act
    const {findAllByRole} = render(<CityInfo city={"Pérez Zeledón"} country={"Costa Rica"}/>)
    //Assert
    const cityComponents = await findAllByRole("heading")
})