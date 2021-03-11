import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service'
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import { SwapiServiceProvider } from '../swapi-service-context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { StarshipDetails } from '../sw-components'

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService()

  render() {

    return (
    
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <Header />
            <RandomPlanet />
            <Switch >
              <Route path="/" render={
              () => <h2>Welcome to StarDB</h2>
            } exact/>
            <Route path="/people/:id?" component={PeoplePage}/>
            <Route path="/planets/:id?" component={PlanetsPage}/>
            <Route path="/starships" exact component={StarshipsPage}/>
            <Route path="/starships/:id" render={
              ({ match }) => {       
                const { id } = match.params
             return <StarshipDetails itemId={id}/>
            }
            } />
            <Route render={() => {
              return <h1>Page not found</h1>
            }}/>
            </Switch>    
          </Router>
        </SwapiServiceProvider>
    )
  }
}
