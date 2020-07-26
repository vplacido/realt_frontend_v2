import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import LoginFormContainer from './components/Authentication/LoginFormContainer'
import SignUpFormContainer from './components/Authentication/SignUpFormContainer'
import ListingContainer from './components/Listings/ListingContainer'
import ListingPage from './components/Listings/item/ListingPage'
import NewListingForm from './components/Listings/NewListingForm'
import NavBar from './components/NavBar/NavBar'
import TripContainer from './components/TripsContainer'

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/listings' component={ListingContainer} />
          <Route exact path='/listings/new' component={NewListingForm} />
          <Route path='/listings/:listingId' component={ListingPage} />
          <Route exact path='/login' component={LoginFormContainer}/>
          <Route exact path='/signup' component={SignUpFormContainer} />
          <Route exact path='/trips' component={TripContainer} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
