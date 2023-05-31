import React from 'react'

import '../../styles/homeStyle/homeclock.scss'
// import '.../styles/homeclock.scss'

const HomeClock = () => {
    return (
        <div className="clock">
            
            <div className="time"></div>
            <div className="name">
                <h2 className="upp h2">The Current Mission Ends In</h2>
                <div className="tim">24:45</div>
                <h2 className="downn h2">Excute Aws</h2>
            </div>
        </div>
    )
}

export default HomeClock
