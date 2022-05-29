import React from "react"

const Use = () => {
  return (
    <div className="useContainer">
        <div className="topDiv"></div>
        <div className="infoSection">
        <h1>How it works</h1>

        {/* image */}
        <h2>Find a bicycle</h2>
        <p>Hop on to the website and follow directions for renting a bicycle. 
            Reserve a nearby stop and simply walk up to the vehicle to get started.</p>

        <h2>Start riding</h2>
        <p>Enter the OTP you have received to start your ride and you are good to go.</p>

        <h2>End the ride responsibly</h2>
        <p>To end your trip, park your bicycle at any nearby destination stop.</p>
        </div>
        <div className="endDiv"></div>
    </div>
  )
}

export default Use