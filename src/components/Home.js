import React from 'react'
import ListingContainer from './Listings/ListingContainer'
import Map from './GoogleMap/GoogleMap'

const Home = (props) => {
    return (
        <div>
            <div>
                <h1>Realt</h1>
            </div>
            <div>
                <Map />
            </div>
            <div>
                <ListingContainer />
            </div>
        </div>
    )
}
export default Home