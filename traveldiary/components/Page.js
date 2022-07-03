import React from "react"
import ReactDOM from "react-dom"

function Page(props){
    return(
        <>
        <img src = {props.item.imageUrl} className="image1"/>
        <img src = "../images/location.jpg" className="image2"/>
        <p className="country">{props.item.location}</p>
        <a href = {props.item.googleMapsUrl} className="gmaps" >View on Google Maps</a>
        <p className="place">{props.item.title}</p>
        <p className="date">{props.item.startDate}-{props.item.endDate}</p>
        <p className = "desc">{props.item.description}</p>
        </>
    )
}

export default Page