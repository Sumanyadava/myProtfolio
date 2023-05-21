import React from 'react'
import HomeClock from './HomeClock'
import Homecv from './Homecv'
import Homety from './Hometypo'
import Homeskills from './Homeskills'
// import data from "./cv/data.json"

const Home = () => {
    
    return (

        <div>
            
            <HomeClock />
            <Homety />
            <Homecv />
            <Homeskills />
        </div>
    )
}

export default Home
