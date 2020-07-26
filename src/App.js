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
    </div>
  );
}

export default App;
