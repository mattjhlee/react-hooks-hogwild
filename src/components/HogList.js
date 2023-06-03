import React from "react";
import { useState } from "react";
import HogDetails from "./HogDetails";

function HogList({ hogs, filterGreased, selectedSort }) {
    const [showDetails, setShowDetails] = useState(true);

    let sortedArray=[];

    if(selectedSort === "name"){
        sortedArray = [...hogs].sort((a,b)=>{
            if(a.name<b.name){
                return -1
            }else if(a.name>b.name){
                return 1
            }else{
                return 0
        }})
    }else if(selectedSort === "weight"){
        sortedArray = [...hogs].sort((a,b)=>a.weight - b.weight)
    }else{
        sortedArray = hogs
    }

    function handleDetailsClick(hog) {
		document.getElementById(hog.name).querySelector(".detail").hidden = !showDetails
        setShowDetails(!showDetails)
	}

    const filteredHogs = sortedArray.filter(hog=>{
        return filterGreased ? hog.greased === filterGreased : true
    })

    const hogCards = filteredHogs.map(hog=>{
        return (
            <div className="card" key={hog.name} id={hog.name} onClick={()=>handleDetailsClick(hog)}>
                <div className="image">
                    <img alt={hog.name} src={hog.image}/>
                </div>
                <div className="content">
                    <div className="header">{hog.name}</div>
                </div>
                <div className="detail" hidden={true}>
                    <HogDetails hog={hog}/>
                </div>
            </div>
        )
    })

    return(
        <div className="ui link cards">
            {hogCards}
        </div>
    )

}

export default HogList;