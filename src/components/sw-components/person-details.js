import React from 'react'
import ItemDetails from '../item-details'
import { withSwapiService } from '../hoc-helpers'
import Record from './record'

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye color" />
        </ItemDetails>
            )  
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails) 
