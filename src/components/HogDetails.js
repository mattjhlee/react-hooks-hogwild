import React from "react";

function HogDetails({ hog }) {
    const greasedText = hog.greased ? "true" : "false"

    return(
        <div className="extra content">
            <div className="description">
                specialty: {hog.specialty}
            </div>
            <div className="description">
                highest medal achieved: {hog["highest medal achieved"]}
            </div>
            <span className="left floated">
                greased: {greasedText}
            </span>
            <span className="right floated">
            weight: {hog.weight}
            </span>
        </div>
        ) 
}

export default HogDetails;